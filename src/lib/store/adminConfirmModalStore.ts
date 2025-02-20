import { create } from 'zustand';

interface AdminConfirmModalProps {
  modalOpen: boolean;
  message: React.ReactNode | null;
  onClickOkCallback: (data?: any) => void;
}

interface StoreAdminConfirmModal {
  adminConfirmModal: AdminConfirmModalProps;
  actions: {
    setAdminConfirmModal: (adminConfirmModal: AdminConfirmModalProps) => void;
    setAdminConfirmModalInit: () => void;
  };
}

const adminConfirmModalInit: AdminConfirmModalProps = {
  modalOpen: false,
  message: null,
  onClickOkCallback: () => {},
};

// store를 create
const AdminConfirmModalStore = create<StoreAdminConfirmModal>((set, get) => ({
  adminConfirmModal: adminConfirmModalInit,
  actions: {
    setAdminConfirmModal: (newAdminConfirmModal: AdminConfirmModalProps) => {
      set({ adminConfirmModal: newAdminConfirmModal });
    },
    setAdminConfirmModalInit: () => {
      set({ adminConfirmModal: adminConfirmModalInit });
    },
  },
}));

export const storeAdminConfirmModalActions = () =>
  AdminConfirmModalStore((state) => state.actions);
export const storeAdminConfirmModal = () =>
  AdminConfirmModalStore((state) => state.adminConfirmModal);
