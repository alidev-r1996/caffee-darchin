import { TableUi } from "@/components/tableui";
import { ConvertToPersianDigit } from "@/helper/persianDigits";
import React from "react";
import RemoveRequestModal from "./remove-request-modal";
import { RequestRowProps } from "../_types/requests.types";
import TruncateText from "@/components/dashboard/truncate";

const RequestRow: React.FC<RequestRowProps> = ({ index, item, page }) => {
  return (
    <TableUi.Row key={index} className="text-sm">
      <TableUi.Col>{ConvertToPersianDigit(`${((page as number) - 1) * 8 + (index + 1)}`)}</TableUi.Col>
      <TableUi.Col className="sticky right-0 z-10 ">
        <TruncateText text={item.name} />
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
          <RemoveRequestModal key={item.id} userId={item.id} userName={item.name} />
        </div>
      </TableUi.Col>
    </TableUi.Row>
  );
};

export default RequestRow;
