import { Footer } from "@/Components/Footer/Footer";
import { Navbar } from "@/Components/Navbar/Navbar";
import { MainBanner } from "@/Components/Mainbanner/MainBanner";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Navbar />
      <MainBanner />
    </div>
  );
}