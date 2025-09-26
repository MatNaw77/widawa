import { sections } from "./components/sections";

export default function PolitykaPrywatnosci() {
    return (
        <section className="max-w-6xl w-full px-4 py-16 prose prose-neutral mx-auto mt-12">
            <h1 className="text-3xl font-bold mb-6">Polityka prywatności</h1>
            <p>
                Niniejsza Polityka Prywatności informuje o sposobach ochrony danych osobowych osób
                korzystających z serwisu internetowego (dalej: Użytkownicy), znajdującego się pod
                adresem Waszej strony internetowej (dalej: Serwis).
            </p>

            {sections.map((sec, i) => (
                <div key={i} className="mt-8">
                    <h2 className="text-2xl font-semibold mb-2">{sec.title}</h2>
                    {sec.content}
                </div>
            ))}
        </section>
    );
}
