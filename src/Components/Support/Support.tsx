import React from "react";

const SupportBanner: React.FC = () => {
    const handleClick = () => {
        alert("Dziękujemy za wsparcie!");
    };

    return (
        <div className="absolute top-100 left-20 z-10 text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
                Razem budujemy <br />przyszłość!
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl">
                Dołącz do nas i wesprzyj rozwój lokalnego sportu.
            </p>
            <button
                className="px-6 py-3 bg-green-600 hover:bg-black transition text-white rounded-full text-lg font-semibold shadow-lg"
                onClick={handleClick}
            >
                Wesprzyj nas
            </button>
        </div>
    );
};

export default SupportBanner;