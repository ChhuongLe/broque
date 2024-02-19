import { create } from "zustand";

interface AppState {
 username: string | null;
 setUsername: (username: string) => void;

 thumbnails: Array<string> | null;
 setThumbnails: (thumbnails: Array<string>) => void[];

 category: string | null;
 setCategory: (category: string) => void;

 itemMap: Array<any> | null;
 setItemMap: (itemMap: Array<any>) => void[];

 item: any | null;
 setItem: (item: any) => void;
}

export const useAppStore = create<AppState>() ((set) => ({
  username: "",
  setUsername: (username: string) => set((state) => ({ username })),

  thumbnails: [],
  setThumbnails: (thumbnails: Array<string>) =>set((state) =>({ thumbnails })),

  category: "",
  setCategory: (category: string) => set((state) => ({category})),

  itemMap: [],
  setItemMap: (itemMap: Array<any>) => set((state)=> ({itemMap})),

  item: {},
  setItem: (item: {}) => set((state) => ({item})),
}));