import type { TableRow } from "./useTableData";

interface TabButtonProps {
  tab: "A" | "B";
  isActive: boolean;
  onClick: (tab: "A" | "B") => void;
}

interface TableHeaderProps {
  headers: string[];
}

interface TableCellProps {
  value: string;
  index: number;
  row: TableRow;
}

interface TableRowProps {
  row: TableRow;
  index: number;
}

interface TableBodyProps {
  rows: TableRow[];
}

export type {
  TabButtonProps,
  TableHeaderProps,
  TableCellProps,
  TableRowProps,
  TableBodyProps,
};
