// src/store/useTitleStore.js
import create from "zustand";

const useTitleStore = create((set) => ({
  title: "",
  setTitle: (newTitle) => set({ title: newTitle }),
}));

export default useTitleStore;
