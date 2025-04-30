"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import InputText from "@/components/ui/inputText";
import UploadFile from "@/components/upload";
import { GetCategory } from "@/lib/actions/category-action";
import { EditFood } from "@/lib/actions/food-action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  useRouter } from "next/navigation";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const foodFormFields = [
  { id: 1, label: "عنوان", name: "title", type: "text" },
  { id: 2, label: "قیمت", name: "price", type: "number" },
  { id: 4, label: "امتیاز", name: "rating", type: "number" },
];
type EditFoodModalProps = {
  id: string;
  title: string;
  price: string;
  image: string;
  rating: string;
  ingredients: string[];
};

const EditFoodModal = ({
  id,
  title,
  price,
  image,
  rating,
  ingredients,
}: EditFoodModalProps) => {

  const [select, setSelect] = useState("");
  const [tag, setTag] = useState(ingredients ?? ["پیاز"]);
  const router = useRouter();

  const [food, setFood] = useState({
    title: title,
    price: price,
    image: image,
    rating: rating ?? 5,
  });
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await GetCategory(),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data) => {
      return await EditFood(
        food.title,
        food.price,
        select,
        tag,
        food.image,
        food.rating,
        id
      );
    },
    onSuccess: () => {
      setFood({
        title: "",
        price: "",
        image: "",
        rating: "",
      });
      setTag(["پیاز"]);
      queryClient.invalidateQueries({ queryKey: ["foods"] });
      setOpen(false);
      router.refresh();
    },
  });

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

        <TagsInput value={tag} onChange={setTag} />

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
