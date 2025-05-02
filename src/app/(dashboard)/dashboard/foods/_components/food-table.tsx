"use client";

import { TableUi } from "@/components/tableui";
import FoodRow from "./food-row";
import Loading from "@/components/loading";
import { FoodItems } from "@/constants/constant";
import { useGetFood } from "../_hook/useFood";

const FoodTable = () => {
  const {data,isError,isLoading} = useGetFood();

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
          {data.map((item: any, index: number) => {
            return <FoodRow key={index} index={index} item={item} />;
          })}
        </TableUi.Body>
      </TableUi>
    </div>
  );
};

export default FoodTable;
