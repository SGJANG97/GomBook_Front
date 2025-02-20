import { create } from 'zustand';

interface AdminAlertModalProps {
  modalOpen: boolean;
  message: React.ReactNode | string | null;
  path?: string;
}

interface StoreAdminAlertModal {
  adminAlertModal: AdminAlertModalProps;
  actions: {
    setAdminAlertModal: (adminAlertModal: AdminAlertModalProps) => void;
    setAdminAlertModalInit: () => void;
  };
}

const adminAlertModalInit: AdminAlertModalProps = {
  modalOpen: false,
  message: '',
  path: '',
};

// store를 create
const alertModalStore = create<StoreAdminAlertModal>((set, get) => ({
  adminAlertModal: adminAlertModalInit,
  actions: {
    setAdminAlertModal: (newAdminAlertModal: AdminAlertModalProps) => {
      set({ adminAlertModal: newAdminAlertModal });
    },
    setAdminAlertModalInit: () => {
      set({ adminAlertModal: adminAlertModalInit });
    },
  },
}));

export const storeAdminAlertModalActions = () =>
  alertModalStore((state) => state.actions);
export const storeAdminAlertModal = () =>
  alertModalStore((state) => state.adminAlertModal);
