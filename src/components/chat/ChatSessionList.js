"use client";
import React from "react";
import { IconQuestion } from "@/components/util/IconQuestion";
import formatJalaliDate from "@/composable/formatJalaliDate";
import { useRouter } from "next/navigation";
import useChatStore from "@/store/useChatStore";

export const ChatSessionList = () => {
  const router = useRouter();

  const handleSessionClick = (sessionId) => {
    setCurrentSessionId(sessionId);
    router.push(`/chat/${sessionId}`);
  };
  const setCurrentSessionId = useChatStore(
    (state) => state.setCurrentSessionId
  );

  const { chatSessions } = useChatStore((state) => ({
    chatSessions: state.chatSessions,
  }));

  return (
    <div className="flex-grow">
      <h2 className="text-xs font-medium">لیست چت های قبلی</h2>
      <ul
        className="space-y-4 flex flex-col-reverse my-2 gap-2 overflow-y-scroll"
        style={{ maxHeight: "calc(100vh - 220px)" }}
      >
        {chatSessions.map((session) => {
          const firstMessage = session.messages[0];
          const firstMessageTimestamp = firstMessage
            ? formatJalaliDate(firstMessage.timestamp)
            : "N/A";

          const userMessage = firstMessage?.userMessage || "No response";
          const firstThreeWords =
            userMessage.split(" ").slice(0, 3).join(" ") + "...";

          return (
            <li key={session.id} className="">
              <button
                onClick={() => handleSessionClick(session.id)}
                className="flex justify-between items-center border-b border-b-[#E9ECF1] py-2 w-full text-left"
              >
                <div className="flex items-center gap-2">
                  <IconQuestion />
                  <p className="text-sm text-darkBlue">{firstThreeWords}</p>
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
  );
};
