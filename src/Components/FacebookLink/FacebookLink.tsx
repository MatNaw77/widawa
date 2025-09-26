import { FaFacebook } from "react-icons/fa";

export function FacebookLink({ inline = false }: { inline?: boolean }) {
    return (
        <div className={`flex gap-4 mt-4 ${inline ? "justify-start" : "justify-center"}`}>
            <a
                href="https://www.facebook.com/TomtexWidawaWroclaw"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaFacebook size={20} />
            </a>
        </div>
    );
}
