import * as Yup from "yup";

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const RegisterInitialValues: RegisterFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterValidation = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "El nombre es muy corto")
    .max(50, "El nombre es muy largo")
    .required("El nombre es requerido"),

  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es requerido"),

  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es requerida"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("Debes confirmar tu contraseña"),
});
