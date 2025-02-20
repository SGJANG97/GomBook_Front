import { useState } from 'react';
import InputBox from 'src/components/form/InputBox';
import { useUserApiCallHandler } from 'src/hooks/useUserApiCall';
import { apiPostUserPasswordSearch } from 'src/lib/api/apiPath';
import {
  storeUserModal,
  storeUserModalActions,
} from 'src/lib/store/userModalStore';
import {
  handleInputNumberCheck,
  handleLengthCheck,
  handleTelNoCheck,
} from 'src/utils/commonHandler';

export default function UserPasswordSearchContent() {
  //api call
  const apiCall = useUserApiCallHandler();

  //store: modal 상태관리
  const userModal = storeUserModal();
  const userModalAction = storeUserModalActions();

  const [userId, setUserId] = useState<string>(''); //아이디
  const [userName, setUserName] = useState<string>(''); //이름
  const [userTelNo, setUserTelNo] = useState<string>(''); //휴대전화번호

  const [userIdErr, setUserIdErr] = useState<string>(''); //아이디 Error
  const [userNameErr, setUserNameErr] = useState<string>(''); //이름 Error
  const [userTelNoErr, setUserTelNoErr] = useState<string>(''); //휴대전화번호 Error

  //FN: 취소
  const handleClickCancel = () => {
    userModalAction.closeLastModal();
  };
  //FN: 필수 항목 체크
  const handleValidationCheck = () => {
    //아이디
    if (userId === '') {
      setUserIdErr('아이디를 입력해 주세요.');
      return false;
    }
    //이름
    if (userName === '') {
      setUserNameErr('이름을 입력해 주세요.');
      return false;
    }
    //휴대전화번호
    if (userTelNo === '') {
      setUserTelNoErr('휴대폰번호를 입력해 주세요.');
      return false;
    }
    //휴대전화번호 정규식
    if (!handleTelNoCheck(userTelNo)) {
      setUserTelNoErr('입력하신 휴대폰번호가 올바르지 않습니다.');
      return false;
    }

    return true;
  };

  //FN: 비밀번호 찾기
  const handleClickPasswordSearch = async () => {
    const params = {
      userId: userId,
      ordStaffName: userName,
      ordStaffTelNo: userTelNo,
    };
    console.log(params);
    // API 호출: 비밀번호 찾기 ==================================//
    let result = await apiCall.userApiCall(
      'POST',
      apiPostUserPasswordSearch(),
      params
    );

    if (result) {
      userModalAction.setUserModal({
        type: 'alert',
        headerTitle: '알림',
        modalOpen: true,
        content: result,
        onClickOkCallback: userModalAction.setUserModalInit,
      });
    }
  };

  return (
    <div className="inner">
      <div className="popup-find-info-box">
        <div className="dscr">
          <strong>비밀번호가 기억나지 않으세요?</strong>
          <p>아래에서 비밀번호 찾기를 시도해 주세요.</p>
        </div>

        <div className="inp-cont">
          <div className="inp-label">아이디</div>
          <div className="input">
            <InputBox
              className="t-inp"
              value={userId}
              placeholder="아이디를 입력해 주세요."
              onChangeCallback={(e) => {
                setUserId(e);
                setUserIdErr('');
              }}
            />
          </div>
          {userIdErr && <p className="t-text ty3 c-red fw-4">{userIdErr}</p>}
        </div>

        <div className="inp-cont">
          <div className="inp-label">발주 담당자 이름</div>
          <div className="input">
            <InputBox
              className="t-inp"
              value={userName}
              placeholder="이름을 입력해 주세요."
              onChangeCallback={(e) => {
                setUserName(e);
                setUserNameErr('');
              }}
            />
          </div>
          {userNameErr && (
            <p className="t-text ty3 c-red fw-4">{userNameErr}</p>
          )}
        </div>

        <div className="inp-cont">
          <div className="inp-label">발주 담당자 휴대폰번호</div>
          <div className="input">
            <InputBox
              className="t-inp"
              value={userTelNo}
              placeholder="숫자만 입력해 주세요."
              onChangeCallback={(e) => {
                setUserTelNoErr('');
                //자릿수 체크
                if (handleLengthCheck(e, 11)) {
                  //숫자 체크
                  setUserTelNo(handleInputNumberCheck(e));
                }
              }}
            />
          </div>
          {userTelNoErr && (
            <p className="t-text ty3 c-red fw-4">{userTelNoErr}</p>
          )}
        </div>
      </div>
      <div className="popup-btn-area">
        <button
          type="button"
          className="btn ty1 bd-ty1"
          style={{ marginRight: '0.5rem' }}
          onClick={handleClickCancel}
        >
          <span className="fw-6">취소</span>
        </button>
        <button
          type="button"
          className="btn ty1 c-red"
          onClick={() => handleValidationCheck() && handleClickPasswordSearch()}
        >
          <span className="fw-6">확인</span>
        </button>
      </div>
    </div>
  );
}
