import { FC } from "react";
import Image from "next/image";
import SignChild from "@/Components/SignChild/SignChild";

export const Children: FC = () => (
  <section className="w-full bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-30 items-center">
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
        <div className="mt-6">
          <SignChild extended />
        </div>
      </div>
    </div>
  </section>
);