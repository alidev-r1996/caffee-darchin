import { TableUi } from "@/components/tableui";
import { ConvertToPersianDigit } from "@/helper/persianDigits";
import React from "react";
import RemoveCommentModal from "./remove-comment-modal";
import ConfirmCommentModal from "./confirm-comment-modal";
import { CommentRowProps } from "../_types/comments.types";
import TruncateText from "@/components/dashboard/truncate";

const CommentRow: React.FC<CommentRowProps> = ({ index, item }) => {
  return (
    <TableUi.Row key={index} className="text-sm">
      <TableUi.Col>{ConvertToPersianDigit(`${index + 1}`)}</TableUi.Col>
      <TableUi.Col className="sticky right-0 z-10 bg-background">
        <TruncateText text={item.user.name} />
      </TableUi.Col>
      <TableUi.Col>{item.email}</TableUi.Col>
      <TableUi.Col>{item.food.title}</TableUi.Col>
      <TableUi.Col>
        {new Date(item.createdAt).toLocaleDateString("fa-IR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </TableUi.Col>
      <TableUi.Col>
        <p title={item.content} className="text-xs cursor-pointer">
          {item.content.slice(0, 15)}
          {item.content.length > 15 && "..."}
        </p>
      </TableUi.Col>
      <TableUi.Col>
        <p
          className={`${item.verified ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100" : "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-100"}   px-2 py-1 max-w-max rounded mx-auto`}
        >
          {item.verified ? "تایید شده" : "تایید نشده"}
        </p>
      </TableUi.Col>
      <TableUi.Col>
        <div className="flex gap-2 justify-center items-center">
          <ConfirmCommentModal
            key={item.user.id}
            foodId={item.foodId}
            userId={item.user.id}
            time={item.createdAt}
            userName={item.user.name}
            status={item.verified as boolean}
          />
          <RemoveCommentModal
            key={item.user.name}
            foodId={item.foodId}
            userId={item.user.id}
            time={item.createdAt}
            userName={item.user.name}
          />
        </div>
      </TableUi.Col>
    </TableUi.Row>
  );
};

export default CommentRow;
