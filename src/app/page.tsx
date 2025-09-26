import { MainBanner } from "@/Components/MainPage/Mainbanner/MainBanner";
import { Children } from "@/Components/MainPage/Children/Children";
import { About } from "@/Components/MainPage/About/About";
import { SupportBanner } from "@/Components/MainPage/SupportBanner/SupportBanner";

export default function Home() {
    return (
        <>
            <MainBanner />
            <About />
            <Children />
            <SupportBanner />
        </>
    );
}
