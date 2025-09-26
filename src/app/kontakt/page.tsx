import { Tittle } from "./components/Tittle";
import { ContactCard } from "./components/ContactCard";

export default function Kontakt() {
    return (
        <section
            className="bg-gray-100 min-h-[calc(100vh-288px)] w-full py-12 px-6 md:px-16 mt-20"
            id="kontakt"
        >
            <div className="max-w-5xl mx-auto">
                <Tittle />
                <ContactCard />
            </div>
        </section>
    );
}
