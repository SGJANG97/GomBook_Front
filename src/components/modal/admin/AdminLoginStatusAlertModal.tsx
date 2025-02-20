import { useNavigate } from 'react-router';
import { adminLoginPath } from 'src/routes/path';

import AdminAlertModal from 'src/components/modal/admin/AdminAlertModal';

interface Props {
  modalOpen: boolean;
  onClickCallback: () => void;
  message?: string;
}

export default function AdminLoginStatusAlertModal(props: Props) {
  const { modalOpen = false, onClickCallback, message } = props;

  const navigate = useNavigate();

  return (
    <>
      {modalOpen && (
        <AdminAlertModal
          headerTitle={'알림'}
          modalOpen={modalOpen}
          modalClose={onClickCallback}
          content={
            message ? <>{message}</> : <>로그인이 필요한 서비스입니다.</>
          }
          okButton={{
            name: '확인',
            btnClassName: 'c-red',
            onClick: () => {
              navigate(adminLoginPath);
            },
          }}
          // cancelButton={{
          //   name: '취소',
          //   onClick: onClickCallback,
          // }}
        />
      )}
    </>
  );
}
