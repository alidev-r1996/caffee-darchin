"use client";

import { AddCategory, EditCategory, GetCategory } from "@/lib/actions/category-action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RemoveCategory } from "@/lib/actions/category-action";
import { useEditCategoryProps } from "../_types/category.type";

export function useAddCategory() {
  const [category, setCategory] = useState({
    title: "",
    englishTitle: "",
    image: "",
  });
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data) => {
      return await AddCategory(
        category.title,
        category.englishTitle,
        category.image
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
    },
  });

  return {mutateAsync, isPending, open, setOpen, category, setCategory}
}


export  function useEditCategory({title, englishTitle, image, id}:useEditCategoryProps){
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

  return {open, setOpen, mutateAsync, isPending, category, setCategory}
}


export function useRemoveCategory(categoryId: string){
    const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      return await RemoveCategory(categoryId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  return {mutateAsync, isPending}

}

export function useGetCategory(){
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await GetCategory(),
  });

  return { data, isLoading, isError }
}
