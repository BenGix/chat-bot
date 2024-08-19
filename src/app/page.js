"use client";
import React from "react";
import { AddSquare } from "iconsax-react";
import Link from "next/link";
import useChatStore from "../store/useChatStore";
import { IconNoChat } from "@/components/util/IconNoChat";
import { IconQuestion } from "@/components/util/IconQuestion";

export default function Home() {
  const { chatSessions } = useChatStore((state) => ({
    chatSessions: state.chatSessions,
  }));

  return (
    <section className="h-full flex flex-col bg-lighter gap-12">
      {chatSessions.length > 0 ? (
        <div className="text-light py-4 ">
          <h2 className="text-xs font-medium">لیست چت های قبلی</h2>
          <ul className="space-y-4">
            {chatSessions.map((session, index) => (
              <li key={index} className="">
                {" "}
                <Link
                  href={`/chat/${index}`}
                  className="flex p-4 border-b border-b-[#E9ECF1] "
                >
                  <IconQuestion />
                  <p>{session.userMessage}</p>
                  <p>{session.apiResponse}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(session.timestamp).toLocaleString()}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-light text-center">
          {" "}
          <IconNoChat />
          <p>
            لیست چت شما خالی است. <br />
            با کلیک روی دکمه‌ی زیر، چت با بات را شروع کنید.‌
          </p>
          <Link href={"/chat"}>
            <button className="flex items-center gap-2.5 bg-blue rounded-xl w-fit shadow-blue px-4 py-3.5 text-white">
              <AddSquare size="32" color="#fff" variant="Outline" />
              <span className="text-sm">پرسیدن سوال</span>
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}
