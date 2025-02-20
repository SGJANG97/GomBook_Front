import { UserAuth } from 'src/models/user/UserAuth';
import { create } from 'zustand';

interface StoreAdminUser {
  adminUser: UserAuth | null;
  actions: {
    setAdminUser: (admnUser: UserAuth | null) => void;
  };
}

// store를 create
const adminUserStore = create<StoreAdminUser>((set, get) => ({
  adminUser: null,
  actions: {
    setAdminUser: (newAdminUser: UserAuth | null) => {
      set({ adminUser: newAdminUser });
    },
  },
}));

export const storeAdminUserActions = () =>
  adminUserStore((state) => state.actions);
export const storeAdminUser = () => adminUserStore((state) => state.adminUser);
