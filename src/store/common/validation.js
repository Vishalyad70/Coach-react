import * as Yup from "yup";
export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("please enter valid email address")
    .required("email field is required")
    .label("email"),
  password: Yup.string()
    .required("password field is required")
    .label("password"),
});

export const forgotValidation = Yup.object().shape({
  email: Yup.string()
    .email("email field is required")
    .required()
    .label("Email"),
});

export const changePasswordValidation = Yup.object().shape({
  temporary_pass: Yup.string().required("Tempory password is required"),
  password: Yup.string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters."),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});
