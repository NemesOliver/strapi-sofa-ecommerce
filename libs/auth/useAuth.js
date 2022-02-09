import { useEffect, useState } from "react";
import axios from "axios";
import url from "../../strapi_url/url";

// Strapi login endpoint
const authUrl = `${url}/auth/local`;

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    try {
      // Request to strapi, returns user and jwt, identifier could be email or username
      const { data } = await axios.post(authUrl, { identifier, password });

      // Save user
      setUser(data.user);

      // Store jwt in cookies
      const token = `jwt=Bearer ${data.jwt}`;
      document.cookie = token;
    } catch (e) {
      console.warn(e.message);
    }
  };

  // 2. LOG OUT USER BY DELETING COOKIE
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    document.cookie = `jwt=;expires=${new Date(0).toUTCString()}`;
  };

  return { login, logout, user, isLoggedIn };
};
