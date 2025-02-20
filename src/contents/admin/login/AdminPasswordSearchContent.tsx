import { useState } from 'react';
import AdminInputBox from 'src/components/form/admin/AdminInputBox';
import { useAdminApiCallHandler } from 'src/hooks/useAdminApiCall';
import { apiPostAdminPasswordSearch } from 'src/lib/api/apiPath';
import { storeAdminAlertModalActions } from 'src/lib/store/adminAlertModalStore';
import { storeAdminPopupModalActions } from 'src/lib/store/adminPopupModalStore';
import { PasswordSearchReqParams } from 'src/models/user/PasswordSearchReqParams';
import {
  handleInputNumberCheck,
  handleLengthCheck,
  handleTelNoCheck,
} from 'src/utils/commonHandler';

export default function AdminPasswordSearchContent() {
  //api call
  const apiCall = useAdminApiCallHandler();

  //store: alert modal 상태관리
  const alertModalAction = storeAdminAlertModalActions();
  //store: popup modal 상태관리
  const adminPopupModalAction = storeAdminPopupModalActions();

  const [userId, setUserId] = useState<string>(''); //아이디
  const [userName, setUserName] = useState<string>(''); //이름
  const [userTelNo, setUserTelNo] = useState<string>(''); //휴대전화번호

  const [userIdErr, setUserIdErr] = useState<string>(''); //아이디 Error
  const [userNameErr, setUserNameErr] = useState<string>(''); //이름 Error
  const [userTelNoErr, setUserTelNoErr] = useState<string>(''); //휴대전화번호 Error

  //FN: 취소
  const handleClickCancel = () => {
    adminPopupModalAction.setPopupModalInit();
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
    const params: PasswordSearchReqParams = {
      userId: userId,
      userName: userName,
      userTelNo: userTelNo,
    };
    // API 호출: 비밀번호 찾기 ==================================//
    let result = await apiCall.adminApiCall(
      'POST',
      apiPostAdminPasswordSearch(),
      params
    );
    if (result) {
      alertModalAction.setAdminAlertModal({
        modalOpen: true,
        message: result,
        path: '',
      });
      //pop modal 초기화
      adminPopupModalAction.setPopupModalInit();
    }
  };

  return (
    <div className="popup-content">
      <div className="inner">
        <div className="popup-find-info-box">
          <div className="inp-cont">
            <div className="inp-label">아이디</div>
            <div className="input">
              <AdminInputBox
                inputClassName="t-inp"
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
            <div className="inp-label">이름</div>
            <div className="input">
              <AdminInputBox
                inputClassName="t-inp"
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
            <div className="inp-label">휴대전화번호</div>
            <div className="input">
              <AdminInputBox
                inputClassName="t-inp"
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
            className="btn ty1 c-black w-full"
            onClick={() =>
              handleValidationCheck() && handleClickPasswordSearch()
            }
          >
            <span className="fw-6">확인</span>
          </button>
        </div>

        <div className="gray-box">
          <p>비밀번호 찾기 안내</p>
          <ul className="list c-gray">
            <li>입력한 휴대전화번호로 임시 비밀번호 안내가 발송됩니다.</li>
            <li>
              위 정보로 비밀번호 찾기가 어려운 경우 000로 연락하시기 바랍니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
