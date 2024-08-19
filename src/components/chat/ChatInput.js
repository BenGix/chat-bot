import React, { useRef } from "react";
import { Send } from "iconsax-react";
import { useChat } from "@/hooks/useChat";

export const ChatInput = ({ onSendMessage }) => {
  const textareaRef = useRef(null);
  const { message, loading, handleInputChange, handleSubmit } =
    useChat(onSendMessage);

  const buttonBgClass = message.trim() ? "bg-gradient-button" : "bg-mainGray";

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="min-h-11 max-h-32 pt-1">
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-end h-full p-1 rounded-3xl bg-lightGray">
        <textarea
          id="chat"
          ref={textareaRef}
          rows="1"
          className="w-full max-h-28 bg-transparent text-xs resize-none px-4 focus-visible:ring-0 focus-visible:ring-transparent outline-none focus-visible:shadow-none focus-visible:border-0 focus-visible:outline-0 overflow-auto mb-2"
          placeholder="چت با روبات نمافر"
          value={message}
          onChange={(e) => handleInputChange(e, textareaRef)}
          disabled={loading}
          style={{ maxHeight: "110px" }}
        ></textarea>

        <button
          type="submit"
          className={`flex flex-col h-full max-h-8 items-center justify-center aspect-square rounded-full rotate-180 ${buttonBgClass}`}
          disabled={loading || !message.trim()}
        >
          <Send size="16" color="#FFF" variant="Outline" />
        </button>
      </div>
    </form>
  );
};
