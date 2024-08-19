"use client";
import React from "react";
import { AddSquare } from "iconsax-react";
import Link from "next/link";
import useChatStore from "../store/useChatStore";
import { IconNoChat } from "@/components/util/IconNoChat";
import { IconQuestion } from "@/components/util/IconQuestion";
import formatJalaliDate from "@/composable/formatJalaliDate";

export default function Home() {
  const { chatSessions } = useChatStore((state) => ({
    chatSessions: state.chatSessions,
  }));

  return (
    <section className="h-full flex flex-col justify-center bg-lighter gap-12 p-4">
      {chatSessions.length > 0 ? (
        <div className="h-full flex flex-col justify-between text-light py-4 ">
          <div className="flex-grow">
            <h2 className="text-xs font-medium">لیست چت های قبلی</h2>
            <ul
              className="space-y-4 flex flex-col-reverse my-2 gap-2 overflow-y-scroll"
              style={{ maxHeight: "calc(100vh - 220px)" }}
            >
              {chatSessions.map((session, index) => (
                <li key={index} className="">
                  <Link
                    href={`/chat/${index}`}
                    className="flex justify-between items-center  border-b border-b-[#E9ECF1] py-2"
                  >
                    <div className="flex items-center gap-2">
                      <IconQuestion />
                      <p className="text-sm text-darkBlue">
                        {session.apiResponse}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">
                      {formatJalaliDate(session.timestamp)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link className="flex justify-end" href={"/chat"}>
            <button className="flex items-center gap-2.5 bg-blue rounded-xl w-fit shadow-blue px-4 py-3.5 text-white">
              <AddSquare size="32" color="#fff" variant="Outline" />
              <span className="text-sm">پرسیدن سوال</span>
            </button>
          </Link>
        </div>
      ) : (
        <div className="text-light text-center flex flex-col items-center gap-12">
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
