import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Input, LoadingButton } from "../components";
import { AuthContext, SnackbarContext } from "../context";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerNewUser, isLoading, error } = useContext(AuthContext);
  const { triggerSnackbar } = useContext(SnackbarContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic input validation
    if (!email || !password) {
      triggerSnackbar("All fields are required!", "red");
      return;
    }

    // If everything's fine log user in and navigate back
    registerNewUser(email, password);
    router.back();

    // If connection error happens
    if (error) {
      triggerSnackbar("Oops! Something went wrong!", "red");
    }
  };

  return (
    <>
      <main className="h-[calc(100vh-60px)] grid place-content-center text-center">
        <div className="max-w-[450px]">
          <h3 className="text-[36px] font-medium">Create new account.</h3>
          <p className="text-[24px] font font-medium ">or</p>
          <Link href="/login" passHref>
            <a className="text-[24px] text-[#4890FB] ">Log in</a>
          </Link>
          <form onSubmit={handleSubmit} className="mt-20">
            <div className="flex flex-col text-left">
              <Input
                label="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <LoadingButton isLoading={isLoading} text="Create account" />
          </form>
        </div>
      </main>
    </>
  );
};
export default Register;
