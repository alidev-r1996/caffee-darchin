"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import InputText from "@/components/ui/inputText";
import UploadFile from "@/components/upload";
import { useAddCategory } from "../_hook/useCategory";
import { categoryFormFields } from "@/constants/constant";

const AddCategoryModal = () => {
  const { category, isPending, mutateAsync, open, setCategory, setOpen } = useAddCategory();

  return (
    <FormModal
      title="افزودن دسته‌بندی"
      label="افزودن دسته‌بندی جدید"
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
          {isPending ? "در حال افزودن..." : "افزودن دسته‌بندی"}
        </Button>
      </form>
    </FormModal>
  );
};

export default AddCategoryModal;
