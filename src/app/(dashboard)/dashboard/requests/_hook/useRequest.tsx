"use client";

import {
  GetReservePaginate,
  RemoveReserver,
  getReserveRequests,
} from "@/lib/actions/reserver-action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function useRemoveRequest(userId: string) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false)

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      return await RemoveReserver(userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reserves"] });
      setOpen(!open)
    },
  });
  return { mutateAsync, isPending, open, setOpen };
}

export function useGetRequest(page:string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reserves",page],
    queryFn: async () => await GetReservePaginate(page),
  });

  return { data, isLoading, isError };
}
