import { User, MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
    return (
        <div className="max-w-5xl mx-auto px-6 animate-fadeIn delay-500">
            <h2 className="text-2xl font-semibold mb-4">Kontakt dla zainteresowanych</h2>
            <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                    <User className="w-5 h-5" /> Michał Pondel – Koordynator drużyn dziecięcych
                </li>
                <li className="flex items-center gap-2">
                    <Phone className="w-5 h-5" /> +48 784 909 948
                </li>
                <li className="flex items-center gap-2">
                    <Mail className="w-5 h-5" /> ks.widawa.wroclaw@gmail.com
                </li>
                <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> Boisko KS Widawa, ul. Kominiarska 26, Wrocław
                </li>
            </ul>
        </div>
    );
}
