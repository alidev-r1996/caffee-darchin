"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

const SocialLogin = () => {
  const handleGoogleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("google", { callbackUrl: "/" }); 
  };

  const handleGithubLogin = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("github", { callbackUrl: "/" });
  };

  return (
    <>
      <div className="flex items-center my-2 -mb-3 w-[70vw] md:w-2/3 mx-auto">
        <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
        <p className="text-sm text-slate-500 px-4">or</p>
        <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
      </div>

      <form onSubmit={handleGoogleLogin} className="mx-auto w-[70vw] md:w-2/3 mt-4">
        <Button variant="outline" className="w-full">
          <Image
            src="/icon/gmail.webp"
            alt="google"
            width={20}
            height={20}
            className="inline mr-2"
          />
          ورود با گوگل
        </Button>
      </form>

      <form onSubmit={handleGithubLogin} className="mx-auto w-[70vw] md:w-2/3 -mt-4">
        <Button variant="outline" className="w-full">
          <Image
            src="/icon/github.webp"
            alt="github"
            width={20}
            height={20}
            className="inline mr-2"
          />
          ورود با گیت‌هاب
        </Button>
      </form>
    </>
  );
};

export default SocialLogin;
