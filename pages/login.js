import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Input, LoadingButton } from "../components";
import { AuthContext, SnackbarContext } from "../context";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useContext(AuthContext);
  const { triggerSnackbar } = useContext(SnackbarContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic input validation
    if (!identifier || !password) {
      triggerSnackbar("All fields are required!", "red");
      return;
    }

    // If everything's fine log user in and navigate back
    login(identifier, password);
    router.back();

    // If invalid credentials or connection error happens
    if (error) {
      triggerSnackbar("Username or Password invalid!", "red");
    }
  };

  return (
    <>
      <main className="h-[calc(100vh-60px)] grid place-content-center text-center">
        <div className="max-w-[450px]">
          <h3 className="text-[36px] font-medium">
            Please log in to continue.
          </h3>
          <p className="text-[24px] font font-medium ">or</p>
          <Link href="#" passHref>
            <a className="text-[24px] text-[#4890FB] ">Create an account</a>
          </Link>
          <form onSubmit={handleSubmit} className="mt-20">
            <div className="flex flex-col text-left">
              <Input
                label="Username or email"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-left mt-4">
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <LoadingButton isLoading={isLoading} text="log in" />
          </form>
        </div>
      </main>
    </>
  );
};
export default Login;
