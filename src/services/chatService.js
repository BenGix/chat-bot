import axios from "axios";

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

    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error; // Re-throw the error so it can be handled in the hook
  }
};
