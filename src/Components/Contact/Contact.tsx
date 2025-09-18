import React from 'react';

type ContactPerson = {
  name: string;
  role: string;
  phone: string;
};

type ContactSection = {
  title: string;
  people: ContactPerson[];
};

const email = 'ks.widawa.wroclaw@gmail.com';

const sections: ContactSection[] = [
  {
    title: 'Zarząd Stowarzyszenia',
    people: [
      { name: 'Tomasz Słowiński', role: 'Prezes', phone: '+48 607 099 057' },
      { name: 'Michał Pondel', role: 'Wiceprezes', phone: '+48 784 909 948' },
      { name: 'Paweł Szymoniak', role: 'Finanse', phone: '+48 791 250 904' },
    ],
  },
  {
    title: 'Trenerzy drużyn seniorskich',
    people: [
      { name: 'Michał Pondel', role: 'Trener pierwszej drużyny', phone: '+48 784 909 948' },
      { name: 'Kamil Moczydłowski', role: 'Trener drugiej drużyny', phone: '+48 577 276 336' },
    ],
  },
  {
    title: 'Sekcja dziecięca',
    people: [
      { name: 'Michał Pondel', role: 'Koordynator drużyn dziecięcych', phone: '+48 784 909 948' },
    ],
  },
  {
    title: 'Nabór do drużyn seniorskich',
    people: [
      { name: 'Grzegorz Biegacz', role: '', phone: '+48 501 281 533' },
    ],
  },
];

export function Contact() {
  return (
    <section className="bg-gray-100 min-h-[calc(100vh-218px)] w-full py-12 px-6 md:px-16" id="kontakt">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Kontakt</h2>

        <div className="mb-10 text-center">
          <p className="text-lg font-medium text-gray-700">📧 E-mail ogólny:</p>
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
            {email}
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, idx) => (
            <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500"
            >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span>📇</span> {section.title}
            </h3>
            <ul className="space-y-4 text-gray-700">
                {section.people.map((person, i) => (
                <li key={i}>
                    <p>
                    <span className="font-medium">{person.name}</span>
                    {person.role && ` – ${person.role}`}<br />
                    📞{' '}
                    <a
                        href={`tel:${person.phone.replace(/\s+/g, '')}`}
                        className="text-blue-600 hover:underline"
                    >
                        {person.phone}
                    </a>
                    </p>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>

      </div>
    </section>
  );
}
