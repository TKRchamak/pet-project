import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";

const ProfileAvatar = ({ size }: { size: number }) => {
  return (
    <>
      <Avatar className={`w-${size} h-${size}`}>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>ZA</AvatarFallback>
      </Avatar>
    </>
  );
};

export default ProfileAvatar;
