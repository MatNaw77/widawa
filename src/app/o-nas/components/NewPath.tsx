import React from "react";

export function NewPath() {
    return (
        <section className="mt-16 bg-red-100 px-6 py-12 rounded-2xl shadow-lg dark:text-black">
            <div className="max-w-5xl mx-auto space-y-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 dark:text-black">
                    🟢 Nowa droga – KS Tomtex Widawa Wrocław
                </h2>

                <p className="mb-4 text-black dark:text-black">
                    W 2011 roku powstał KS Tomtex Widawa Wrocław – klub, który przywrócił piłkę na
                    nasze osiedle i postawił na rozwój lokalnej społeczności.
                </p>

                <p className="mb-4 text-black dark:text-black">
                    Nie interesowały nas szybkie projekty ani sztuczne twory. Chcieliśmy stworzyć
                    coś trwałego – opartego na mieszkańcach, ich dzieciach i wspólnym działaniu.
                </p>

                <p className="mb-4 text-black dark:text-black">
                    Dziś kontynuujemy tradycję sięgającą 1948 roku, ale robimy to na nowych zasadach
                    – profesjonalnie, przejrzyście i z myślą o przyszłości.
                </p>

                <ul className="list-disc list-inside space-y-1 text-black dark:text-black">
                    <li>Boisko na Widawie znów tętni życiem</li>
                    <li>Kolejne pokolenia mają swoje miejsce do grania</li>
                    <li>Miejsce do nauki i budowania tożsamości lokalnej</li>
                </ul>
            </div>
        </section>
    );
}
