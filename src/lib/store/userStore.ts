import { UserAuth } from 'src/models/user/UserAuth';
import { create } from 'zustand';

interface StoreUser {
  user: UserAuth | null;
  actions: {
    setUser: (user: UserAuth | null) => void;
  };
}

// store를 create
const userStore = create<StoreUser>((set, get) => ({
  user: null,
  actions: {
    setUser: (newUser: UserAuth | null) => {
      set({ user: newUser });
    },
  },
}));

export const storeUserActions = () => userStore((state) => state.actions);
export const storeUser = () => userStore((state) => state.user);
