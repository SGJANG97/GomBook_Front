import { create } from 'zustand';

export interface AdminPopupModalProps {
  modalOpen: boolean;
  popSize?: {};
  title: string;
  content: React.ReactNode | null;
  onClickOkCallback?: (data?: any) => void;
}

interface StorePopupModal {
  adminPopupModal: AdminPopupModalProps[];
  actions: {
    setPopupModal: (popupModal: AdminPopupModalProps) => void;
    closeLastModal: () => void;
    setPopupModalInit: () => void;
  };
}

// store를 create
const PopupModalStore = create<StorePopupModal>((set, get) => ({
  adminPopupModal: [],
  actions: {
    setPopupModal: (newAdminPopupModal: AdminPopupModalProps) => {
      set((state) => ({
        adminPopupModal: [...state.adminPopupModal, newAdminPopupModal], // 새로운 모달 추가
      }));
    },
    closeLastModal: () => {
      set((state) => ({
        adminPopupModal: state.adminPopupModal.slice(0, -1), // 마지막 모달 닫기
      }));
    },
    setPopupModalInit: () => {
      set({ adminPopupModal: [] }); // 모든 모달 초기화
    },
  },
}));

export const storeAdminPopupModalActions = () =>
  PopupModalStore((state) => state.actions);
export const storeAdminPopupModal = () =>
  PopupModalStore((state) => state.adminPopupModal);
