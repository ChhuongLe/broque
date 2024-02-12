import { create } from "zustand";

interface AppState {
 username: string | null;
 setUsername: (username: string) => void;

 thumbnails: Array<string> | null;
 setThumbnails: (thumbnails: Array<string>) => void[];

 category: string | null;
 setCategory: (category: string) => void;

 itemMap: {"id": number, "price": number, "name": string, "string": string, "img": string}[] | null;
 setItemMap: (itemMap:{"id": number, "price": number, "name": string, "string": string, "img": string}[]) => void[];
}

export const useAppStore = create<AppState>() ((set) => ({
  username: "",
  setUsername: (username: string) => set((state) => ({ username })),

  thumbnails: [],
  setThumbnails: (thumbnails: Array<string>) =>set((state) =>({ thumbnails })),

  category: "",
  setCategory: (category: string) => set((state) => ({category})),

  itemMap: [],
  setItemMap: (itemMap:{"id": number, "price": number, "name": string, "string": string, "img": string}[]) => set((state)=> ({itemMap}))
}));