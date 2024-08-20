// src/utils/api.js
import axios from "axios";
import useChatStore from "../store/useChatStore";

export const sendMessageToAPI = async (message) => {
  const chatStore = useChatStore.getState();
  let { currentSessionId } = chatStore;

  if (!currentSessionId) {
    chatStore.startNewSession();
    currentSessionId = useChatStore.getState().currentSessionId;
  }

  const payload = new FormData();
  payload.append("query", message);
  payload.append("session_id", currentSessionId);
  payload.append("is_new", null);

  const headers = {
    "X-API-Key": "1ef91c9ce17769114280a8aea1253fe51ac78efc",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Headers":
      "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "*",
  };

  try {
    const response = await axios.post(
      "https://app.radeai.com/api/rag/test/",
      payload,
      { headers }
    );

    chatStore.addMessageToSession(currentSessionId, {
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
