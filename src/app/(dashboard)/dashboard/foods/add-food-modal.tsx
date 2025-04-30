"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import InputText from "@/components/ui/inputText";
import UploadFile from "@/components/upload";
import { GetCategory } from "@/lib/actions/category-action";
import { AddFood } from "@/lib/actions/food-action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const foodFormFields = [
  { id: 1, label: "عنوان", name: "title", type: "text" },
  { id: 2, label: "قیمت", name: "price", type: "number" },
  { id: 4, label: "امتیاز", name: "rating", type: "number" },
];

const AddFoodModal = () => {
  const [select, setSelect] = useState("");
  const [tag, setTag] = useState(["پیاز"]);

  const [food, setFood] = useState({
    title: "",
    price: "",
    image: "",
    rating: "",
    ingredients: "",
  });
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await GetCategory(),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data) => {
      return await AddFood(
        food.title,
        food.price,
        select,
        tag,
        food.image,
        food.rating
      );
    },
    onSuccess: () => {
      setFood({
        title: "",
        price: "",
        image: "",
        rating: "",
        ingredients: "",
      });
      setTag(["پیاز"]);
      queryClient.invalidateQueries({ queryKey: ["foods"] });
      setOpen(false);
    },
  });

  return (
    <FormModal
      title="افزودن غذا"
      label="افزودن غذای جدید"
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
            <TagsInput value={tag} onChange={setTag} />
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
          {isPending ? "در حال افزودن..." : "افزودن غذا"}
        </Button>
      </form>
    </FormModal>
  );
};

export default AddFoodModal;
