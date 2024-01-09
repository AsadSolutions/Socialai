import { create } from "zustand";

const useFormType = create((set) => ({
    formType: 'login',
    setFormType: (formType) => set((state) => ({ formType: formType })),

}));

export default useFormType