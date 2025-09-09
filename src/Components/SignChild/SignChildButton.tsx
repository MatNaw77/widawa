"use client";
import { FC, useState } from "react";
import { SignUpForm } from "./SignUpForm";

const SignChild: FC<{ extended?: boolean }> = ({ extended = false }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className={`px-6 py-3 rounded-full text-lg font-semibold shadow-lg cursor-pointer transition ${extended
                    ? "bg-blue-600 hover:bg-violet-600 text-white"
                    : "bg-white hover:bg-gray-200 text-black"
                    }`}
                onClick={() => setOpen(true)}
            >
                {extended ? "Zapisz dziecko do sekcji" : "Zapisz dziecko"}
            </button>

            {open && <SignUpForm onClose={() => setOpen(false)} />}
        </>
    );
};

export default SignChild;
