// src/store/useChatStore.js
import create from "zustand";

const useChatStore = create((set) => ({
  chatSessions: JSON.parse(localStorage.getItem("chatSessions")) || [],
  currentSessionId: localStorage.getItem("currentSessionId") || null,

  // Create a new session and set the session ID
  startNewSession: () => set((state) => {
    const newSessionId = `session-${Date.now()}`; // Create a unique session ID
    localStorage.setItem("currentSessionId", newSessionId);
    return { currentSessionId: newSessionId };
  }),

  setCurrentSessionId: (sessionId) => set(() => {
    localStorage.setItem("currentSessionId", sessionId);
    return { currentSessionId: sessionId };
  }),

  addMessageToSession: (sessionId, message) => set((state) => {
    const newSessions = state.chatSessions.map((session) => {
      if (session.id === sessionId) {
        return {
          ...session,
          messages: [...session.messages, message],
        };
      }
      return session;
    });

    // If sessionId does not exist, add a new session
    if (!newSessions.some((session) => session.id === sessionId)) {
      newSessions.push({
        id: sessionId,
        messages: [message],
      });
    }

    localStorage.setItem("chatSessions", JSON.stringify(newSessions));
    return { chatSessions: newSessions };
  }),

  clearChatSessions: () => {
    localStorage.removeItem("chatSessions");
    localStorage.removeItem("currentSessionId");
    return { chatSessions: [], currentSessionId: null };
  },
}));

export default useChatStore;
