"use client";

import React from "react";
import {
  Clapperboard,
  Compass,
  Heart,
  Home,
  LucideIcon,
  MessageCircle,
  PlusSquare,
  Search,
} from "lucide-react";
import Link from "next/link";

import { cn } from "@utils";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@ui/button";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import ProfileAvatar from "./profile-avatar";

interface NavigationLinks {
  name: string;
  href: string;
  icon?: LucideIcon;
  hideOnMobile?: boolean;
}

const links: NavigationLinks[] = [
  { name: "Home", href: "/dashboard", icon: Home },
  {
    name: "Search",
    href: "/dashboard/search",
    icon: Search,
    hideOnMobile: true,
  },
  { name: "Explore", href: "/dashboard/explore", icon: Compass },
  {
    name: "Reels",
    href: "/dashboard/reels",
    icon: Clapperboard,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: MessageCircle,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Heart,
    hideOnMobile: true,
  },
  {
    name: "Create",
    href: "/dashboard/create",
    icon: PlusSquare,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
  },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon as LucideIcon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={buttonVariants({
              variant: isActive ? "secondary" : "ghost",
              className: cn("navLink", { "hidden md:flex": link.hideOnMobile }),
              size: "lg",
            })}
          >
            {LinkIcon ? (
              <LinkIcon className="w-6" />
            ) : (
              <ProfileAvatar size={6} />
            )}
            <p
              className={`${cn("hidden lg:block", {
                "font-extrabold": isActive,
              })}`}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
