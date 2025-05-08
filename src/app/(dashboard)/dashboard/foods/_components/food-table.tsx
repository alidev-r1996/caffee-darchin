"use client";

import { TableUi } from "@/components/tableui";
import FoodRow from "./food-row";
import Loading from "@/components/loading";
import { FoodItems } from "@/constants/constant";
import { useGetFood } from "../_hook/useFood";
import Paginate from "@/components/ui/paginate";
import { memo } from "react";

const FoodTable = ({ page }: { page: string }) => {
  const { data, isError, isLoading } = useGetFood(page);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (isError) return <div>Error</div>;
  if (!data || data.food?.length == 0) return <div>هیچ داده ای وجود ندارد</div>;

  return (
    <div className="w-full overflow-hidden mt-5">
      <div className="w-full overflow-x-auto">
      <TableUi>
        <TableUi.Header>
          <TableUi.Row>
            {FoodItems.map((item) => (
              <TableUi.Title
                className={`${item.title === "عنوان" && "sticky right-0 z-10"}`}
                key={item.id}
              >
                {item.title}
              </TableUi.Title>
            ))}
          </TableUi.Row>
        </TableUi.Header>
        <TableUi.Body>
          {data.food.map((item: any, index: number) => {
            return <FoodRow key={index} index={index} item={item} />;
          })}
        </TableUi.Body>
      </TableUi>
      </div>
      {data.meta.totalPage > 1 && (
        <div className="flex items-center justify-center my-8">
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

export default memo(FoodTable);
