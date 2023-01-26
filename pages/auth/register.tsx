import type { NextPage } from "next";
import RegisterForm from "@/app/forms/auth/registerForm";

const Register: NextPage = () => {
  // const onSubmit = {};
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Register;
