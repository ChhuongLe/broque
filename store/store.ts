import { create } from "zustand";

interface AppState {
 username: string | null;
 setUsername: (username: string) => void;
}

export const useAppStore = create<AppState>() ((set) => ({
  username: "",
  setUsername: (username: string) => set((state) => ({ username })),
}));