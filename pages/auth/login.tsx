import type { NextPage } from "next";
import LoginForm from "@/app/forms/auth/loginForm";

const Login: NextPage = () => {
  // const onSubmit = {};
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;