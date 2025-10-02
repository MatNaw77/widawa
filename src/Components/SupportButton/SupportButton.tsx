"use client";
import { FC } from "react";
import Link from "next/link";

const SupportButton: FC = () => {
    return (
        <Link
            className="px-6 py-3 bg-blue-600 hover:bg-violet-600 cursor-pointer transition text-white rounded-full text-lg font-semibold shadow-lg"
            href="/stowarzyszenie#donate"
        >
            Wesprzyj nas
        </Link>
    );
};

export default SupportButton;
