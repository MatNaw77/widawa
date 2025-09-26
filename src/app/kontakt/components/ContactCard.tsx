import React from "react";
import { sections } from "../data/data";
import { PersonItem } from "./PersonItem";

export function ContactCard() {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, idx) => (
                <div
                    key={idx}
                    className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500"
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span>📇</span> {section.title}
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                        {section.people.map((person, i) => (
                            <PersonItem key={i} person={person} index={i} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
