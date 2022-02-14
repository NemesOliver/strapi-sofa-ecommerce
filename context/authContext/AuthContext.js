import { useRouter } from "next/router";
import { createContext, useState, useEffect } from "react";
import { strapi } from "../../libs";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== "undefined") {
      const cookies = document.cookie.split(";");

      // if jwt cookie exists, user should stay logged in, else we will log user out
      cookies.forEach((cookie) => {
        if (cookie.startsWith("jwt")) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    }
  }, []);

  // 1. LOG IN USER BY CALLING STRAPI API
  const login = async (identifier, password) => {
    setIsLoading(true);
    setError(false);

    try {
      // Request to strapi, returns user and jwt, identifier could be email or username
      const {data} = await strapi.post("/auth/local", {
        identifier,
        password,
      });

      // Save user
      setUser(data.user);
      setIsLoggedIn(true);
      setIsLoading(false);

      router.back();

      // Store jwt in cookies
      const token = `jwt=Bearer ${data.jwt}`;
      document.cookie = token;
    } catch (e) {
      setIsLoading(false);
      setError(true);

      console.warn(e.message);
    }
  };

  // 2. LOG OUT USER BY DELETING COOKIE
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    document.cookie = `jwt=;expires=${new Date(0).toUTCString()}`;
  };

  // 3. REGISTER NEW USER
  const registerNewUser = async (email, password) => {
    setIsLoading(true);
    setError(false);

    try {
      const { data } = await strapi.post("/auth/local/register", {
        email,
        password,
      });

      // Save user
      setUser(data.user);
      setIsLoggedIn(true);
      setIsLoading(false);

      router.push("/shop/products");

      // Store jwt in cookies
      const token = `jwt=Bearer ${data.jwt}`;
      document.cookie = token;
    } catch (e) {
      setIsLoading(false);
      setError(true);

      console.warn(e.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerNewUser,
        login,
        logout,
        user,
        isLoggedIn,
        isLoading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
