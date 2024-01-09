import { create } from "zustand";

const useUser = create((set) => ({
    user: '',

    setUser: (value) => set((state) => ({ user: value })),
    setMenuHidden: (value) => set((state) => ({ menuHidden: value })),
}));

export default useUser