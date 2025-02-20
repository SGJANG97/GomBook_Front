import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useUserApiCallHandler } from 'src/hooks/useUserApiCall';
import { userLoginPath, userMainPath } from 'src/routes/path';

import ButtonBox from 'src/components/form/ButtonBox';
import InputBox from 'src/components/form/InputBox';
import { storeUserModalActions } from 'src/lib/store/userModalStore';
import { handleInputEnNumberCheck } from 'src/utils/commonHandler';

export default function PasswordChangeContent() {
  const navigate = useNavigate();

  //store: user modal 상태관리
  const userModalActions = storeUserModalActions();

  //api call
  const apiCall = useUserApiCallHandler();

  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordCheckError, setPasswordCheckError] = useState<string>('');

  //FN: 비밀번호 입력
  const handleChangePassword = (e: string) => {
    setPasswordError('');
    setPassword(e);
  };

  //FN: 비밀번호 입력
  const handleChangePasswordCheck = (e: string) => {
    setPasswordCheckError('');
    setPasswordCheck(e);
  };

  //FN: 취소
  const handleClickCancel = () => {
    //메인페이지로 이동
    navigate(userMainPath);
  };

  //FN: 비밀번호 확인
  const handleValidationCheck = () => {
    if (password === '') {
      setPasswordError('비밀번호를 입력해 주세요.');
      return false;
    }
    if (!handleInputEnNumberCheck(password)) {
      setPasswordError('6자 이상 영문, 숫자 조합으로 입력해주세요.');
      return false;
    }
    if (passwordCheck === '') {
      setPasswordCheckError('비밀번호를 입력해 주세요.');
      return false;
    }
    if (passwordCheck !== password) {
      setPasswordCheckError(
        '비밀번호가 일치하지 않습니다. 다시 입력해 주세요.'
      );
      return false;
    }

    return true;
  };

  //FN: 비밀번호 변경 API call
  const handleClickPasswordChange = async () => {
    // API 호출: 조회 ==================================//
    // let result: string = await apiCall.userApiCall(
    //   'GET',
    //   apiPostCurruntPasswordCheck(),
    //   { password: password }
    // );

    // if (result) {
    // navigate(`/${}`)
    userModalActions.setUserModal({
      type: 'popup',
      modalOpen: true,
      popClassName: 'popup-alert',
      headerTitle: '비밀번호 변경',
      content: (
        <>
          비밀번호가 변경되었습니다.
          <br />
          다시 로그인해주세요.
          <div className="popup-btn-area ty2">
            <ButtonBox
              className="btn ty8 c-red"
              label="로그인 하기"
              onClickCallback={handleClickLogin}
            />
          </div>
        </>
      ),
    });
    // }
  };

  //FN: 로그인 화면으로
  const handleClickLogin = () => {
    userModalActions.closeLastModal();
    navigate(`/${userLoginPath}`);
  };

  return (
    <div className="login-wrap">
      <div className="inner-content">
        <div className="pw-change-box">
          <h2 className="ta-c show-pc">비밀번호 변경</h2>
          <div className="dscr">
            <strong>변경할 비밀번호를 입력해 주세요.</strong>
            <p>
              안전한 정보 관리를 위해 사용하실 비밀번호를{' '}
              <br className="show-mo" />
              새로 설정해 주세요.
            </p>
          </div>
          <div className="inp-cont">
            <div className="input">
              <InputBox
                type="password"
                className="t-inp"
                placeholder="6자 이상 영문, 숫자 조합"
                value={password}
                onChangeCallback={handleChangePassword}
              />
            </div>
            {passwordError && (
              <p className="t-text ty3 c-red fw-4">{passwordError}</p>
            )}
            {/* <!-- <p className="t-text ty3 c-red fw-4">비밀번호를 입력해 주세요.</p>
                <p className="t-text ty3 c-red fw-4">6자 이상 영문, 숫자 조합으로 입력해 주세요.</p> --> */}
          </div>
          <div className="inp-cont">
            <div className="input">
              <InputBox
                type="password"
                className="t-inp"
                placeholder="비밀번호를 다시 입력해 주세요."
                value={passwordCheck}
                onChangeCallback={handleChangePasswordCheck}
              />
            </div>
            {passwordCheckError && (
              <p className="t-text ty3 c-red fw-4">{passwordCheckError}</p>
            )}
            {/* <!-- <p className="t-text ty3 c-red fw-4">비밀번호를 입력해 주세요.</p>
                <p className="t-text ty3 c-red fw-4">비밀번호가 일치하지 않습니다. 다시 입력해 주세요.</p> --> */}
          </div>
          <div className="btn-box center ty3">
            <ButtonBox
              className="btn ty6 bd-ty1"
              label="취소"
              onClickCallback={handleClickCancel}
            />
            <ButtonBox
              className="btn ty6 c-red"
              label="확인"
              onClickCallback={() =>
                handleValidationCheck() && handleClickPasswordChange()
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
