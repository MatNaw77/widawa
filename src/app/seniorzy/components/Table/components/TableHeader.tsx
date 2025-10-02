import { TableHeaderProps } from "../types";

export function TableHeader({ headers }: TableHeaderProps) {
  return (
    <thead>
      <tr className="bg-gray-800 text-white">
        {headers.map((header, i) => (
          <th
            key={i}
            className={`p-3 md:p-2 text-left text-sm md:text-base whitespace-nowrap ${
              i === 1 ? "w-1/3 md:w-[33%]" : "w-1/12 md:w-[8.5%]"
            }`}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
