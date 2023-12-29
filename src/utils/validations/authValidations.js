import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter valid email address"),
});
