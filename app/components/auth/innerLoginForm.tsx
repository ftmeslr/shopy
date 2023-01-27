import { LoginFormValuesInterface } from "@/app/contracts/auth";
import Input from "app/components/input";
import { FormikProps, Form } from "formik";

const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {
  //formam props migire ke type propsam formikpropse va toooye <> migam che value haie migire
  return (
    <Form className="mt-8 space-y-6">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <Input name="email" label="email Address" type="text"></Input>
        </div>
        <div>
          <Input name="password" label="password" type="password "></Input>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
          Sign in
        </button>
      </div>
    </Form>
  );
};

export default InnerLoginForm;
