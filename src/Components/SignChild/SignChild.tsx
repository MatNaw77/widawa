"use client";
import { FC } from "react";

const SignChild: FC<{ extended?: boolean }> = ({ extended = false }) => {
    const handleClick = () => {
        alert("Bedzie formularz do wyslania wam maila???");
    };

    return (
        <button
            className={`px-6 py-3 rounded-full text-lg font-semibold shadow-lg cursor-pointer transition ${extended
                    ? "bg-blue-600 hover:bg-violet-600 text-white"
                    : "bg-white hover:bg-gray-200 text-black"
                }`}
            onClick={handleClick}
        >
            {extended ? "Zapisz dziecko do sekcji" : "Zapisz dziecko"}
        </button>
    );
};

export default SignChild;