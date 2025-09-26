import { PaymentBanner } from "@/Components/PaymentBanner/PaymentBanner";
import { Description } from "./components/Description";
import { Title } from "./components/Tittle";

export default function Stowarzyszenie() {
    return (
        <>
            <Title />
            <PaymentBanner />
            <Description />
        </>
    );
}
