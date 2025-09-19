import { TableCellProps } from "../types";

export function TableCell({ value, index, row }: TableCellProps) {
  if (index === 1) {
    return (
      <td
        className={`p-2 md:p-3 whitespace-nowrap text-sm md:text-base flex items-center gap-2 ${
          row.isTomtex ? "text-red-800 font-medium" : ""
        }`}
      >
        <img
          src={row.logoUrl}
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
