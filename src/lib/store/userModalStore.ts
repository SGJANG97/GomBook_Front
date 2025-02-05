import { PopupType } from '../../../../bearmark_react/src/components/modal/PopupModal';
import { create } from 'zustand';

export interface UserModalProps {
  type: PopupType;
  headerTitle: string;
  modalOpen: boolean;
  content: React.ReactNode | string;
  path?: string;
  onClickOkCallback?: (data?: any) => void;
  onClickCancelCallback?: (data?: any) => void;
}

interface StoreUserModal {
  userModals: UserModalProps[];
  actions: {
    setUserModal: (userModal: UserModalProps) => void;
    closeLastModal: () => void;
    setUserModalInit: () => void;
  };
}

// store를 create
const userModalStore = create<StoreUserModal>((set, get) => ({
  userModals: [],
  actions: {
    setUserModal: (newUserModal: UserModalProps) => {
      set((state) => ({
        userModals: [...state.userModals, newUserModal], // 새로운 모달 추가
      }));
    },
    closeLastModal: () => {
      set((state) => ({
        userModals: state.userModals.slice(0, -1), // 마지막 모달 닫기
      }));
    },
    setUserModalInit: () => {
      set({ userModals: [] }); // 모든 모달 초기화
    },
  },
}));

export const storeUserModalActions = () =>
  userModalStore((state) => state.actions);
export const storeUserModal = () => userModalStore((state) => state.userModals);
