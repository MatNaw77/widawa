import { MainBanner } from "@/Components/Mainbanner/MainBanner";
import { Children } from "@/Components/Children/Children";
import { About } from "@/Components/About/About";
import { SupportBanner } from "@/Components/SupportBanner/SupportBanner";

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
