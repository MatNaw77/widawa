import { FC } from "react";
import SupportButton from "@/Components/SupportButton/SupportButton";

export const SupportBanner: FC = () => (
    <section className="max-w-6xl w-full px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">
            Wesprzyj lokalny sport – razem możemy więcej
        </h2>
        <ul className="space-y-3 text-lg mb-8">
            <li>✔️ Działamy z własnych środków</li>
            <li>✔️ Zostań darczyńcą i wesprzyj dziecięcą sekcję</li>
        </ul>
        <SupportButton />
    </section>
);