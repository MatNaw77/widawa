// useTableData.ts
import { useEffect, useState } from "react";

export interface TableRow {
    position: string;
    team: string;
    matches: string;
    points: string;
    wins: string;
    draws: string;
    losses: string;
    goals: string;
    isTomtex: boolean;
    values: string[];
    logoUrl: string; // nowe pole dla herbu
}

const teamNames = [
    "Vamos Wrocław",
    "Wratislavia II Wrocław",
    "MKS Sołtysowice (Wrocław)",
    "Ślęza II Wrocław",
    "Grom Ligota Piękna",
    "Tomtex Widawa II Wrocław",
    "Sparta II Wrocław",
    "Silesia Szymanów",
    "Błyskawica Szewce",
    "Mundurowi Wrocław",
    "Płomień Wisznia Mała",
    "Karłowice Wrocław",
    "Unia Wrocław",
    "Augustyn Wrocław",
    "KP Kąty Wrocławskie",
    "Parasol Wrocław",
    "Zorza Wilkszyn",
    "Odra Lubiąż",
    "Zorza Pęgów",
    "Porcelana Ciechów",
    "Sokół Smolec",
    "Polonia Wrocław",
    "Polonia II Środa Śląska",
    "Błyskawica Lenartowice",
    "Zieloni Rakoszyce",
    "Tomtex Widawa Wrocław",
    "Maślice Wrocław",
    "Mechanik Brzezina",
    "Sparta Miłcz",
    "LZS Osiek",
];

// Funkcja tworząca mapę drużyn → logo
function createLogoMap() {
    const logoMap: Record<string, string> = {};

    const normalizeName = (name: string) => {
        const map: Record<string, string> = {
            ą: "a",
            ć: "c",
            ę: "e",
            ł: "l",
            ń: "n",
            ó: "o",
            ś: "s",
            ż: "z",
            ź: "z",
        };

        return name
            .toLowerCase()
            .replace(/[ąćęłńóśżź]/g, (match) => map[match])
            .replace(/ /g, "_")
            .replace(/[()]/g, "");
    };
    teamNames.forEach((team) => {
        const safeName = normalizeName(team);
        logoMap[team] = `/herby/${safeName}.jpg`;
    });

    return logoMap;
}

const logoMap = createLogoMap();

export function useTableData() {
    const [tables, setTables] = useState<{ A: TableRow[]; B: TableRow[] }>({
        A: [],
        B: [],
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetch("/api/getTableData");
                const data = await res.json();

                const formatRows = (rows: TableRow[]): TableRow[] =>
                    rows.map((row: TableRow) => {
                        const isTomtex =
                            row.team.toLowerCase() === "tomtex widawa ii wrocław" ||
                            row.team.toLowerCase() === "tomtex widawa wrocław";
                        const values = [
                            row.position,
                            row.team,
                            row.matches,
                            row.points,
                            row.wins,
                            row.draws,
                            row.losses,
                            row.goals,
                        ];

                        const logoUrl = logoMap[row.team] || "/logos/default.png";

                        return { ...row, isTomtex, values, logoUrl };
                    });

                setTables({
                    A: formatRows(data.A),
                    B: formatRows(data.B),
                });
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    return { tables, loading };
}
