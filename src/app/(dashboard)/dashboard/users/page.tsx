import { DashboardPagePropsType } from "../categories/_types/category.type";
import AddUserModal from "./_components/add-user-modal";
import UserTable from "./_components/user-table";

const Users = async ({searchParams}: DashboardPagePropsType) => {
  const page = (await searchParams)?.page ?? "1";


  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden p-4 md:pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-sm md:text-2xl font-bold">کاربران </h1>
        <AddUserModal />
      </div>
      <UserTable page={page}/>
    </div>
  );
};

export default Users;
