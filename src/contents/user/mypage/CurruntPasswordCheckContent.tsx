import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useUserApiCallHandler } from 'src/hooks/useUserApiCall';
import { userMainPath, userMypagePasswordChangePath } from 'src/routes/path';

import ButtonBox from 'src/components/form/ButtonBox';
import InputBox from 'src/components/form/InputBox';

export default function CurruntPasswordCheckContent() {
  const navigate = useNavigate();

  //api call
  const apiCall = useUserApiCallHandler();

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  //FN: 비밀번호 입력
  const handleChangePassword = (e: string) => {
    setPasswordError('');
    setPassword(e);
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

    return true;
  };

  //FN: 비밀번호 확인 API call
  const handleClickCurruntPasswordCheck = async () => {
    //test
    navigate(`/${userMypagePasswordChangePath}`);

    // // API 호출: 조회 ==================================//
    // let result: string = await apiCall.userApiCall(
    //   'GET',
    //   apiPostCurruntPasswordCheck(),
    //   { password: password }
    // );

    // if (result) {
    //   navigate(`/${userMypagePasswordChangePath}`);
    // }
  };
  return (
    <div className="login-wrap">
      <div className="inner-content">
        <div className="pw-change-box">
          <h2 className="ta-c show-pc">비밀번호 변경</h2>
          <div className="dscr">
            <strong>현재 비밀번호를 입력해 주세요.</strong>
            <p>안전한 정보 변경을 위해 현재 비밀번호를 입력해 주세요.</p>
          </div>
          <div className="inp-cont">
            <div className="input">
              <InputBox
                type="password"
                className="t-inp"
                value={password}
                placeholder="비밀번호를 입력해 주세요."
                onChangeCallback={handleChangePassword}
              />
            </div>
            {passwordError && (
              <p className="t-text ty3 c-red fw-4">{passwordError}</p>
            )}
            {/* <p className="t-text ty3 c-red fw-4">입력하신 비밀번호가 올바르지 않습니다. 다시 한번 확인해 주세요.</p> */}
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
                handleValidationCheck() && handleClickCurruntPasswordCheck()
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
