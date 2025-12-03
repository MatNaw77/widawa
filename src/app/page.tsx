import { MainBanner } from "@/Components/MainPage/Mainbanner/MainBanner";
import { Children } from "@/Components/MainPage/Children/Children";
import { About } from "@/Components/MainPage/About/About";
import { SupportBanner } from "@/Components/MainPage/SupportBanner/SupportBanner";
import { PartnersBanner } from "@/Components/MainPage/Sponsors/Sponsors";

export default function Home() {
    return (
        <>
            <MainBanner />
            <About />
            <Children />
            <SupportBanner />
            <PartnersBanner />
        </>
    );
}
