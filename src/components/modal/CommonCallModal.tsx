import { useNavigate } from 'react-router';
import {
  storeAdminAlertModal,
  storeAdminAlertModalActions,
} from 'src/lib/store/adminAlertModalStore';
import {
  storeAdminConfirmModal,
  storeAdminConfirmModalActions,
} from 'src/lib/store/adminConfirmModalStore';
import {
  AdminPopupModalProps,
  storeAdminPopupModal,
  storeAdminPopupModalActions,
} from 'src/lib/store/adminPopupModalStore';
import {
  storeUserModal,
  storeUserModalActions,
  UserModalProps,
} from 'src/lib/store/userModalStore';

import AdminAlertModal from 'src/components/modal/admin/AdminAlertModal';
import AdminPopupModal from 'src/components/modal/admin/AdminPopupModal';
import PopupModal from 'src/components/modal/PopupModal';

//팝업 호출
export default function CommonCallModal() {
  const navigate = useNavigate();

  //store: admin alert modal 상태관리
  const adminAlertModal = storeAdminAlertModal();
  const adminAlertModalAction = storeAdminAlertModalActions();
  //FN: alert modal 초기화
  const handleAdminAlertModalClose = () => {
    adminAlertModal?.path && navigate(adminAlertModal?.path || '');
    adminAlertModalAction.setAdminAlertModalInit();
  };

  //store: admin confirm modal 상태관리
  const adminConfirmModal = storeAdminConfirmModal();
  const adminConfirmModalAction = storeAdminConfirmModalActions();
  //FN: confirm modal 초기화
  const handleAdminConfirmModalClose = () => {
    adminConfirmModalAction.setAdminConfirmModalInit();
  };

  //store: admin popup modal 상태관리
  const adminPopupModal = storeAdminPopupModal();
  const adminPopupModalAction = storeAdminPopupModalActions();
  //FN: popup modal 닫기
  const handleAdminPopupModalClose = (index: number) => {
    adminPopupModalAction.closeLastModal();
  };

  //store: user modal 상태관리
  const userModals = storeUserModal();
  const userModalActions = storeUserModalActions();
  //FN: modal 닫기
  const handleUserModalClose = (index: number) => {
    userModals[index]?.path && navigate(userModals[index]?.path || '');
    userModalActions.closeLastModal();
  };

  return (
    <>
      {/* admin Alert */}
      {adminAlertModal.modalOpen && (
        <AdminAlertModal
          modalOpen={adminAlertModal.modalOpen}
          modalClose={handleAdminAlertModalClose}
          content={adminAlertModal.message}
          okButton={{ name: '확인', onClick: handleAdminAlertModalClose }}
        />
      )}

      {/* admin confirm Alert */}
      {adminConfirmModal.modalOpen && (
        <AdminAlertModal
          modalOpen={adminConfirmModal.modalOpen}
          modalClose={handleAdminConfirmModalClose}
          content={adminConfirmModal.message}
          okButton={{
            name: '확인',
            btnClassName: 'c-red',
            onClick: adminConfirmModal.onClickOkCallback,
          }}
          cancelButton={{
            name: '취소',
            onClick: handleAdminConfirmModalClose,
          }}
        />
      )}

      {/* admin popup modal */}
      {adminPopupModal.map(
        (popupModal: AdminPopupModalProps, index: number) => (
          <AdminPopupModal
            key={index}
            popSize={popupModal.popSize}
            headerTitle={popupModal.title}
            modalOpen={popupModal.modalOpen}
            modalClose={() => handleAdminPopupModalClose(index)}
            content={popupModal.content}
            // tempButton={{ name: '임시저장', onClick: () => {} }}
            // okButton={{ name: '등록', onClick: () => {} }}
          />
        )
      )}

      {/* user modal */}
      {userModals.map((userModal: UserModalProps, index: number) => (
        <PopupModal
          key={index}
          type={userModal.type}
          headerTitle={userModal.headerTitle}
          headerTitleClassName={userModal.headerTitleClassName}
          modalOpen={userModal.modalOpen}
          modalClose={() => handleUserModalClose(index)}
          popClassName={
            userModal.type === 'popup'
              ? userModal.popClassName
                ? userModal.popClassName
                : 'popup-full-wrap'
              : 'popup-alert'
          }
          content={userModal.content}
          okButton={{
            name: '확인',
            btnClassName: 'c-red',
            onClick: () =>
              userModal.onClickOkCallback?.() || handleUserModalClose(index),
          }}
          cancelButton={{
            name: '취소',
            onClick: () =>
              userModal.onClickCancelCallback?.() ||
              handleUserModalClose(index),
          }}
        />
      ))}
    </>
  );
}
