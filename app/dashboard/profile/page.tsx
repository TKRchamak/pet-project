import React from "react";
import Profile from "@/components/profile-section";
import Gallery from "@/components/gallery-section";

const Dashboard = () => {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="mx-auto flex w-full max-w-[650px] flex-col gap-4 space-y-2.5 p-4 md:-mt-32 border-2 border-solid border-gray-500 rounded-sm">
        <Profile />
        <Gallery />
      </div>
    </main>
  );
};

export default Dashboard;
