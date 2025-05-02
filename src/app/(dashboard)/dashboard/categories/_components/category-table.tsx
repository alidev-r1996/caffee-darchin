"use client";

import { TableUi } from "@/components/tableui";

import CategoryRow from "./category-row";
import Loading from "@/components/loading";
import { categoryItems } from "@/constants/constant";
import { useGetCategory } from "../_hook/useCategory";


const CategoryTable = () => {
  const { data, isLoading, isError } = useGetCategory();

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
            {categoryItems.map((item) => (
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
            return <CategoryRow key={index} index={index} item={item} />;
          })}
        </TableUi.Body>
      </TableUi>
    </div>
  );
};

export default CategoryTable;
