import Link from "next/link";

const Login = () => {
  return (
    <>
      <main className="h-[calc(100vh-60px)] grid place-content-center text-center  ">
        <div className="max-w-[450px]">
          <h3 className="text-[36px] font-medium">
            Please log in to continue.
          </h3>
          <p className="text-[24px] font font-medium ">or</p>
          <Link href="#" passHref>
            <a className="text-[24px] text-[#4890FB] ">Create an account</a>
          </Link>
          <form className="mt-20">
            <div className="flex flex-col text-left">
              <label htmlFor="username">Username or email</label>
              <input
                className="border rounded-sm border-primary focus:outline-primary px-2 py-1.5"
                type="text"
                id="username"
              />
            </div>
            <div className="flex flex-col text-left mt-4">
              <label htmlFor="password">Password</label>
              <input
                className="border rounded-sm border-primary focus:outline-primary px-2 py-1.5"
                type="password"
                id="password"
              />
            </div>
            <button className="w-full px-2 py-1.5 bg-primary rounded-sm mt-10">
              submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
};
export default Login;
