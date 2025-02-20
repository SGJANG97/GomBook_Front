import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { apiPostAdminLogin } from 'src/lib/api/apiPath';
import { adminMainPath } from 'src/routes/path';
import { setLocalStorageAuth } from 'src/utils/localStorage';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { storeAdminPopupModalActions } from 'src/lib/store/adminPopupModalStore';

import AdminPasswordSearchContent from './AdminPasswordSearchContent';
import InputBox from 'src/components/form/InputBox';

import icon_logo from 'src/assets/images/icon_logo.svg';
import { UserAuth } from 'src/models/user/UserAuth';
import { storeAdminUserActions } from 'src/lib/store/adminUserStore';
import { useAdminApiCallHandler } from 'src/hooks/useAdminApiCall';

export default function AdminLoginContent() {
  const navigate = useNavigate();
  const { search } = useLocation();

  //api call
  const apiCall = useAdminApiCallHandler();

  //store: admin user 상태관리
  const adminUserAction = storeAdminUserActions();

  //store: popup modal 상태관리
  const adminPopupModalAction = storeAdminPopupModalActions();

  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //아이디 저장
  // const [idSaveCheck, setIdSaveCheck] = useState<boolean>(false);

  const [idError, setIdError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  // //저장된 아이디 불러오기
  // useEffect(() => {
  //   const id = getLocalStorage('id');
  //   if (id) {
  //     setUsername(id);
  //     setIdSaveCheck(true);
  //   }
  // }, []);

  // //FN: 아이디 저장
  // const handleChangeIdSave = (e: ChangeEvent<HTMLInputElement>) => {
  //   const thisChecked = e.target.checked;
  //   setIdSaveCheck(thisChecked);

  //   if (thisChecked) {
  //     setLocalStorage('id', username);
  //   } else {
  //     removeStorage('id');
  //   }
  // };

  //FN: 필수 사항 체크
  const handleValidation = () => {
    if (userId === '') {
      setIdError('아이디를 입력해 주세요');
      return false;
    }
    if (password === '') {
      setPasswordError('비밀번호를 입력해 주세요.');
      return false;
    }

    return true;
  };

  //FN: 로그인
  const handleClickLogin = async () => {
    //아이디 저장
    // if (idSaveCheck) {
    //   setLocalStorage('id', username);
    // }

    const params = {
      userId: userId,
      password: password,
      // loginStatusKeepCheck: 'N',
    };

    // API 호출: 로그인 ==================================//
    let result = await apiCall.adminApiCall(
      'POST',
      apiPostAdminLogin(),
      params
    );
    if (result) {
      //로컬 스토리지 저장
      setLocalStorageAuth('adminAuth', result, 'admin');
      const adminUserInfo = localStorage.getItem('adminUserInfo') || '';
      const adminUser: UserAuth = JSON.parse(adminUserInfo);
      //user 스토어 저장
      adminUserAction.setAdminUser(adminUser);
      //로그인 전 경로로 이동
      const redirectPath = new URLSearchParams(search).get('redirectPath');
      navigate(redirectPath || adminMainPath);
    }
  };

  //FN: 비밀번호 찾기
  const handlePasswordSearch = handleClickPreventDefault(() => {
    adminPopupModalAction.setPopupModal({
      modalOpen: true,
      popSize: { width: '450px', height: '600px' },
      title: '비밀번호 찾기',
      content: <AdminPasswordSearchContent />,
    });
  });

  return (
    <div className="login-wrap">
      <div className="inner-content">
        <div className="logo">
          <img src={icon_logo} alt="로고" />
          <h2>Admin</h2>
        </div>
        <div className="login-box">
          <div className="inp-cont">
            <div className="input">
              <InputBox
                className="t-inp"
                value={userId}
                onChangeCallback={(e) => {
                  if (e) {
                    setIdError('');
                  }
                  setUserId(e);
                }}
                placeholder="아이디를 입력해 주세요."
              />
            </div>
            {idError && <p className="t-text ty3 c-red fw-4">{idError}</p>}
          </div>
          <div className="inp-cont">
            <div className="input">
              <InputBox
                type="password"
                className="t-inp"
                value={password}
                onChangeCallback={(e) => {
                  if (e) {
                    setPasswordError('');
                  }
                  setPassword(e);
                }}
                onKeyDownCallback={() => {
                  handleValidation() && handleClickLogin();
                }}
                placeholder="비밀번호를 입력해 주세요."
              />
            </div>
            {passwordError && (
              <p className="t-text ty3 c-red fw-4">{passwordError}</p>
            )}
          </div>
        </div>
        {/* <div className="login-save-box">
          <div className="chkbox">
            <label>
              <input
                type="checkbox"
                // onChange={handleChangeIdSave}
                // checked={idSaveCheck}
              />
              <span className="text">아이디 저장</span>
            </label>
          </div>
        </div> */}
        <div className="btn-area">
          <Link
            to=""
            className="btn ty1 c-black w-full"
            onClick={() => handleValidation() && handleClickLogin()}
          >
            <span>로그인</span>
          </Link>
        </div>
        <div className="login-link-box">
          <Link to="" onClick={handlePasswordSearch}>
            비밀번호 찾기
          </Link>
        </div>
        <p className="copyright">
          Copyright ⓒ 2024 쉐프스푸드 All rights reserved.opyright
        </p>
      </div>
    </div>
  );
}
