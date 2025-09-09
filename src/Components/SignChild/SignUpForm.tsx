"use client";
import { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./validationSchema";

type FormType = {
    name: string;
    surname: string;
    age: string;
    email: string;
    phoneNumber: string;
};

const initialValues: FormType = {
    name: "",
    surname: "",
    age: "",
    email: "",
    phoneNumber: "",
};

export const SignUpForm: FC<{ onClose: () => void }> = ({ onClose }) => {
    const handleSubmit = (values: FormType, { setSubmitting, resetForm }: { setSubmitting: (submitting: boolean) => void, resetForm: () => void }) => {
        // console.log("📨 Wysłane wartości:", values);
        alert("Email został wysłany! ✅");
        resetForm();
        setSubmitting(false);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
                    📝 Zapisz dziecko do sekcji
                </h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Imię dziecka
                                </label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="np. Jan"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 
                                        focus:ring-2 focus:ring-red-500 focus:outline-none
                                        placeholder-gray-400 text-black"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nazwisko dziecka
                                </label>
                                <Field
                                    type="text"
                                    name="surname"
                                    placeholder="np. Kowalski"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 
                                        focus:ring-2 focus:ring-red-500 focus:outline-none
                                        placeholder-gray-400 text-black"
                                />
                                <ErrorMessage
                                    name="surname"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Wiek
                                </label>
                                <Field
                                    type="number"
                                    name="age"
                                    placeholder="np. 12"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 
                                        focus:ring-2 focus:ring-red-500 focus:outline-none
                                        placeholder-gray-400 text-black"
                                />
                                <ErrorMessage
                                    name="age"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Numer telefonu do opiekuna
                                </label>
                                <Field
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="np. 600123456"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 
                                        focus:ring-2 focus:ring-red-500 focus:outline-none
                                        placeholder-gray-400 text-black"
                                />
                                <ErrorMessage
                                    name="phoneNumber"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Adres email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="np. jan.kowalski@email.com"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 
                                        focus:ring-2 focus:ring-red-500 focus:outline-none
                                        placeholder-gray-400 text-black"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition shadow-md disabled:bg-gray-400"
                            >
                                {isSubmitting ? "Wysyłanie..." : "Zapisz dziecko"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
