"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";

const Sidebar = ({ user }: ISiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar h-full">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex mb-12 cursor-pointer flex-center gap-2">
          <Image className="size-[24px]" src="/icons/logo.svg" width={34} height={34} alt="PennyPinch logo" />
          <h1 className="sidebar-logo">PennyPinch</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.route}
              className={cn("group", "sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  fill
                  src={item.imgURL}
                  alt={item.label}
                  className={cn("group-hover:brightness-[3] group-hover:invert-0", {
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-white": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
        <PlaidLink user={user} />
      </nav>
      <Footer user={user} />
    </section>
  );
};

export default Sidebar;
