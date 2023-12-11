import React from "react";
import { pacifico } from "@components/fonts";
import { Button } from "@ui/button";
import { LogOut, Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "@ui/dialog";
import UploadContent from "@components/upload-content";
import ProfileAvatar from "@components/profile-avatar";

const Profile = () => {
  return (
    <main className="flex flex-col justify-between h-[150px]">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          <ProfileAvatar size={10} />
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
    </main>
  );
};

export default Profile;
