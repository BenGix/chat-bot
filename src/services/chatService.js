// src/utils/api.js
import axios from "axios";
import useTitleStore from "../store/useTitleStore";

export const sendMessageToAPI = async (message) => {
  const payload = new FormData();
  payload.append("query", message);
  payload.append("session_id", "test-89");
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

    // Update the Zustand store with the new title
    useTitleStore.getState().setTitle(response.data.title);

    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
