"use client";

import AddUserModal from "./_components/add-user-modal";
import UserTable from "./_components/user-table";

const Users = () => {
  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden p-4 md:pt-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">کاربران </h1>
        <AddUserModal />
      </div>
      <UserTable />
    </div>
  );
};

export default Users;
