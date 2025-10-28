"use client";

import { TableUi } from "@/components/tableui";
import CategoryRow from "./category-row";
import Loading from "@/components/loading";
import { categoryItems } from "@/constants/constant";
import { useGetCategory } from "../_hook/useCategory";
import Paginate from "@/components/ui/paginate";
import { memo } from "react";


const CategoryTable = ({page}: {page:string}) => {
  const { data, isLoading, isError } = useGetCategory(page);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (isError) return <div>Error</div>;
  if (!data || data?.category.length == 0) return <div>هیچ داده ای وجود ندارد</div>;

  return (
    <div className="w-full overflow-hidden mt-5">
      <div className="w-full overflow-x-auto">
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
          {data.category.map((item: any, index: number) => {
            return <CategoryRow key={index} index={index} item={item} page={page}/>;
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

export default memo(CategoryTable);
