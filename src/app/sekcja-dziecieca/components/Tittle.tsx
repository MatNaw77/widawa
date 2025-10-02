import React from "react";

export function Tittle() {
    return (
        <div className="text-center max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold dark:text-gray-100 text-red-700 drop-shadow-lg animate-fadeInDown mb-6">
                🧒 Sekcja dziecięca <br /> tu zaczyna się przyszłość
            </h1>
            <p className="text-gray-700 text-lg md:text-xl dark:text-gray-100 animate-fadeIn delay-100">
                W sekcji dziecięcej KS Tomtex Widawa Wrocław wierzymy, że sport kształtuje
                charakter. Nasza oferta to nie tylko treningi piłki nożnej — to miejsce rozwoju,
                zabawy, współpracy i więzi lokalnej społeczności.
            </p>
        </div>
    );
}
