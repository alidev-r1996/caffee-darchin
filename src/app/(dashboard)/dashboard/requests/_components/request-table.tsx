"use client";

import { TableUi } from "@/components/tableui";
import Loading from "@/components/loading";
import RequestRow from "./request-row";
import { requestItems } from "@/constants/constant";
import { useGetRequest } from "../_hook/useRequest";
import Paginate from "@/components/ui/paginate";

const RequestTable = ({page}:{page:string}) => {
  const { data, isError, isLoading } = useGetRequest(page);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (isError) return <div>Error</div>;
  if (!data || data?.request.length == 0) return <div>هیچ داده ای وجود ندارد</div>;

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
          {data.request.map((item: any, index: number) => {
            return <RequestRow key={index} index={index} item={item} />;
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

export default RequestTable;
