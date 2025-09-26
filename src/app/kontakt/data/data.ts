type ContactPerson = {
    name: string;
    role: string;
    phone: string;
};

type ContactSection = {
    title: string;
    people: ContactPerson[];
};

const email = "ks.widawa.wroclaw@gmail.com";

const sections: ContactSection[] = [
    {
        title: "Zarząd Stowarzyszenia",
        people: [
            { name: "Tomasz Słowiński", role: "Prezes", phone: "+48 607 099 057" },
            { name: "Michał Pondel", role: "Wiceprezes", phone: "+48 784 909 948" },
            { name: "Paweł Szymoniak", role: "Finanse", phone: "+48 791 250 904" },
        ],
    },
    {
        title: "Trenerzy drużyn seniorskich",
        people: [
            { name: "Michał Pondel", role: "Trener pierwszej drużyny", phone: "+48 784 909 948" },
            {
                name: "Kamil Moczydłowski",
                role: "Trener drugiej drużyny",
                phone: "+48 577 276 336",
            },
        ],
    },
    {
        title: "Sekcja dziecięca",
        people: [
            {
                name: "Michał Pondel",
                role: "Koordynator drużyn dziecięcych",
                phone: "+48 784 909 948",
            },
        ],
    },
    {
        title: "Nabór do drużyn seniorskich",
        people: [{ name: "Grzegorz Biegacz", role: "", phone: "+48 501 281 533" }],
    },
];

export { sections, email };
export type { ContactPerson, ContactSection };
