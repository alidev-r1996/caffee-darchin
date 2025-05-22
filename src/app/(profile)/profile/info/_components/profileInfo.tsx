"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import InputText from "@/components/ui/inputText";
import { profileFormFields } from "@/constants/constant";
import { useEditProfile, useGetUserInfo } from "../_hook/useProfile";
import Loading from "@/components/loading";

const ProfileInfo = () => {
  const { data, isLoading, isError } = useGetUserInfo();
  const { form, setForm, isPending, mutateAsync } = useEditProfile();

  useEffect(() => {
    if (data) {
      setForm({
        name: data.name || "",
        email: data.email || "",
        password: data.password || "",
      });
    }
  }, [isLoading]);

  if (isLoading) return <Loading />;
  if (isError) return <div>Error</div>;

  return (
    <form className="flex flex-col gap-1 ">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-1">
        {profileFormFields.map((item) => (
          <InputText
            key={item.id}
            label={item.label}
            value={form[item.name as keyof typeof form]}
            onChange={(e) =>
              setForm({ ...form, [item.name]: e.target.value })
            }
            name={item.name}
            placeholder={item.placeholder}
          />
        ))}
        <Button
          onClick={(e) => {
            e.preventDefault();
            mutateAsync();
          }}
          type="submit"
          variant="primary"
          className="mt-7"
        >
          {isPending ? "در حال ویرایش..." : "ویرایش حساب کاربری"}
        </Button>
      </div>
    </form>
  );
};

export default ProfileInfo;
