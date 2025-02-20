import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router';

import { apiPostUserLogin } from 'src/lib/api/apiPath';
import {
  getLocalStorage,
  removeStorage,
  setLocalStorage,
  setLocalStorageAuth,
} from 'src/utils/localStorage';
import {
  userReqBoardFaqPath,
  userMainPath,
  // userMemberJoinInfoPath
} from 'src/routes/path';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { storeUserModalActions } from 'src/lib/store/userModalStore';
import { useUserApiCallHandler } from 'src/hooks/useUserApiCall';
import { storeUserActions } from 'src/lib/store/userStore';
import { UserAuth } from 'src/models/user/UserAuth';

import UserIdSearchContent from './UserIdSearchContent';
import UserPasswordSearchContent from 'src/contents/user/login/UserPasswordSearchContent';
import InputBox from 'src/components/form/InputBox';

// import icon_logo from 'src/assets/images/icon_logo.svg';
import icon_logo from 'src/assets/images/icon_logo1.png';

export default function UserLoginContent() {
  const { search } = useLocation();
  const navigate = useNavigate();

  //api call
  const apiCall = useUserApiCallHandler();

  //store: user 상태관리
  const userAction = storeUserActions();
  //store: user modal 상태관리
  const userModalAction = storeUserModalActions();

  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //로그인 상태 유지
  const [loginStayYn, setLoginStayYn] = useState<string>('N');
  //아이디 저장
  const [idSaveCheck, setIdSaveCheck] = useState<boolean>(false);
  const [idError, setIdError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  //저장된 아이디 불러오기
  //저장된 로그인 상태 불러오기
  useEffect(() => {
    const id = getLocalStorage('id');
    if (id) {
      setUserId(id);
      setIdSaveCheck(true);
    }
    const loginStatusKeep = getLocalStorage('loginStatusKeep');
    if (loginStatusKeep && loginStatusKeep === 'Y') {
      setLoginStayYn('Y');
    }
  }, []);

  //FN: 로그인 상태 유지
  const handleChangeLoginStatusKeep = (e: ChangeEvent<HTMLInputElement>) => {
    const thisChecked = e.target.checked;
    setLoginStayYn(thisChecked ? 'Y' : 'N');

    if (thisChecked) {
      setLocalStorage('loginStatusKeep', 'Y');
    } else {
      removeStorage('loginStatusKeep');
    }
  };

  //FN: 아이디 저장
  const handleChangeIdSave = (e: ChangeEvent<HTMLInputElement>) => {
    const thisChecked = e.target.checked;
    setIdSaveCheck(thisChecked);

    if (thisChecked) {
      setLocalStorage('id', userId);
    } else {
      removeStorage('id');
    }
  };

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

  //로그인
  const handleClickLogin = async () => {
    if (userId === '') {
      setIdError('아이디를 입력해 주세요');
      return false;
    }
    if (password === '') {
      setPasswordError('비밀번호를 입력해 주세요.');
      return false;
    }

    //아이디 저장
    if (idSaveCheck) {
      setLocalStorage('id', userId);
    }

    const params = {
      userId: userId,
      password: password,
      loginStayYn: loginStayYn,
    };

    // API 호출: 로그인 ==================================//
    const result = await apiCall.userApiCall(
      'POST',
      apiPostUserLogin(),
      params,
      '아이디/비밀번호 오류'
    );

    if (result) {
      //로컬 스토리지 저장
      setLocalStorageAuth('userAuth', result);
      const userInfo = localStorage.getItem('userInfo') || '';
      const user: UserAuth = JSON.parse(userInfo);
      //user 스토어 저장
      userAction.setUser(user);
      //로그인 전 경로로 이동
      const redirectPath = new URLSearchParams(search).get('redirectPath');
      navigate(redirectPath || userMainPath);
    }
  };

  // //FN: 아이디 찾기
  // const handleUserIdSearch = handleClickPreventDefault(() => {
  //   userModalAction.setUserModal({
  //     type: 'popup',
  //     modalOpen: true,
  //     headerTitle: '아이디 찾기',
  //     content: <UserIdSearchContent onClickCallback={(e) => setUserId(e)} />,
  //   });
  // });
  //
  // //FN: 비밀번호 찾기
  // const handlePasswordSearch = handleClickPreventDefault(() => {
  //   userModalAction.setUserModal({
  //     type: 'popup',
  //     modalOpen: true,
  //     headerTitle: '비밀번호 찾기',
  //     content: <UserPasswordSearchContent />,
  //   });
  // });

  return (
    <div className="login-wrap">
      <div className="inner-content">
        <div className="logo">
          <img src={icon_logo} alt="로고" />
        </div>
        <div className="login-box">
          <div className="inp-cont">
            <InputBox
                className="t-inp"
                value={userId}
                onChangeCallback={(e) => {
                  if (e) {
                    setIdError('');
                  }
                  setUserId(e);
                }}
                onKeyDownCallback={() => {
                  handleValidation() && handleClickLogin();
                }}
                placeholder="아이디를 입력해 주세요."
            />
            <div className="input">
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
        <div className="login-save-box">
          <div className="chkbox">
            <label>
              <input
                type="checkbox"
                onChange={handleChangeLoginStatusKeep}
                checked={loginStayYn === 'Y' ? true : false}
              />
              <span className="text">로그인 상태유지</span>
            </label>
          </div>
          <div className="chkbox">
            <label>
              <input
                type="checkbox"
                onChange={handleChangeIdSave}
                checked={idSaveCheck}
              />
              <span className="text">아이디 저장</span>
            </label>
          </div>
        </div>
        <div className="btn-area">
          <Link
            to=""
            className="btn ty1 c-black w-full"
            onClick={handleClickLogin}
          >
            <span>로그인</span>
          </Link>
        </div>
        {/*<div className="login-link-box">*/}
        {/*  <Link to="" onClick={handleUserIdSearch}>*/}
        {/*    아이디 찾기*/}
        {/*  </Link>*/}
        {/*  <Link to="" onClick={handlePasswordSearch}>*/}
        {/*    비밀번호 찾기*/}
        {/*  </Link>*/}
        {/*</div>*/}
        {/*<div className="join-link-box">*/}
        {/*  <p>*/}
        {/*    쉐프스푸드가 처음이신가요?{' '}*/}
        {/*    <Link to={`/${userReqBoardFaqPath}?faqId=`}>가입안내</Link>*/}
        {/*  </p>*/}
        {/*</div>*/}
        <p className="copyright">
          Copyright ⓒ 2025 대한제분 정보혁신팀
          <br/>
          All rights reserved.copyright
        </p>
      </div>
    </div>
  );
}