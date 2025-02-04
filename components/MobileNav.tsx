"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Cross,
  SidebarClose,
  SidebarCloseIcon,
  SidebarIcon,
  Square,
  SquareX,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full max-w-[264px]">
      <Sheet onOpenChange={(e) => setOpen(e)}>
        <SheetTrigger asChild>
          <Image
            src={"/icons/hamburger.svg"}
            width={36}
            height={36}
            alt="hamburger"
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-dark-1" side={"left"}>
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src={"icons/logo.svg"}
              width={32}
              height={32}
              alt="zoom"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">Zoom</p>
          </Link>
          <div className="flex h-[calc(100vh - 72px)] flex-col justify-between overflow-y-auto">
            <section className="flex h-full flex-col gap-6 pt-16 text-white">
              {sidebarLinks.map((link: any) => {
                const isActive =
                  pathName === link.route;
                return (
                  <SheetClose asChild key={link.route}>
                    <Link
                      key={link.label}
                      href={link.route}
                      className={cn(
                        "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                        { "bg-blue-1": isActive }
                      )}
                    >
                      <Image
                        src={link.imgUrl}
                        alt={link.label}
                        width={20}
                        height={20}
                      />
                      <p className="font-semibold">{link.label}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </section>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
