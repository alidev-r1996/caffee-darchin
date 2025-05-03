"use client";

import {
  GetReservePaginate,
  RemoveReserver,
  getReserveRequests,
} from "@/lib/actions/reserver-action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useRemoveRequest(userId: string) {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      return await RemoveReserver(userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reserves"] });
    },
  });
  return { mutateAsync, isPending };
}

export function useGetRequest(page:string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reserves",page],
    queryFn: async () => await GetReservePaginate(page),
  });

  return { data, isLoading, isError };
}
