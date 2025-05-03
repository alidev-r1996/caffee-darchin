"use client";

import { TableUi } from "@/components/tableui";
import Loading from "@/components/loading";
import UserRow from "./user-row";
import { userItems } from "@/constants/constant";
import { useGetUser } from "../_hook/useUser";
import Paginate from "@/components/ui/paginate";

const UserTable = ({page}:{page:string}) => {
  const { data, isLoading, isError } = useGetUser(page);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (isError) return <div>Error</div>;
  if (!data || data?.users.length == 0) return <div>هیچ داده ای وجود ندارد</div>;

  return (
    <div className="w-full overflow-x-auto mt-5">
      <TableUi>
        <TableUi.Header>
          <TableUi.Row>
            {userItems.map((item) => (
              <TableUi.Title
                className={`${item.title == "نام" && "sticky right-0 z-10"}`}
                key={item.id}
              >
                {item.title}
              </TableUi.Title>
            ))}
          </TableUi.Row>
        </TableUi.Header>
        <TableUi.Body>
          {data.users.map((item: any, index: number) => {
            return <UserRow key={index} index={index} item={item} />;
          })}
        </TableUi.Body>
      </TableUi>
      {data.meta.totalPage > 1 && (
        <div className="flex items-center justify-center mt-8">
          <Paginate
            shape="square"
            theme="blue"
            currentPage={page}
            totalPage={data.meta.totalPage}
          />
        </div>
      )}
    </div>
  );
};

export default UserTable;
