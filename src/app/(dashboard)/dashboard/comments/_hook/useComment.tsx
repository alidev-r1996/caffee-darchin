"use client";

import {
  ConfirmComment,
  GetComments,
  RemoveComment,
} from "@/lib/actions/comment-action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  UseConfirmCommentType,
  UseRemoveCommentProps,
} from "../_types/comments.types";

export function useRemoveComment({
  userId,
  foodId,
  time,
}: UseRemoveCommentProps) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      return await RemoveComment(userId, foodId, time);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      setOpen(!open);
    },
  });

  return { open, setOpen, mutateAsync, isPending };
}

export function useConfirmComment({
  foodId,
  status,
  time,
  userId,
}: UseConfirmCommentType) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      return await ConfirmComment(userId, foodId, !status, time);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      setOpen(!open);
    },
  });

  return { open, setOpen, mutateAsync, isPending };
}

export function useGetComment() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => await GetComments(),
  });

  return { data, isLoading, isError };
}
