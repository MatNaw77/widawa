"use client";
import { FC } from "react";

const SupportButton: FC = () => {
    const handleClick = () => {
        alert("Dziękujemy za wsparcie!");
    };

    return (
        <button
            className="px-6 py-3 bg-blue-600 hover:bg-violet-600 cursor-pointer transition text-white rounded-full text-lg font-semibold shadow-lg"
            onClick={handleClick}
        >
            Wesprzyj nas
        </button>
    );
};

export default SupportButton;