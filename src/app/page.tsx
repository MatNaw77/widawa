// Home.tsx
import { Footer } from "@/Components/Footer/Footer";
import { Navbar } from "@/Components/Navbar/Navbar";
import { MainBanner } from "@/Components/Mainbanner/MainBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
    <main className="flex flex-col items-center">
      <MainBanner />

      {/* O nas */}
      <section className="max-w-6xl w-full px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-6">O nas</h2>
          <ul className="space-y-4 text-lg">
            <li>⚽ 2 drużyny seniorskie</li>
            <li>👦 25 dzieci w sekcji</li>
            <li>💯 100% zaangażowania społecznego</li>
            <li>🤝 Działamy jako stowarzyszenie, bez etatów, z pasji</li>
          </ul>
        </div>
        <Image
          src="/widawa_dorosli.jpg" // podmień na swoje zdjęcie
          alt="Piłkarz w akcji"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
      </section>

      {/* Sekcja dziecięca */}
      <section className="bg-gray-50 w-full px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/3_dzieci.png" // podmień na swoje zdjęcie
          alt="Dzieci grające w piłkę"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Sekcja dziecięca – tu zaczyna się przyszłość
          </h2>
          <ul className="space-y-4 text-lg">
            <li>✔️ Działamy z własnych środków</li>
            <li>✔️ Każda złotówka trafia do dzieci</li>
            <li>✔️ Tworzymy przestrzeń wychowawczą i sportową</li>
            <li>✔️ Promujemy aktywność, fair play i zdrowy styl życia</li>
          </ul>
          <button className="mt-6 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Zapisz dziecko do sekcji
          </button>
        </div>
      </section>

      {/* Wesprzyj nas */}
      <section className="max-w-6xl w-full px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Wesprzyj lokalny sport – razem możemy więcej
        </h2>
        <ul className="space-y-3 text-lg mb-8">
          <li>✔️ Działamy z własnych środków</li>
          <li>✔️ Zostań sponsorem i wesprzyj dziecięcą sekcję</li>
        </ul>
        <button className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold">
          Wesprzyj nas
        </button>
      </section>
    </main>
      <Footer />
    </div>
  );
}
