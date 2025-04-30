"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import InputText from "@/components/ui/inputText";
import UploadFile from "@/components/upload";
import { AddCategory, EditCategory } from "@/lib/actions/category-action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {useRouter } from "next/navigation";
import { FC, useState } from "react";

type EditCategoryModalProps = {
  id: string;
  title: string;
  englishTitle: string;
  image: string;
};

const EditCategoryModal: FC<EditCategoryModalProps> = ({
  id,
  title,
  englishTitle,
  image,
}) => {
    const router =useRouter();
  const [category, setCategory] = useState({
    title: title,
    englishTitle: englishTitle,
    image: image,
  });
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data) => {
      return await EditCategory(
        category.title,
        category.englishTitle,
        category.image,
        id
      );
    },
    onSuccess: () => {
      setCategory({
        title: "",
        englishTitle: "",
        image: "",
      });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      setOpen(false);
      router.refresh();
    },
  });

  return (
    <FormModal
      title="ویرایش "
      label={`ویرایش دسته‌بندی ${title}`}
      open={open}
      onClose={() => setOpen(!open)}
    >
      <form className="flex flex-col gap-1 ">
        <div className="flex flex-col gap-1">
          <InputText
            label="عنوان"
            value={category.title}
            onChange={(e) =>
              setCategory({ ...category, title: e.target.value })
            }
            name="title"
            placeholder="عنوان دسته‌بندی را وارد کنید"
          />
          <InputText
            label="عنوان به لاتین"
            value={category.englishTitle}
            onChange={(e) =>
              setCategory({ ...category, englishTitle: e.target.value })
            }
            name="englishTitle"
            placeholder="عنوان دسته‌بندی را به لاتین وارد کنید"
          />
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

export default EditCategoryModal;
{
}
