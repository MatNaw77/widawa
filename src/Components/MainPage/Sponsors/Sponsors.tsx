"use client";
import { FC } from "react";

export const PartnersBanner: FC = () => (
    <section className="w-full py-16 px-4 bg-gray-100 text-center font-sans">
        <h2 className="text-2xl font-bold mb-8">
            Wspierają nas – dziękujemy za zaufanie
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <li className="p-4 bg-white shadow-md rounded-xl border border-gray-200">
                <p className="text-lg font-semibold">Tomtex - Tomasz Słowiński</p>
            </li>

            <li className="p-4 bg-white shadow-md rounded-xl border border-gray-200">
                <p className="text-lg font-semibold">Twój Ogródek</p>
            </li>

            <li className="p-4 bg-white shadow-md rounded-xl border border-gray-200">
                <p className="text-lg font-semibold">Focca Czyja</p>
            </li>

            <li className="p-4 bg-white shadow-md rounded-xl border border-gray-200">
                <p className="text-lg font-semibold">AmSports</p>
            </li>
        </ul>
    </section>
);
