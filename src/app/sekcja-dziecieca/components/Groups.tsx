import { FacebookLink } from "@/Components/FacebookLink/FacebookLink";

export function Groups() {
    return (
        <div className="max-w-5xl mx-auto px-6 animate-fadeIn delay-300">
            <h2 className="text-2xl font-semibold mb-4">Grupy treningowe</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-200 text-gray-700">
                    <thead className="bg-red-50">
                        <tr>
                            <th className="px-4 py-2 text-left">Grupa</th>
                            <th className="px-4 py-2 text-left">Wiek uczestników</th>
                            <th className="px-4 py-2 text-left">Treningi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-2">Skrzat / Żak</td>
                            <td className="px-4 py-2">6–8 lat</td>
                            <td className="px-4 py-2">2 razy w tygodniu</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Orlik</td>
                            <td className="px-4 py-2">9–11 lat</td>
                            <td className="px-4 py-2">2 razy w tygodniu</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-gray-700 mt-2 italic">
                * Dokładny harmonogram (dni, godziny, miejsce) publikujemy na naszym profilu Facebook.{" "}
                <FacebookLink inline={true} />
            </p>

            {/* NOWA SEKCJA — MIEJSCA TRENINGÓW */}
            <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Miejsca treningów</h3>

                <div className="space-y-4 text-gray-700">
                    <div>
                        <h4 className="font-semibold text-red-700">Wiosna – Jesień (kwiecień – październik)</h4>
                        <p>Treningi odbywają się na boisku przy ulicy <strong>Kominiarskiej 68</strong> we Wrocławiu.</p>
                        <p className="text-sm mt-1 text-gray-500">Prowadzący: Michał</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-red-700">Zima (listopad – marzec)</h4>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Szkoła Podstawowa nr 50 — ul. <strong>Czeska 38</strong>, Wrocław</li>
                            <li>Zespół Szkolno-Przedszkolny nr 26 — ul. <strong>Cynamonowa 40</strong>, Wrocław</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
