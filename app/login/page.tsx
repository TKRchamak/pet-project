import React from "react";
import LoginForm from "../components/login-form";
import { pacifico } from "../components/ui/fonts";

const Page = () => {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 gap-5 shadow-lg border-border rounded-md">
        <div className="flex h-20 w-full rounded-lg bg-blue-200 p-3 md:h-36 justify-center items-center">
          <h1
            className={`${pacifico.className} text-primary text-4xl font-bold`}
          >
            Instaclone
          </h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default Page;
