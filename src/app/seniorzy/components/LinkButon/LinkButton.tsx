import { FC } from "react";
import { ExternalLink } from "lucide-react";

export const FutbolowoButton: FC = () => {
    return (
        <div className="flex justify-center mt-40 mb-10">
            <a
                href="https://tomtex-widawawroclaw.futbolowo.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-red-700 hover:shadow-xl transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
                🏆 Zobacz więcej informacji
                <ExternalLink className="w-5 h-5" />
            </a>
        </div>
    );
};
