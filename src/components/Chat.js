"use client";
import { ChatInput } from "./chat/ChatInput";

export const Chat = () => {
  return (
    <section className="h-full flex flex-col bg-white p-4">
      <div className="flex-grow">
        <div className="flex items-start gap-2.5">
          <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-light rounded-e-xl rounded-es-xl">
            <p className="text-sm font-normal py-2.5 text-gray-900 ">
              awesome. I think our users will really appreciate the
              improvements.
            </p>
          </div>
        </div>
      </div>
      <ChatInput />
    </section>
  );
};
