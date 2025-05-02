"use client";

import { TableUi } from "@/components/tableui";
import Loading from "@/components/loading";
import RequestRow from "./request-row";
import { requestItems } from "@/constants/constant";
import { useGetRequest } from "../_hook/useRequest";

const RequestTable = () => {
  const { data, isError, isLoading } = useGetRequest();

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (isError) return <div>Error</div>;
  if (!data || data?.length == 0) return <div>هیچ داده ای وجود ندارد</div>;

  return (
    <div className="w-full overflow-x-auto mt-5">
      <TableUi>
        <TableUi.Header>
          <TableUi.Row>
            {requestItems.map((item) => (
              <TableUi.Title
                className={`${item.title === "نام" && "sticky right-0 z-10"}`}
                key={item.id}
              >
                {item.title}
              </TableUi.Title>
            ))}
          </TableUi.Row>
        </TableUi.Header>
        <TableUi.Body>
          {data.map((item: any, index: number) => {
            return <RequestRow key={index} index={index} item={item} />;
          })}
        </TableUi.Body>
      </TableUi>
    </div>
  );
};

export default RequestTable;
