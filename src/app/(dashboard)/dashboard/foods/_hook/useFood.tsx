"use client";

import { GetCategory } from "@/lib/actions/category-action";
import { AddFood, EditFood, GetFood } from "@/lib/actions/food-action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UseEditFoodProps } from "../_types/food.types";

export function useAddFood() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  const [tag, setTag] = useState(["پیاز"]);
  const [food, setFood] = useState({
    title: "",
    price: "",
    image: "",
    rating: "",
    ingredients: "",
  });

  const { data } = useQuery({
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

  return {
    mutateAsync,
    isPending,
    data,
    open,
    setOpen,
    tag,
    setTag,
    food,
    setFood,
    select,
    setSelect,
  };
}

export function useEditFood({
  title,
  price,
  image,
  rating,
  ingredients,
  id,
}: UseEditFoodProps) {
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

  const { data } = useQuery({
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

  return {
    open,
    setOpen,
    mutateAsync,
    isPending,
    select,
    setSelect,
    tag,
    setTag,
    food,
    setFood,
    data,
  };
}

export function useGetFood() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => await GetFood(),
  });
  return { data, isLoading, isError };
}
