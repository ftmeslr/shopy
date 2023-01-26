import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  inputClassName?: string;
  labeClassName?: string;
  errorClassName?: string;
}
const Input: FC<InputProps> = ({
  name,
  label,
  type = "text",
  inputClassName,
  labeClassName,
  errorClassName,
}) => {
  return (
    <>
      <label htmlFor={name} className={`${labeClassName ?? ""}`}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        className={`relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
          inputClassName ?? ""
        }`}
        placeholder={name}
      />
      <ErrorMessage
        name={name}
        className={`text-red-500 text-sm ${errorClassName ?? ""}`}
        component="div"
      />
    </>
  );
};

export default Input;
