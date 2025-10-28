"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "../../auth";
import { redirect } from "next/navigation";

export async function LoginCredentials(formData: FormData) {
  const { name, email, password } = Object.fromEntries(formData.entries());
  if (email && password) {
    await signIn("credentials", { name, email, password } , { redirect: "/" });
  } else {
    throw new Error("Invalid Email or Password!");
  }
}

export async function LoginGoogle() {
  await signIn("google", { redirectTo: "/" });
}

export async function LoginGithub() {
  await signIn("github", { redirectTo: "/" });
}

export async function LogoutUser() {
  await signOut();
  revalidatePath("/");
  redirect("/");
}
