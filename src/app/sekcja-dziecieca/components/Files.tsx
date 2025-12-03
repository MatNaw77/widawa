const signFiles = [
    {
        name: "Akceptacja regulaminu treningów",
        href: "/files/Załącznik-1_Akceptacja-regulaminu-treningów-Widawa.pdf",
    },
    {
        name: "Formularz zgłoszeniowy dziecka",
        href: "/files/Załącznik-2_Formularz-zgłoszeniowy-dziecka-Widawa.pdf",
    },
    {
        name: "Oświadczenie zdrowotne dziecka",
        href: "/files/Załącznik-3_Oświadczenie-zdrowotne-dziecka-Widawa.pdf",
    },
    {
        name: "Oświadczenie NNW dziecka",
        href: "/files/Załącznik-4_Oświadczenie-NNW-dziecka-Widawa.pdf",
    },
    {
        name: "Zgoda na przetwarzanie danych",
        href: "/files/Załącznik-5_Zgoda-na-przetwarzanie-danych-Widawa.pdf",
    },
];

const files = [
    {
        name: "Regulamin udziału w treningach",
        href: "/files/Regulamin-treningów-dla-dzieci-Widawa.pdf",
    },
    {
        name: "Klauzula informacyjna RODO",
        href: "/files/Załącznik-6_Klauzula-informacyjna-RODO-Widawa.pdf",
    },
    {
        name: "Polityka ochrony małoletnich",
        href: "/files/Załącznik-7_Polityka-Ochrony-Małoletnich_Widawa.pdf",
    },
];

export function Files() {
    return (
        <div className="max-w-5xl mx-auto px-6 animate-fadeIn delay-600 space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-4">🖊️ Dokumenty do zapisu</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {signFiles.map((file, index) => (
                        <li key={index}>
                            <a href={file.href} download className="text-blue-600 hover:underline">
                                {file.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">📂 Pozostałe pliki do pobrania</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {files.map((file, index) => (
                        <li key={index}>
                            <a href={file.href} download className="text-blue-600 hover:underline">
                                {file.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
