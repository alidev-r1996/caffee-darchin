import { FC, PropsWithChildren } from "react";

export const TableUi: FC<PropsWithChildren> = ({ children }) => {
  return <table className="table-auto">{children}</table>;
};

export const TableHeader: FC<PropsWithChildren> = ({ children }) => {
  return <thead>{children}</thead>;
};

export const TableBody: FC<PropsWithChildren> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow: FC<PropsWithChildren> = ({ children }) => {
  return <tr className="border-dashed border-b-2">{children}</tr>;
};

export const TableColumn: FC<PropsWithChildren> = ({ children }) => {
  return <td className="py-3 px-6">{children}</td>;
};

export const TableTitle: FC<PropsWithChildren> = ({ children }) => {
  return <th className="py-3 px-6">{children}</th>;
};


