import { withFormik } from "formik";
import * as yup from "yup";
import { RegisterFormValuesInterface } from "@/app/contracts/auth";
import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import callApi from "@/app/helpers/callApi";
import Router from "next/router";
import ValidationError from "../../exceptions/validationError";

const RegisterFormVlidationSchema = yup.object().shape({
  name: yup.string().required().min(4),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

interface RegisterFormProps {
  setCookie: any;
}
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
    handleSubmit: async (values, { props, setFieldError }) => {
      try {
        const res = await callApi().post("/auth/register", values);
        if (res.status === 201) {
          Router.push("/auth/login");
        }
      } catch (error) {
        if (error instanceof ValidationError) {
          Object.entries(error.message).forEach(([key, value]) =>
            setFieldError(key, value as string)
          );
        }
      }
    },
  }
)(InnerRegisterForm);
export default RegisterForm;
