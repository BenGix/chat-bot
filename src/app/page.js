"use client";
import React, { useEffect } from "react";
import { AddSquare } from "iconsax-react";
import useChatStore from "../store/useChatStore";
import { IconNoChat } from "@/components/util/IconNoChat";
import { ChatSessionList } from "@/components/chat/ChatSessionList";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const startNewSession = useChatStore((state) => state.startNewSession);
  const initializeStore = useChatStore((state) => state.initializeStore);
  const { chatSessions } = useChatStore((state) => ({
    chatSessions: state.chatSessions,
  }));

  useEffect(() => {
    // Initialize the store
    initializeStore();

    // Debugging logs to ensure data is loaded
    console.log("Chat sessions from store:", chatSessions);
  }, [initializeStore]);

  const handleStartNewChat = async () => {
    startNewSession();
    router.push("/chat");
  };

  return (
    <section className="flex-grow flex flex-col justify-center bg-lighter gap-12 p-4">
      {chatSessions.length > 0 ? (
        <div className="h-full flex flex-col justify-between text-light py-4">
          <div className="block md:hidden">
            <ChatSessionList />
          </div>
          <div className="hidden md:flex text-light text-center flex-col items-center gap-12">
            <IconNoChat />
            <p>
              یک چت انتخاب کنید
              <br />
              یا با کلیک روی دکمه‌ی زیر، چت با بات را شروع کنید. ‌
            </p>
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
