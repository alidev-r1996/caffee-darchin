"use client";

import { TableUi } from "@/components/tableui";
import { useQuery} from "@tanstack/react-query";
import { GetFood } from "@/lib/actions/food-action";
import FoodRow from "./food.row";

const categoryItems = [
  {id: 1,title: "ردیف",},{id: 2,title: "عنوان",},{id: 3,title: "قیمت",},{id: 4,title: "دسته‌بندی",},{id: 5,title: "تصویر ",},{id: 6,title: "مواد تشکیل‌دهنده",},{id: 7,title: "عملیات ",},
];

const FoodTable = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => await GetFood(),
  });

  if (isLoading) return <div>Loading...</div>;
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
            return <FoodRow key={index} index={index} item={item} />;
          })}
        </TableUi.Body>
      </TableUi>
    </div>
  );
};

export default FoodTable;
