import { create } from "zustand";

type UiState = {
  commandQuery: string;
  setCommandQuery: (value: string) => void;
};

export const useUiStore = create<UiState>((set) => ({
  commandQuery: "",
  setCommandQuery: (value) => set({ commandQuery: value }),
}));
