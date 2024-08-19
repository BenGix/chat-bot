"use client";
import React from "react";
import { usePathname, useParams } from "next/navigation";
import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import useChatStore from "@/store/useChatStore";

export const Header = () => {
  const pathname = usePathname();
  const { id } = useParams();
  const showHeader = pathname.startsWith("/chat");

  const { chatSessions } = useChatStore((state) => ({
    chatSessions: state.chatSessions,
  }));

  const selectedSession = chatSessions.find((session) => session.id === id);

  let title = "چت بات";
  if (selectedSession && selectedSession.messages.length > 0) {
    const firstMessage = selectedSession.messages[0].userMessage || "";
    const firstThreeWords = firstMessage.split(" ").slice(0, 2).join(" ");
    title = firstThreeWords.length > 0 ? `${firstThreeWords}` : "چت بات";
  }

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
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="flex gap-1 invisible">
            <ArrowRight2 color="#051214" />
            <span>بازگشت</span>
          </div>
        </header>
      )}
    </>
  );
};
