/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LoginForm from "./login-form";
import { pacifico } from "@/components/fonts";
import Link from "next/link";
import { Facebook } from "lucide-react";

const Page = () => {
  return (
    <main className="flex flex-col gap-4 items-center justify-center md:h-screen mt-16">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 gap-5 shadow-lg border-border rounded-md border">
        {/* <div className="flex h-20 w-full rounded-lg bg-blue-200 p-3 md:h-36 justify-center items-center"> */}
        <div className="flex h-20 w-full rounded-lg p-3 md:h-36 justify-center items-center">
          <h1
            className={`${pacifico.className} text-primary text-4xl font-bold`}
          >
            Instaclone
          </h1>
        </div>
        <LoginForm />

        <div className="relative">
          <hr />
          <p className="absolute top-[-13px] left-[43%] bg-white px-4 text-gray-600">
            OR
          </p>
        </div>

        <div className="flex justify-center align-center">
          <div className="rounded bg-blue-500 pt-1 px-1 me-1 text-white">
            <Facebook size={18} />
          </div>
          <Link rel="stylesheet" className="text-blue-500" href="">
            Log in with Facebook
          </Link>
        </div>

        <p className="text-xs text-center">Forgot password?</p>
      </div>

      <div className="mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 gap-5 shadow-lg border-border rounded-md border">
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link className="text-blue-500" href={""}>
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Page;
