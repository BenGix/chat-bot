"use client";
import create from "zustand";

const useChatStore = create((set) => ({
  chatSessions: [],
  currentSessionId: null,

  initializeStore: () => {
    if (typeof window !== "undefined") {
      const storedSessions =
        JSON.parse(localStorage.getItem("chatSessions")) || [];
      const storedSessionId = localStorage.getItem("currentSessionId") || null;
      set({ chatSessions: storedSessions, currentSessionId: storedSessionId });
    }
  },

  startNewSession: () =>
    set((state) => {
      if (typeof window !== "undefined") {
        const newSessionId = `session-${Date.now()}`;
        localStorage.setItem("currentSessionId", newSessionId);
        return { currentSessionId: newSessionId };
      }
    }),

  setCurrentSessionId: (sessionId) =>
    set(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("currentSessionId", sessionId);
        return { currentSessionId: sessionId };
      }
    }),

  addMessageToSession: (sessionId, message) =>
    set((state) => {
      const newSessions = state.chatSessions.map((session) => {
        if (session.id === sessionId) {
          return {
            ...session,
            messages: [...session.messages, message],
          };
        }
        return session;
      });

      if (!newSessions.some((session) => session.id === sessionId)) {
        newSessions.push({
          id: sessionId,
          messages: [message],
        });
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("chatSessions", JSON.stringify(newSessions));
      }

      return { chatSessions: newSessions };
    }),

  clearChatSessions: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("chatSessions");
      localStorage.removeItem("currentSessionId");
    }
    return { chatSessions: [], currentSessionId: null };
  },
}));

export default useChatStore;
