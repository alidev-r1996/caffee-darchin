import { TableUi } from "@/components/tableui";
import Image from "next/image";
import React from "react";
import EditCategoryModal from "./edit-category-modal";
import RemoveCategoryModal from "./remove-category-modal";
import { AvatarDemo } from "@/components/AvatarUi";
import { ConvertToPersianDigit } from "@/helper/persianDigits";
import { CategoryRowProps } from "../_types/category.type";



const CategoryRow: React.FC<CategoryRowProps> = ({ index, item }) => {
  return (
    <TableUi.Row key={index} className="text-sm">
      <TableUi.Col>{ConvertToPersianDigit(`${index + 1}`)}</TableUi.Col>
      <TableUi.Col className="sticky right-0 z-10 bg-background">
        {item.title}
      </TableUi.Col>
      <TableUi.Col>{item.englishTitle}</TableUi.Col>
      <TableUi.Col>
        <AvatarDemo src={item.img} className="mx-auto size-12" />
      </TableUi.Col>
      <TableUi.Col>
        <div className="flex gap-2 justify-center items-center">
          <EditCategoryModal
            id={item.id}
            title={item.title}
            englishTitle={item.englishTitle}
            image={item.img}
          />
          <RemoveCategoryModal
            categoryId={item.id}
            categoryTitle={item.title}
          />
        </div>
      </TableUi.Col>
    </TableUi.Row>
  );
};

export default CategoryRow;
