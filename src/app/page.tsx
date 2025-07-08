import { Footer } from "@/Components/Footer/Footer";
import { Navbar } from "@/Components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex-grow p-8 pb-20 sm:p-20 flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Strona główna</h1>
      </main>
      <Footer />
    </div>
  );
}