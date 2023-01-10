import * as yup from "yup";

export const schema = yup.object({
  full_name: yup.string().required("Por favor, ingrese su nombre y apellido."),
  birth_date: yup
    .string()
    .required("Por favor, ingrese su fecha de nacimiento."),
  email: yup
    .string()
    .email("Formato de correo erróneo.")
    .required("Por favor, ingrese su correo electrónico."),
  country_of_origin: yup
    .string()
    .required("Por favor, ingrese su país de origen."),
  terms_and_conditions: yup
    .bool()
    .oneOf([true], "Debes aceptar los términos y condiciones."),
});
