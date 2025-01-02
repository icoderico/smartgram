import { create } from "zustand";
import { persist } from 'zustand/middleware';

const userStore = create(persist((set) => ({
    user: null, 
    login: (userData) => set({ user: userData }),
    logout: () => set({ user: null }),
}),
    {
        name: 'user-storage',
    }
));

export default userStore;