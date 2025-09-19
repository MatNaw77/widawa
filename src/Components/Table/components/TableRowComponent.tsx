import { TableRowProps } from "../types";
import { TableCell } from "./TableCell";

export function TableRowComponent({ row, index }: TableRowProps) {
  const getRowClassName = () => {
    if (row.isTomtex) return "bg-red-100";
    return index % 2 === 0 ? "bg-white" : "bg-gray-50";
  };

  return (
    <tr className={getRowClassName()}>
      {row.values.map((value, idx) => (
        <TableCell key={idx} value={value} index={idx} row={row} />
      ))}
    </tr>
  );
}
