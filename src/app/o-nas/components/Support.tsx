import React from "react";
import Link from "next/link";

export function Support() {
    return (
        <div className="mt-12 text-center">
            <Link
                href="/stowarzyszenie"
                className="px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
            >
                Wesprzyj klub
            </Link>
        </div>
    );
}
