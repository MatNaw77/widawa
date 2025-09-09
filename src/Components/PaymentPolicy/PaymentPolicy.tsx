import { FC } from "react";
import { sections } from "./sections";

export const PaymentPolicy: FC = () => (
    <section className="max-w-6xl w-full px-4 py-16 prose prose-neutral mx-auto mt-12">
        <h1 className="text-3xl font-bold mb-6">
            Regulamin przekazywania darowizn
        </h1>

        {sections.map((sec, i) => (
            <div key={i} className="mt-8">
                <h2 className="text-2xl font-semibold mb-[10px]">{sec.title}</h2>
                {sec.content}
            </div>
        ))}
    </section>
);