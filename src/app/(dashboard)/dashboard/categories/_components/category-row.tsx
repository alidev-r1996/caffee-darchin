import { TableUi } from "@/components/tableui";
import React from "react";
import EditCategoryModal from "./edit-category-modal";
import RemoveCategoryModal from "./remove-category-modal";
import { ConvertToPersianDigit } from "@/helper/persianDigits";
import { CategoryRowProps } from "../_types/category.type";
import CardAvatar from "@/components/cardAvatar";
import TruncateText from "@/components/dashboard/truncate";

const CategoryRow: React.FC<CategoryRowProps> = ({ index, item }) => {
  return (
    <TableUi.Row key={index} className="text-sm">
      <TableUi.Col>{ConvertToPersianDigit(`${index + 1}`)}</TableUi.Col>
      <TableUi.Col className="sticky right-0 z-10 bg-background">
        <TruncateText text={item.title} />
      </TableUi.Col>
      <TableUi.Col>
        <TruncateText text={item.englishTitle} />
      </TableUi.Col>
      <TableUi.Col>
        <CardAvatar className="mx-auto size-12" src={item.img} />
      </TableUi.Col>
      <TableUi.Col>
        <div className="flex gap-2 justify-center items-center">
          <EditCategoryModal
            key={item.englishTitle}
            id={item.id}
            title={item.title}
            englishTitle={item.englishTitle}
            image={item.img}
          />
          <RemoveCategoryModal
            key={item.id}
            categoryId={item.id}
            categoryTitle={item.title}
          />
        </div>
      </TableUi.Col>
    </TableUi.Row>
  );
};

export default CategoryRow;
