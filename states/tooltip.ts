import { create } from "zustand";

interface TooltipState {
  text: string;
  visible: boolean;
  setText: (text?: string) => void;
  setVisibility: (visible?: boolean) => void;
}

export const useTooltip = create<TooltipState>((set, get) => ({
  text: "Tooltip",
  visible: false,
  setText: (text?: string) => set({ text: text || "Tooltip" }),
  setVisibility: (visible?: boolean) =>
    set({ visible: visible ?? !!get().visible }),
}));
