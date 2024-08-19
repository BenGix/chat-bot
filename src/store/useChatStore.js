// src/store/useChatStore.js
import create from "zustand";

const useChatStore = create((set) => ({
  chatSessions: JSON.parse(localStorage.getItem("chatSessions")) || [],
  addChatSession: (session) =>
    set((state) => {
      const newSessions = [...state.chatSessions, session];
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
