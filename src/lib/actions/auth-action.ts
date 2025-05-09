"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "../../auth";
import { redirect } from "next/navigation";

export async function LoginCredentials(formData: FormData) {
  const { name, email, password } = Object.fromEntries(formData.entries());

  if (!email || !password) {
    alert("ایمیل و رمز عبور الزامی است!");
    return;
  }

  const res = await signIn("credentials", {
    redirect: false,
    email: email as string,
    password: password as string,
    name: name as string,
  });

  if (res?.ok) {
    window.location.href = "/";
  } else {
    alert("نام کاربری یا رمز عبور اشتباه است!");
  }
}

export async function LoginGoogle() {
  const user = await signIn("google", { callbackUrl: "/" });
  console.log(user, "google signin action");
}

export async function LoginGithub() {
  await signIn("github", { callbackUrl: "/" });
}

export async function LogoutUser(){
  await signOut();
  revalidatePath('/')
  redirect('/')
}

