"use client";

import FormModal from "@/components/dashboard/modals/initial-modal";
import { Button } from "@/components/ui/button";
import InputText from "@/components/ui/inputText";
import UploadFile from "@/components/upload";
import { rolesOption, userFormFields } from "@/constants/constant";
import { useAddUser } from "../_hook/useUser";

const AddUserModal = () => {
  const {
    open,
    setOpen,
    mutateAsync,
    isPending,
    select,
    setSelect,
    user,
    setUser,
  } = useAddUser();

  return (
    <FormModal
      title="افزودن کاربر"
      label="افزودن کاربر جدید"
      open={open}
      onClose={() => setOpen(!open)}
    >
      <form className="flex flex-col gap-1 ">
        {userFormFields.map((field) => (
          <div key={field.id} className="flex flex-col gap-1">
            <InputText
              key={field.id}
              label={field.label}
              value={user[field.name as keyof typeof user]}
              onChange={(e) =>
                setUser({ ...user, [field.name]: e.target.value })
              }
              name={field.name}
              placeholder={field.label}
            />
          </div>
        ))}

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="w-full">
            <p className="p-1  capitalize text-sm text-zinc-600 dark:text-zinc-400">
              سمت کاربر
            </p>
            <select
              id="select"
              onChange={(e) => setSelect(e.target.value as typeof select)}
              className="w-full placeholder:text-xs p-2 text-sm border border-slate-200 dark:border-slate-600 rounded peer focus:outline-none focus:border-slate-400 dark:focus:border-slate-400"
            >
              {rolesOption.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex flex-col gap-1">
          <UploadFile
            title="تصویر کاربر را انتخاب کنید"
            onChange={(img) => setUser({ ...user, image: img })}
            img={user.image}
          />
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            mutateAsync();
          }}
          type="submit"
          variant={"primary"}
          className="mt-5"
        >
          {isPending ? "در حال افزودن..." : "افزودن کاربر"}
        </Button>
      </form>
    </FormModal>
  );
};

export default AddUserModal;
