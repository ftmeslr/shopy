import { withFormik } from "formik";
import * as yup from "yup";
import { RegisterFormValuesInterface } from "@/app/contracts/auth";
import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import callApi from "@/app/helpers/callApi";
import Router from "next/router";
const RegisterFormVlidationSchema = yup.object().shape({
  name: yup.string().required().min(4),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

interface RegisterFormProps {}
const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>(
  {
    mapPropsToValues: (props) => {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    validationSchema: RegisterFormVlidationSchema,
    handleSubmit: async (values) => {
      const res = await callApi().post("/auth/register", values);
      Router.push('/auth/login');
    },
  }
)(InnerRegisterForm);
export default RegisterForm;
