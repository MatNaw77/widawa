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
                            <td className="px-4 py-2">5–7 lat</td>
                            <td className="px-4 py-2">2 razy w tygodniu</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Orlik</td>
                            <td className="px-4 py-2">8–10 lat</td>
                            <td className="px-4 py-2">2 razy w tygodniu</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-gray-700 mt-2 italic">
                * Dokładny harmonogram (dni, godziny, miejsce) publikujemy na naszym profilu
                Facebook. <FacebookLink inline={true} />
            </p>
        </div>
    );
}
