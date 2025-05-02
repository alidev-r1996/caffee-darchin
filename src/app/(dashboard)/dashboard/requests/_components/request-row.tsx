import { TableUi } from "@/components/tableui";
import { ConvertToPersianDigit } from "@/helper/persianDigits";
import React from "react";
import RemoveRequestModal from "./remove-request-modal";
import { RequestRowProps } from "../_types/requests.types";

const RequestRow: React.FC<RequestRowProps> = ({ index, item }) => {
  return (
    <TableUi.Row key={index} className="text-sm">
      <TableUi.Col>{ConvertToPersianDigit(`${index + 1}`)}</TableUi.Col>
      <TableUi.Col className="sticky right-0 z-10 bg-background">
        {item.name}
      </TableUi.Col>
      <TableUi.Col>{ConvertToPersianDigit(item.phone)}</TableUi.Col>
      <TableUi.Col>
        {new Date(item.createdAt).toLocaleDateString("fa-IR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </TableUi.Col>
      <TableUi.Col>{ConvertToPersianDigit(item.quantity)}</TableUi.Col>
      <TableUi.Col>
        <p className="bg-teal-600 font-bold text-white rounded px-1 py-1">
          {item.date}
        </p>
      </TableUi.Col>
      <TableUi.Col>
        <p className="bg-teal-600 font-bold text-white rounded px-1 py-1">
          {item.time}
        </p>
      </TableUi.Col>
      <TableUi.Col>
        <div className="flex gap-2 justify-center items-center">
          <RemoveRequestModal userId={item.id} userName={item.title} />
        </div>
      </TableUi.Col>
    </TableUi.Row>
  );
};

export default RequestRow;
