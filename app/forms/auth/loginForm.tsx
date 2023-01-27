import InnerLoginForm from "@/app/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/app/contracts/auth";
import callApi from "@/app/helpers/callApi";
import { withFormik } from "formik";
import * as yup from "yup";

const LoginFormVlidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

interface LoginFormProps {}
const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => {
    return {
      email: "",
      password: "",
    };
  },
  validationSchema: LoginFormVlidationSchema,
  handleSubmit: async (values) => {
    const res = await callApi().post("/auth/login", values);
    if (res.status === 200) {
      console.log(res.data.token);
    }
  },
})(InnerLoginForm);
export default LoginForm;
