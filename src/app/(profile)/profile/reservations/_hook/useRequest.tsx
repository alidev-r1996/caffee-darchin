"use client"

import { GetUserReservation } from "@/lib/actions/profile-action";
import { useQuery } from "@tanstack/react-query";

export function useGetReserve(page:string) {
    const { data, isLoading, isError } = useQuery({
      queryKey: ["reserves",page],
      queryFn: async () => await GetUserReservation(page),
    });
  
    return { data, isLoading, isError };
  }