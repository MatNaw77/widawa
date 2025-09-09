import * as Yup from "yup";

export const validationSchema = Yup.object({
    name: Yup.string().required("Imię jest wymagane"),
    surname: Yup.string().required("Nazwisko jest wymagane"),
    age: Yup.number()
        .min(3, "Minimalny wiek to 3 lata")
        .max(18, "Maksymalny wiek to 18 lat")
        .required("Wiek jest wymagany"),
    phoneNumber: Yup.string()
        .matches(/^[0-9]{9}$/, "Telefon musi mieć 9 cyfr")
        .required("Telefon jest wymagany"),
    email: Yup.string()
        .email("Nieprawidłowy adres email")
        .required("Email jest wymagany"),
});