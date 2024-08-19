import { Send } from "iconsax-react";
import React, { useRef } from "react";

export const ChatInput = () => {
  const textareaRef = useRef(null);

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset the height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set it to the scroll height, up to the max height
  };

  return (
    <form className="min-h-10 max-h-28">
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-end h-full p-1 rounded-3xl bg-lightGray">
        <textarea
          id="chat"
          ref={textareaRef}
          rows="1"
          className="w-full max-h-28 bg-transparent text-xs resize-none px-4 focus-visible:ring-0 focus-visible:ring-transparent outline-none focus-visible:shadow-none focus-visible:border-0 focus-visible:outline-0 overflow-auto"
          placeholder="چت با روبات نمافر"
          onInput={autoResizeTextarea}
          style={{ maxHeight: "110px" }} // Set max height to 110px
        ></textarea>

        <button
          type="submit"
          className="flex flex-col h-full max-h-8 items-center justify-center aspect-square rounded-full bg-gradient-button rotate-180"
        >
          <Send size="16" color="#FFf" variant="Outline" />
        </button>
      </div>
    </form>
  );
};
