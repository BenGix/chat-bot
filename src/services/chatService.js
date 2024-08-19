// src/utils/api.js
import axios from "axios";
import useChatStore from "../store/useChatStore";

export const sendMessageToAPI = async (message) => {
  const { currentSessionId } = useChatStore.getState();

  if (!currentSessionId) {
    throw new Error(
      "No active chat session found. Please start a new chat session."
    );
  }

  const payload = new FormData();
  payload.append("query", message);
  payload.append("session_id", currentSessionId);
  payload.append("is_new", null);

  const headers = {
    "X-API-Key": "1ef91c9ce17769114280a8aea1253fe51ac78efc",
    "Content-Type": "multipart/form-data",
  };

  try {
    const response = await axios.post(
      "https://app.radeai.com/api/rag/test/",
      payload,
      { headers }
    );

    // Save the user message and API response to the chat store
    useChatStore.getState().addMessageToSession(currentSessionId, {
      userMessage: message,
      apiResponse: response.data.answer,
      timestamp: new Date().toISOString(),
    });

    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
