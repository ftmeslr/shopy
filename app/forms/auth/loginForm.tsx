import InnerLoginForm from "@/app/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/app/contracts/auth";
import callApi from "@/app/helpers/callApi";
import { withFormik } from "formik";
import * as yup from "yup";
import ValidationError from "../../exceptions/validationError";

const LoginFormVlidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

interface LoginFormProps {
  setCookie: any;
}
const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => {
    return {
      email: "",
      password: "",
    };
  },
  validationSchema: LoginFormVlidationSchema,

  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      console.log(res);
      // if (res.status === 200) {
      // props.setCookie("shop-token", res.data.token, {
      //   maxAge: 3600 * 24 * 30,
      //   domain: "localhost",
      //   path: "/",
      //   sameSite: "lax",
      // });
      // }
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log("dsfsdf");
        Object.entries(error.message).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  },

  
})(InnerLoginForm);
export default LoginForm;
