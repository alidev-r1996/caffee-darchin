import { cn } from "@/lib/utils/utils";
import { FC } from "react";

type TableProps = {
  children: React.ReactNode;
  className?: string;
};

// First, declare all the subcomponents
export const TableHeader: FC<TableProps> = ({ children, className }) => {
  return <thead className={className}>{children}</thead>;
};

export const TableBody: FC<TableProps> = ({ children, className }) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableRow: FC<TableProps> = ({ children, className }) => {
  return (
    <tr
      className={cn(
        "border-slate-200 dark:border-slate-600 border-b",
        className
      )}
    >
      {children}
    </tr>
  );
};

export const TableColumn: FC<TableProps> = ({ children, className }) => {
  return (
    <td
      className={cn(
        "py-1 px-6 first:max-w-max text-center whitespace-nowrap mx-auto",
        className
      )}
    >
      {children}
    </td>
  );
};

export const TableTitle: FC<TableProps> = ({ children, className }) => {
  return (
    <th
      className={cn(
        "py-1 px-6 first:px-2 first:py-3 text-center whitespace-nowrap mx-auto dark:bg-slate-800 bg-slate-100 text-blue-500",
        className
      )}
    >
      {children}
    </th>
  );
};

// Now define the type that includes all static properties
type TableType = FC<TableProps> & {
  Header: typeof TableHeader;
  Body: typeof TableBody;
  Row: typeof TableRow;
  Col: typeof TableColumn;
  Title: typeof TableTitle;
};

// Define the component
const Table: TableType = ({ children, className }) => {
  return (
    <table className={cn("w-full overflow-x-auto text-sm md:text-base", className)}>
      {children}
    </table>
  );
};

// Assign static subcomponents
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Col = TableColumn;
Table.Title = TableTitle;

// Export
export const TableUi = Table;
