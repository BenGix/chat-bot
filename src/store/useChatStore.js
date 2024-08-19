// src/store/useChatStore.js
import create from "zustand";

const useChatStore = create((set) => ({
  chatSessions: JSON.parse(localStorage.getItem("chatSessions")) || [],

  addMessageToSession: (sessionId, message) =>
    set((state) => {
      const sessionIndex = state.chatSessions.findIndex(
        (session) => session.id === sessionId
      );

      let newSessions;
      if (sessionIndex !== -1) {
        // If session exists, add the message to that session
        const updatedSession = {
          ...state.chatSessions[sessionIndex],
          messages: [...state.chatSessions[sessionIndex].messages, message],
        };
        newSessions = [
          ...state.chatSessions.slice(0, sessionIndex),
          updatedSession,
          ...state.chatSessions.slice(sessionIndex + 1),
        ];
      } else {
        // If session doesn't exist, create a new one
        const newSession = { id: sessionId, messages: [message] };
        newSessions = [...state.chatSessions, newSession];
      }

      localStorage.setItem("chatSessions", JSON.stringify(newSessions));
      return { chatSessions: newSessions };
    }),

  clearChatSessions: () =>
    set(() => {
      localStorage.removeItem("chatSessions");
      return { chatSessions: [] };
    }),
}));

export default useChatStore;
