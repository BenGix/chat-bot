import { Send } from "iconsax-react";
import React, { useRef } from "react";

export const ChatInput = () => {
  const textareaRef = useRef(null);
  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <form>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-end p-1 rounded-4xl bg-lightGray">
        <textarea
          id="chat"
          ref={textareaRef}
          rows="1"
          className="w-full min-h-9 bg-transparent resize-none px-4 focus-visible:ring-0 focus-visible:ring-transparent outline-none focus-visible:shadow-none focus-visible:border-0 focus-visible:outline-0"
          placeholder="چت با روبات نمافر"
          onInput={autoResizeTextarea}
        ></textarea>
        <div className="h-full rounded-full bg-gradient-button">
          <button
            type="submit"
            className="inline-flex h-full items-end justify-center p-2 rotate-180 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100"
          >
            <Send size="32" color="#FFf" variant="Outline" />
          </button>
        </div>
      </div>
    </form>
  );
};
