import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/components/ui/avatar";
import React from "react";
import { pacifico } from "../components/ui/fonts";
import { Button } from "../components/ui/button";
import { LogOut, Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import UploadContent from "./upload-content";

const Profile = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ZA</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start justify-center">
            <p className={`text-lg text-extrabold ${pacifico.className}`}>
              Zaber Ahmed
            </p>
            <p className={`text-sm ${pacifico.className}`}>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className={`text-lg ${pacifico.className}`}>10 posts</p>
          <p className={`text-sm ${pacifico.className}`}>
            Software Engineer, Gamer, Cyclist
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant={"destructive"} size={"sm"}>
          Logout
          <LogOut size={"18px"} style={{ marginLeft: "8px" }} />
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"sm"}>
              Upload
              <Plus size={"18px"} style={{ marginLeft: "8px" }} />
            </Button>
          </DialogTrigger>
          <UploadContent />
        </Dialog>
      </div>
    </div>
  );
};

export default Profile;
