import { create } from 'zustand';

interface AdminPopupModalProps {
  modalOpen: boolean;
  popSize?: {};
  title: string;
  content: React.ReactNode | null;
  onClickOkCallback?: (data?: any) => void;
}

interface StorePopupModal {
  adminPopupModal: AdminPopupModalProps;
  actions: {
    setPopupModal: (popupModal: AdminPopupModalProps) => void;
    setPopupModalInit: () => void;
  };
}

const PopupModalInit: AdminPopupModalProps = {
  modalOpen: false,
  popSize: {},
  title: '',
  content: null,
  onClickOkCallback: () => {},
};

// store를 create
const PopupModalStore = create<StorePopupModal>((set, get) => ({
  adminPopupModal: PopupModalInit,
  actions: {
    setPopupModal: (newAdminPopupModal: AdminPopupModalProps) => {
      set({ adminPopupModal: newAdminPopupModal });
    },
    setPopupModalInit: () => {
      set({ adminPopupModal: PopupModalInit });
    },
  },
}));

export const storeAdminPopupModalActions = () =>
  PopupModalStore((state) => state.actions);
export const storeAdminPopupModal = () =>
  PopupModalStore((state) => state.adminPopupModal);
