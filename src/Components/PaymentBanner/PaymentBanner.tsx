"use client";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const PaymentBanner: FC = () => {
  const [accepted, setAccepted] = useState(false);
  const [customAmount, setCustomAmount] = useState<number | null>(null);

  const amounts = [30, 50, 100, "inna"];

  const handlePayment = async (amount: number) => {
    const res = await fetch("/api/p24/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        email: "test@test.pl", // możesz dynamicznie podawać e-mail
      }),
    });

    const result = await res.json();

    if (result.token) {
      window.location.href = `https://secure.przelewy24.pl/trnRequest/${result.token}`;
    } else {
      alert("Błąd podczas inicjalizacji płatności.");
    }
  };

  return (
    <section className="w-full bg-red-800 text-white mt-20 min-h-[69vh] flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        <div className="flex-1 p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-4">❤️ WPŁATA ONLINE</h2>
          <h1 className="mb-6 ml-4">Wesprzyj nas swoją darowizną</h1>

          <label className="flex items-center gap-2 mb-8 cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="w-5 h-5"
            />
            <span>
              Zapoznałem(am) się z{" "}
              <Link
                href="/polityka-platnosci"
                className="text-blue-300 underline hover:text-blue-100"
              >
                regulaminem wpłat
              </Link>{" "}
              i akceptuję jego warunki
            </span>
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {amounts.map((a, i) => (
              <button
                key={i}
                disabled={!accepted}
                onClick={() =>
                  typeof a === "number"
                    ? handlePayment(a)
                    : handlePayment(customAmount ?? 0)
                }
                className={`rounded-lg py-6 text-center font-semibold transition
                ${
                  accepted
                    ? "bg-red-600 cursor-pointer"
                    : "bg-red-400 cursor-not-allowed"
                }`}
              >
                {a === "inna" ? (
                  <>
                    Wpłacam <br />
                    <span className="text-lg">inną kwotę</span>
                    <p className="text-xs mt-1">(kwota do wpisania poniżej)</p>
                    <input
                      type="text"
                      min={1}
                      placeholder="PLN"
                      className="w-full text-center text-white rounded-md px-4 py-2 mt-2 text-sm bg-red-700 border border-red-500 focus:outline-none"
                      onClick={(e) => e.stopPropagation()} // 🚫 blokada propagacji kliknięcia
                      value={customAmount ?? ""}
                      onChange={(e) => setCustomAmount(Number(e.target.value))}
                    />
                  </>
                ) : (
                  <>
                    Wpłacam <br />
                    <span className="text-lg">{a} zł</span>
                  </>
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 text-sm">
            <p className="mb-2">Bezpieczeństwo płatności zapewnia</p>
            <Image
              src="/przelewy24_logo.png"
              alt="Przelewy24"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-xs text-gray-200">
              Przekazane darowizny na konto Stowarzyszenia Futbolu Widawa
              Wrocław wykorzystywane są na działalność statutową.
            </p>
            <p className="mt-2 font-semibold">Dziękujemy za wsparcie! 💚</p>
          </div>
        </div>

        <div className="w-full lg:w-1/3 grid grid-cols-2 grid-rows-3 gap-1 min-h-[400px]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative w-full aspect-square">
              <Image
                src={`/gallery/${i + 1}.jpg`}
                alt={`Zdjęcie ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
