import { AuthUser } from '../../../../bearmark_react/src/models/user/AuthUser';
import { create } from 'zustand';

interface StoreAdminUser {
  adminUser: AuthUser | null;
  actions: {
    setAdminUser: (admnUser: AuthUser | null) => void;
  };
}

// store를 create
const adminUserStore = create<StoreAdminUser>((set, get) => ({
  adminUser: null,
  actions: {
    setAdminUser: (newAdminUser: AuthUser | null) => {
      set({ adminUser: newAdminUser });
    },
  },
}));

export const storeAdminUserActions = () =>
  adminUserStore((state) => state.actions);
export const storeAdminUser = () => adminUserStore((state) => state.adminUser);
