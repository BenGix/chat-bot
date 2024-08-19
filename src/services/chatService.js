// src/utils/api.js
import axios from 'axios';
import useChatStore from '../store/useChatStore';

export const sendMessageToAPI = async (message) => {
  const payload = new FormData();
  payload.append('query', message);
  payload.append('session_id', 'test-89');
  payload.append('is_new', null);

  const headers = {
    'X-API-Key': '1ef91c9ce17769114280a8aea1253fe51ac78efc',
    'Content-Type': 'multipart/form-data',
  };

  try {
    const response = await axios.post(
      'https://app.radeai.com/api/rag/test/',
      payload,
      { headers }
    );

    // Save the user message and API response to the chat store
    useChatStore.getState().addChatSession({
      userMessage: message,
      apiResponse: response.data.title,
      timestamp: new Date().toISOString(),
    });

    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
  