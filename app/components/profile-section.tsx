import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/components/ui/avatar";
import React from "react";
import { pacifico } from "../components/ui/fonts";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import UploadContent from "./upload-content";

const Profile = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>ZA</AvatarFallback>
        </Avatar>
        <p className={`text-lg ${pacifico.className}`}>Zaber Ahmed</p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size={"md"}>
            Upload
            <Plus size={"18px"} style={{ marginLeft: "8px" }} />
          </Button>
        </DialogTrigger>
        <UploadContent />
      </Dialog>
    </div>
  );
};

export default Profile;
