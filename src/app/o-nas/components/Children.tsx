import { Baby, Star, Calendar } from "lucide-react";

export function Children() {
    return (
        <section className="mt-16 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-md p-8">
            <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold mb-6 text-green-700">
                <Baby className="w-7 h-7 text-pink-500" /> Dzieci i młodzież
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
                Od czerwca 2019 roku, we współpracy z Radą Osiedla Widawa, reaktywowaliśmy sekcję
                dziecięcą. Od 2024 roku trenują u nas dwie grupy młodzieżowe:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="p-4 rounded-xl bg-white shadow flex items-center gap-3">
                    <span className="text-2xl">👶</span>
                    <p className="font-medium text-gray-800">Skrzat/Żak</p>
                </div>
                <div className="p-4 rounded-xl bg-white shadow flex items-center gap-3">
                    <span className="text-2xl">👦</span>
                    <p className="font-medium text-gray-800">Orlik</p>
                </div>
            </div>

            <p className="text-gray-700 mb-6">
                📈 Obie drużyny rozwijają się dynamicznie – rozgrywają sparingi i biorą udział w
                turniejach oraz lidze.
            </p>

            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-green-600 mt-1" />
                    <p className="text-gray-700">
                        <span className="font-semibold">Sierpień 2025:</span> udział w I Memoriale
                        im. Łukasza Kuczera i Kacpra Błaszczyka w Prusicach, gdzie pokazaliśmy się z
                        bardzo dobrej strony.
                    </p>
                </div>
                <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-green-600 mt-1" />
                    <p className="text-gray-700">
                        <span className="font-semibold">Wrzesień 2025:</span> debiut w Lidze Młodych
                        Talentów na wrocławskich Kłokoczycach.
                    </p>
                </div>
            </div>

            <div className="mt-8 text-center">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-green-700 font-semibold">Tu rodzi się przyszłość Widawy! 💚⚽</p>
            </div>
        </section>
    );
}
