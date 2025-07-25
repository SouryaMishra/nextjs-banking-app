"use client";

import { Sheet, SheetTrigger, SheetClose, SheetContent } from "@/components/ui/Sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const MobileNav = ({ user }: IMobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white p-4">
          <Link href="/" className="inline-flex cursor-pointer items-center gap-2">
            <Image src="/icons/logo.svg" width={34} height={34} alt="PennyPinch logo" />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">PennyPinch</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-4 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className={cn("mobilenav-sheet_close w-full", { "bg-bank-gradient": isActive })}
                      >
                        <Image
                          width={20}
                          height={20}
                          src={item.imgURL}
                          alt={item.label}
                          className={cn({ "brightness-[3] invert-0": isActive })}
                        />
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
