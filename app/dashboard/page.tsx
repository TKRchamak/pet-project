import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/components/ui/avatar";
import React from "react";
import { pacifico } from "../components/ui/fonts";
import { Button } from "../components/ui/button";

const Dashboard = () => {
  return (
    <main className="flex items-center justify-center md:h-screen bg-slate-300">
      <div className="relative mx-auto flex w-full max-w-[650px] flex-col space-y-2.5 p-4 md:-mt-32 gap-5 bg-yellow-200">
        <section>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className={`text-lg ${pacifico.className}`}>Zaber Ahmed</p>
            </div>
            <Button size={"md"}>Upload</Button>
          </div>
        </section>
        <section>Gallery Section</section>
      </div>
    </main>
  );
};

export default Dashboard;
