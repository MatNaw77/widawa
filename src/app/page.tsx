// Home.tsx
import { Footer } from "@/Components/Footer/Footer";
import { Navbar } from "@/Components/Navbar/Navbar";
import { MainBanner } from "@/Components/Mainbanner/MainBanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <div className="flex-1">
        <MainBanner />
      </div>
      <Footer />
    </div>
  );
}
