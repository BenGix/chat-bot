"use client";
import React, { useState } from "react";
import { ChatInput } from "./chat/ChatInput";

export const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (userMessage, botReply) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        type: "user",
        content:
          typeof userMessage === "string"
            ? userMessage
            : JSON.stringify(userMessage),
      },
      {
        type: "bot",
        content:
          typeof botReply === "string"
            ? botReply
            : JSON.stringify(botReply.answer),
      },
    ]);
  };

  return (
    <section className="h-full flex flex-col bg-white p-4">
      <div
        className="flex-grow overflow-y-scroll flex flex-col gap-2"
        style={{ maxHeight: "calc(100vh - 120px)" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            } gap-2.5`}
          >
            <div
              className={`flex flex-col w-full justify-end max-w-72 leading-1.5 p-4 rounded-xl ${
                message.type === "user"
                  ? "bg-light rounded-s-xl rounded-es-xl"
                  : "bg-gray-200 rounded-e-xl rounded-ee-xl"
              }`}
            >
              <p className="text-sm font-normal py-2.5 text-gray-900">
                {message.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} key={messages} />
    </section>
  );
};
