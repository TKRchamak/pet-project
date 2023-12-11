import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { lobster } from "./fonts";

const Logo = () => {
  return (
    <Link
      href={"/dashboard"}
      className={buttonVariants({
        className:
          "navLink hidden md:flex !mb-10 lg:hover:bg-transparent lg:!p-0 md:!px-2",
        variant: "ghost",
        size: "lg",
      })}
    >
      <Instagram className="h-8 w-8 shrink-0 lg:hidden" />

      <p
        className={`text-semibold text-3xl hidden lg:block ${lobster.className}`}
      >
        Instaclone
      </p>
    </Link>
  );
};

export default Logo;
