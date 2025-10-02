import { TableCellProps } from "../types";
import Image from "next/image";

export function TableCell({ value, index, row }: TableCellProps) {
  if (index === 1) {
    return (
      <td
        className={`p-2 md:p-3 whitespace-nowrap text-sm md:text-base flex items-center gap-2 ${
          row.isTomtex ? "text-red-800 font-medium" : ""
        }`}
      >
        <Image
          src={row.logoUrl}
          width={32}
          height={32}
          alt={row.team}
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
        {value}
      </td>
    );
  }

  return (
    <td className="p-2 md:p-3 whitespace-nowrap text-sm md:text-base">
      {value}
    </td>
  );
}
