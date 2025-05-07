import { TableUi } from "@/components/tableui";
import { ConvertToPersianDigit } from "@/helper/persianDigits";
import React from "react";
import RemoveUserModal from "./remove-user-modal";
import EditUserModal from "./edit-user-modal";
import { UserRowProps } from "../_types/user.types";
import UserAvatar from "@/components/userAvatar";

const UserRow: React.FC<UserRowProps> = ({ index, item }) => {
  return (
    <TableUi.Row key={index} className="text-sm">
      <TableUi.Col>{ConvertToPersianDigit(`${index + 1}`)}</TableUi.Col>
      <TableUi.Col className="sticky right-0 z-10 bg-background">
        <p title={item.name} className="text-xs cursor-pointer">
          {item.name.slice(0, 20)}
          {item.name.length > 20 && "..."}
        </p>
      </TableUi.Col>
      <TableUi.Col>{item.email}</TableUi.Col>
      <TableUi.Col>{item.password}</TableUi.Col>
      <TableUi.Col>
        <UserAvatar src={item.img} className="mx-auto size-12" />
      </TableUi.Col>
      <TableUi.Col>
        <p className="px-4 mx-auto py-1 max-w-max rounded bg-slate-200 dark:bg-slate-700 shadow">
          {item.role == "USER" ? "کاربر" : "مدیر"}
        </p>
      </TableUi.Col>
      <TableUi.Col>
        <div className="flex gap-2 justify-center items-center">
          <EditUserModal
            key={item.id}
            name={item.name}
            email={item.email}
            password={item.password}
            image={item.img}
            role={item.role}
          />
          <RemoveUserModal
            key={item.id}
            userId={item.id}
            userName={item.title}
          />
        </div>
      </TableUi.Col>
    </TableUi.Row>
  );
};

export default UserRow;
