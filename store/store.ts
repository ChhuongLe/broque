import { create } from "zustand";

interface AppState {
 username: string | null;
 setUsername: (username: string) => void;

 thumbnails: Array<string> | null;
 setThumbnails: (thumbnails: Array<string>) => void[];
}

export const useAppStore = create<AppState>() ((set) => ({
  username: "",
  setUsername: (username: string) => set((state) => ({ username })),

  thumbnails: [],
  setThumbnails: (thumbnails: Array<string>) =>set((state) =>({ thumbnails })),
}));