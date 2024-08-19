// src/components/Home.js
"use client";
import React from "react";
import { AddSquare } from "iconsax-react";
import Link from "next/link";
import useChatStore from "../store/useChatStore";
import { IconNoChat } from "@/components/util/IconNoChat";
import { IconQuestion } from "@/components/util/IconQuestion";
import formatJalaliDate from "@/composable/formatJalaliDate";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const startNewSession = useChatStore((state) => state.startNewSession);
  const setCurrentSessionId = useChatStore(
    (state) => state.setCurrentSessionId
  );

  const handleStartNewChat = async () => {
    startNewSession();
    router.push("/chat");
  };

  const handleSessionClick = (sessionId) => {
    setCurrentSessionId(sessionId);
    router.push(`/chat/${sessionId}`);
  };

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
              {chatSessions.map((session) => {
                // Find the timestamp of the first message and first answer
                const firstMessage = session.messages[0];

                const firstMessageTimestamp = firstMessage
                  ? formatJalaliDate(firstMessage.timestamp)
                  : "N/A";

                return (
                  <li key={session.id} className="">
                    <button
                      onClick={() => handleSessionClick(session.id)}
                      className="flex justify-between items-center border-b border-b-[#E9ECF1] py-2 w-full text-left"
                    >
                      <div className="flex items-center gap-2">
                        <IconQuestion />
                        <p className="text-sm text-darkBlue">
                          {session.messages[0]?.apiResponse || "No response"}
                        </p>
                      </div>
                      <div className="text-xs text-gray-500">
                        {firstMessageTimestamp}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleStartNewChat}
              className="flex items-center gap-2.5 bg-blue rounded-xl w-fit shadow-blue px-4 py-3.5 text-white"
            >
              <AddSquare size="32" color="#fff" variant="Outline" />
              <span className="text-sm">پرسیدن سوال</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="text-light text-center flex flex-col items-center gap-12">
          <IconNoChat />
          <p>
            لیست چت شما خالی است. <br />
            با کلیک روی دکمه‌ی زیر، چت با بات را شروع کنید.‌
          </p>
          <button
            onClick={handleStartNewChat}
            className="flex items-center gap-2.5 bg-blue rounded-xl w-fit shadow-blue px-4 py-3.5 text-white"
          >
            <AddSquare size="32" color="#fff" variant="Outline" />
            <span className="text-sm">پرسیدن سوال</span>
          </button>
        </div>
      )}
    </section>
  );
}
