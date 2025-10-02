"use client";
import { FC } from "react";
import { createPortal } from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./validationSchema";
import toast from "react-hot-toast";

type FormType = {
    parentName: string;
    childName: string;
    age: string;
    email: string;
    phoneNumber: string;
    notes: string;
};

const initialValues: FormType = {
    parentName: "",
    childName: "",
    age: "",
    email: "",
    phoneNumber: "",
    notes: "",
};

export const SignUpForm: FC<{ onClose: () => void }> = ({ onClose }) => {
    if (typeof document === "undefined") return null;

    const handleSubmit = async (
        values: FormType,
        {
            setSubmitting,
            resetForm,
        }: { setSubmitting: (submitting: boolean) => void; resetForm: () => void }
    ) => {
        try {
            const res = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    parentName: values.parentName,
                    childName: values.childName,
                    age: values.age,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                }),
            });

            if (!res.ok) throw new Error("Nie udało się wysłać maila");

            toast.success("Formularz został wysłany! ✅");
            resetForm();
            onClose();
        } catch (err) {
            console.error(err);
            toast.error("Wystąpił błąd przy wysyłce maila. Spróbuj ponownie.");
        } finally {
            setSubmitting(false);
        }
    };

    return createPortal(
        <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50"
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
                                    Imię i nazwisko opiekuna
                                </label>
                                <Field
                                    type="text"
                                    name="parentName"
                                    placeholder="np. Jan Kowalski"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 
                                        focus:ring-2 focus:ring-red-500 focus:outline-none
                                        placeholder-gray-400 text-black"
                                />
                                <ErrorMessage
                                    name="parentName"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Imię i nazwisko dziecka
                                </label>
                                <Field
                                    type="text"
                                    name="childName"
                                    placeholder="np. Stanisław Kowalski"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 
                                        focus:ring-2 focus:ring-red-500 focus:outline-none
                                        placeholder-gray-400 text-black"
                                />
                                <ErrorMessage
                                    name="childName"
                                    component="div"
                                    className="text-sm text-red-500 mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Wiek dziecka
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
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Uwagi (opcjonalnie)
                                </label>
                                <Field
                                    as="textarea"
                                    name="notes"
                                    placeholder="Np. informacje o alergiach, preferencjach itp."
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 
                                        focus:ring-2 focus:ring-red-500 focus:outline-none
                                        placeholder-gray-400 text-black resize-none"
                                    rows={3}
                                />
                                <ErrorMessage
                                    name="notes"
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
        </div>,
        document.body
    );
};
