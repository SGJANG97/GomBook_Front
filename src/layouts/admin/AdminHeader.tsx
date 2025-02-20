import { Link } from 'react-router-dom';

import { removeAuth } from 'src/utils/localStorage';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import {
  storeAdminUser,
  storeAdminUserActions,
} from 'src/lib/store/adminUserStore';
import { storeAdminAlertModalActions } from 'src/lib/store/adminAlertModalStore';
import { storeAdminConfirmModalActions } from 'src/lib/store/adminConfirmModalStore';
import {
  adminLoginPath,
  adminMainPath,
  adminMypagePath,
} from 'src/routes/path';

import logo from 'src/assets/images/icon_logo_w.svg';

export default function AdminHeader() {
  //store: 사용자 상태관리
  const isAdminUser = storeAdminUser();
  const adminUserAction = storeAdminUserActions();

  //store: admin alert modal 상태관리
  const alertModalAction = storeAdminAlertModalActions();
  //store: admin confirm modal 상태관리
  const confirmModalAction = storeAdminConfirmModalActions();

  //FN: 로그아웃 확인
  const handleClickLogout = handleClickPreventDefault(() => {
    confirmModalAction.setAdminConfirmModal({
      modalOpen: true,
      message: '로그아웃 하시겠습니까?',
      onClickOkCallback: handleLogout,
    });
  });

  //FN: 로그아웃 처리
  const handleLogout = handleClickPreventDefault(async () => {
    //confirm 초기화
    confirmModalAction.setAdminConfirmModalInit();

    // await APIPost(apiPostAdminLogout()).then((res) => {
    //   if (res.code === 200) {
    adminUserAction.setAdminUser(null);
    removeAuth('admin');

    alertModalAction.setAdminAlertModal({
      modalOpen: true,
      message: '로그아웃 되었습니다.',
      //로그인 화면으로
      path: `${adminLoginPath}`,
    });
    //   }
    // });
  });

  return (
    <>
      <header className="admin-header">
        <div className="admin-header-top">
          <div className="admin-header-left">
            <h1>
              <Link to={adminMainPath}>
                <img src={logo} alt="" />
              </Link>
            </h1>
          </div>

          <div className="admin-sub-header">
            <Link to=""></Link>
            <h2>@@admin-title</h2>
          </div>

          <div className="admin-header-right">
            {isAdminUser?.userName ? (
              <>
                <Link
                  to={`${adminMainPath}/${adminMypagePath}`}
                  className="user"
                >
                  <span className="name">{isAdminUser.userName}</span>
                </Link>
                <Link to="" className="log" onClick={handleClickLogout}>
                  <span>로그아웃</span>
                </Link>
              </>
            ) : (
              <Link to={adminLoginPath}>
                <span className="name">로그인</span>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
