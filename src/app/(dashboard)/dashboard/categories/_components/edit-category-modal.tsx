"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import InputText from "@/components/ui/inputText";
import UploadFile from "@/components/upload";
import { useEditCategory } from "../_hook/useCategory";
import { categoryFormFields } from "@/constants/constant";
import { EditCategoryModalProps } from "../_types/category.type";



const EditCategoryModal = ({
  id,
  title,
  englishTitle,
  image,
}: EditCategoryModalProps) => {
  const { category, isPending, mutateAsync, open, setCategory, setOpen } = useEditCategory({ title, englishTitle, image, id });

  return (
    <FormModal
      buttonType="outline"
      title="ویرایش "
      label={`ویرایش دسته‌بندی ${title}`}
      open={open}
      onClose={() => setOpen(!open)}
    >
      <form className="flex flex-col gap-1 ">
        <div className="flex flex-col gap-1">
          {categoryFormFields.map((item) => {
            return (
              <InputText
                key={item.id}
                label={item.label}
                value={category[item.name as keyof typeof category]}
                onChange={(e) =>
                  setCategory({ ...category, [item.name]: e.target.value })
                }
                name={item.name}
                placeholder={item.placeholder}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-1">
          <UploadFile
            title="تصویر دسته‌بندی را انتخاب کنید"
            onChange={(img) => setCategory({ ...category, image: img })}
            img={category.image}
          />
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            mutateAsync();
          }}
          type="submit"
          variant={"primary"}
          className="mt-5"
        >
          {isPending ? "در حال ویرایش..." : "ویرایش دسته‌بندی"}
        </Button>
      </form>
    </FormModal>
  );
};

export default EditCategoryModal;
{
}
