import { create } from "zustand";

const useSidebar = create((set) => ({
    isOpen: false,
    menuHidden: false,
    setIsOpen: (value) => set((state) => ({ isOpen: value })),
    setMenuHidden: (value) => set((state) => ({ menuHidden: value })),
}));

export default useSidebar