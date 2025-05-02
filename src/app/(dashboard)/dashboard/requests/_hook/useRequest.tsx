"use client";

import {
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

export function useGetRequest() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reserves"],
    queryFn: async () => await getReserveRequests(),
  });

  return { data, isLoading, isError };
}
