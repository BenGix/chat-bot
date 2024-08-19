import { useState } from "react";
import { sendMessageToAPI } from "../services/chatService";

export const useChat = (onSendMessage) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const autoResizeTextarea = (textarea) => {
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleInputChange = (e, textareaRef) => {
    setMessage(e.target.value);
    autoResizeTextarea(textareaRef.current);
  };

  const handleSubmit = async (e, textareaRef) => {
    e.preventDefault();
    if (message.trim() === "") return;

    try {
      setLoading(true);
      const reply = await sendMessageToAPI(message);
      onSendMessage(message, reply);
      setMessage(""); // Clear the message after submission
      autoResizeTextarea(textareaRef.current); // Adjust textarea height
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    message,
    loading,
    handleInputChange,
    handleSubmit,
  };
};
