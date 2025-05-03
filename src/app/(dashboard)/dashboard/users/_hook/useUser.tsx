"use client";

import {
  AddUser,
  EditUser,
  GetAllUsers,
  GetUserPaginate,
  RemoveUser,
} from "@/lib/actions/user-action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { EditUserModalProps } from "../_types/user.types";

export function useRemoveUser(userId: string) {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      return await RemoveUser(userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foods"] });
    },
  });
  return { mutateAsync, isPending };
}

export function useAddUser() {
  const [select, setSelect] = useState<"USER" | "ADMIN">("USER");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data) => {
      return await AddUser(
        user.name,
        user.email,
        user.password,
        user.image,
        select
      );
    },
    onSuccess: () => {
      setUser({
        name: "",
        email: "",
        password: "",
        image: "",
      });
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setOpen(false);
    },
  });

  return {
    open,
    setOpen,
    mutateAsync,
    isPending,
    select,
    setSelect,
    user,
    setUser,
  };
}

export function useEditUser({
  email,
  image,
  name,
  password,
  role,
}: EditUserModalProps) {
  const [select, setSelect] = useState<"USER" | "ADMIN">(role);

  const [user, setUser] = useState({
    name: name,
    email: email,
    password: password,
    image: image,
  });
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data) => {
      return await EditUser(
        user.name,
        user.email,
        user.password,
        user.image,
        select
      );
    },
    onSuccess: () => {
      setUser({
        name: "",
        email: "",
        password: "",
        image: "",
      });
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setOpen(false);
    },
  });
  return {
    open,
    setOpen,
    mutateAsync,
    isPending,
    select,
    setSelect,
    user,
    setUser,
  };
}

export function useGetUser(page:string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users",page],
    queryFn: async () => await GetUserPaginate(page),
  });

  return { data, isLoading, isError };
}
