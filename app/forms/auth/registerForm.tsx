import { withFormik } from "formik";
import * as yup from "yup";
import { RegisterFormValuesInterface } from "@/app/contracts/auth";
import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";

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
    handleSubmit: (values) => {
      console.log(values);
    },
  }
)(InnerRegisterForm);
export default RegisterForm;
