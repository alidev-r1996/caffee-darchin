import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EditProfile } from "@/lib/actions/profile-action";
import { getUserInfo } from "@/lib/actions/user-action";

export function useGetUserInfo() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => await getUserInfo(),
  });

  return { data, isLoading, isError };
}

export function useEditProfile() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () =>
      await EditProfile(form.name, form.email, form.password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      router.refresh();
    },
  });

  return { mutateAsync, isPending, form, setForm };
}
