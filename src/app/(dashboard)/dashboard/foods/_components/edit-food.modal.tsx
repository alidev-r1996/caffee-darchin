"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import InputText from "@/components/ui/inputText";
import UploadFile from "@/components/upload";
import { foodFormFields } from "@/constants/constant";
import { TagsInput } from "react-tag-input-component";
import { EditFoodModalProps } from "../_types/food.types";
import { useEditFood } from "../_hook/useFood";

const EditFoodModal = ({
  id,
  title,
  price,
  image,
  rating,
  ingredients,
}: EditFoodModalProps) => {
  const {
    open,
    setOpen,
    mutateAsync,
    isPending,
    setSelect,
    tag,
    setTag,
    food,
    setFood,
    data,
  } = useEditFood({ id, image, ingredients, price, rating, title });

  return (
    <FormModal
      buttonType="outline"
      title="ویرایش "
      label={`ویرایش غذای ${title}`}
      open={open}
      onClose={() => setOpen(!open)}
    >
      <form className="flex flex-col gap-1 ">
        {foodFormFields.map((field) => (
          <div key={field.id} className="flex flex-col gap-1">
            <InputText
              key={field.id}
              label={field.label}
              value={food[field.name as keyof typeof food]}
              onChange={(e) =>
                setFood({ ...food, [field.name]: e.target.value })
              }
              name={field.name}
              placeholder={field.label}
              type={field.type !== "number" ? "text" : "number"}
            />
          </div>
        ))}

        <div className="flex flex-col gap-1">
          <label htmlFor="tag" className="w-full">
            <p className="p-1  capitalize text-sm text-zinc-600 dark:text-zinc-400">
              مواد تشکیل‌دهنده
            </p>
            <TagsInput value={tag} separators={["Enter", "Tab", ",", " "]} onChange={setTag} classNames={{input: "rounded placeholder:text-xs border", tag: "bg-slate-400"}} placeHolder="مواد تشکیل دهنده..."/>
          </label>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="w-full">
            <p className="p-1  capitalize text-sm text-zinc-600 dark:text-zinc-400">
              دسته‌بندی
            </p>
            <select
              id="select"
              onChange={(e) => setSelect(e.target.value)}
              className="w-full placeholder:text-xs p-2 text-sm border border-slate-200 dark:border-slate-600 rounded peer focus:outline-none focus:border-slate-400 dark:focus:border-slate-400"
            >
              {data &&
                data.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
            </select>
          </label>
        </div>

        <div className="flex flex-col gap-1">
          <UploadFile
            title="تصویر غذا را انتخاب کنید"
            onChange={(img) => setFood({ ...food, image: img })}
            img={food.image}
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
          {isPending ? "در حال ویرایش..." : "ویرایش غذا"}
        </Button>
      </form>
    </FormModal>
  );
};

export default EditFoodModal;
