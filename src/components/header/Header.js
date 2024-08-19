// src/components/Header.js
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { ArrowRight2 } from "iconsax-react";
import useTitleStore from "@/store/useTitleStore";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();
  const { title } = useTitleStore((state) => ({ title: state.title }));
  const showHeader = pathname.startsWith("/chat");
  return (
    <>
      {pathname === "/" && (
        <header className="relative z-10 h-14 flex justify-center bg-lighter shadow-dark p-4">
          <h1 className="text-xl font-bold">چت بات</h1>
        </header>
      )}
      {showHeader && (
        <header className="relative z-10 h-14 flex justify-between bg-lighter shadow-dark p-4">
          <Link href={"/"} className="flex gap-2 items-center">
            <ArrowRight2 color="#051214" />
            <span className="text-xs">بازگشت</span>
          </Link>
          <h1 className="text-xl font-bold">{title || "چت بات"}</h1>
          <div className="flex gap-1 invisible">
            <ArrowRight2 color="#051214" />
            <span>بازگشت</span>
          </div>
        </header>
      )}
    </>
  );
};
