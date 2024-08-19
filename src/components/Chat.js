"use client";
import { ChatInput } from "./chat/ChatInput";

export const Chat = () => {
  return (
    <section className="h-full flex flex-col bg-white p-4">
      <div className="flex-grow">
        <div className="flex justify-end gap-2.5">
          <div className="flex flex-col w-full  justify-end max-w-72 leading-1.5 p-4 bg-light rounded-s-xl rounded-es-xl">
            <p className="text-sm font-normal py-2.5 text-gray-900 ">
              از طریق فیلد پایین صفحه، سوال خود را در مورد مجلات، نمودارها و
              پایگاه دانش نمافر بپرسید تا روبات هوش مصنوعی ما به شما پاسخ دهد.
            </p>
          </div>
        </div>
      </div>
      <ChatInput />
    </section>
  );
};
