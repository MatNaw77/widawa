import { FC } from "react";
import { Star } from "lucide-react";

export const Title: FC = () => (
    <section className="w-full mt-30">
        <div className="text-center max-w-3xl mx-auto px-6">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-red-700 animate-fadeInDown">
                <span className="inline-block animate-bounce mr-2">
                    <Star className="w-8 h-8 text-yellow-400 inline" />
                </span>
                Stowarzyszenie Futbolu Widawa Wrocław
            </h1>
            <p className="text-gray-700 mb-4 text-lg md:text-xl animate-fadeIn delay-100">
                Od 2013 roku łączymy ludzi wokół piłki nożnej, pasji i zdrowego stylu życia.
            </p>
            <p className="text-gray-700 text-lg md:text-xl animate-fadeIn delay-200">
                Dla nas futbol to coś więcej niż rywalizacja — to{" "}
                <span className="font-semibold text-red-600">radość</span>,{" "}
                <span className="font-semibold text-red-600">współpraca</span> i{" "}
                <span className="font-semibold text-red-600">rozwój</span>, które towarzyszą zarówno
                najmłodszym, jak i seniorom.
            </p>
        </div>
    </section>
);
