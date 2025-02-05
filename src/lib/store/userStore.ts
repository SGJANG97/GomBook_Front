import { AuthUser } from '../../../../bearmark_react/src/models/user/AuthUser';
import { create } from 'zustand';

interface StoreUser {
  user: AuthUser | null;
  actions: {
    setUser: (user: AuthUser | null) => void;
  };
}

// store를 create
const userStore = create<StoreUser>((set, get) => ({
  user: null,
  actions: {
    setUser: (newUser: AuthUser | null) => {
      set({ user: newUser });
    },
  },
}));

export const storeUserActions = () => userStore((state) => state.actions);
export const storeUser = () => userStore((state) => state.user);
