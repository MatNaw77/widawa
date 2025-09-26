import React from "react";
import type { ContactPerson } from "../data/data";

type PersonItemProps = {
    person: ContactPerson;
    index: number;
};

export function PersonItem({ person, index }: PersonItemProps) {
    return (
        <li key={index}>
            <p>
                <span className="font-medium">{person.name}</span>
                {person.role && ` – ${person.role}`}
                <br />
                📞{" "}
                <a
                    href={`tel:${person.phone.replace(/\s+/g, "")}`}
                    className="text-blue-600 hover:underline"
                >
                    {person.phone}
                </a>
            </p>
        </li>
    );
}
