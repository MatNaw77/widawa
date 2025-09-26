import React from "react";
import { email } from "../data/data";

export function Tittle() {
    return (
        <>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Kontakt</h2>

            <div className="mb-10 text-center">
                <p className="text-lg font-medium text-gray-700">📧 E-mail ogólny:</p>
                <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                    {email}
                </a>
            </div>
        </>
    );
}
