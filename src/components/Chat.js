"use client";
import React, { useState } from "react";
import { ChatInput } from "./chat/ChatInput";

export const Chat = ({ initialMessages = [] }) => {
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (userMessage, botReply) => {
    const timestamp = new Date().toISOString();

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        type: "user",
        content:
          typeof userMessage === "string"
            ? userMessage
            : JSON.stringify(userMessage),
        timestamp,
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
              message.type === "user" ? "justify-start" : "justify-end"
            } gap-2.5`}
          >
            <div
              className={`flex flex-col w-full max-w-72 leading-1.5 px-2 ${
                message.type === "user"
                  ? "bg-gradient-primary text-white rounded-e-xl rounded-es-xl"
                  : "bg-light text-dark rounded-s-xl rounded-ee-xl"
              }`}
            >
              <p className="text-sm font-normal py-2.5">{message.content}</p>
              {message.type === "user" && message.timestamp && (
                <p dir="rtl" className="text-xs text-white opacity-90 tex-xs">
                  {new Date(message.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </section>
  );
};
