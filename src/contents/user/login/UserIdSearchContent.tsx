import { useState } from 'react';
import { apiPostUserIdSearch } from 'src/lib/api/apiPath';
import {
  handleInputNumberCheck,
  handleLengthCheck,
  handleTelNoCheck,
} from 'src/utils/commonHandler';
import { storeUserModalActions } from 'src/lib/store/userModalStore';

import InputBox from 'src/components/form/InputBox';
import UserIdSearchResultContent from 'src/contents/user/login/UserIdSearchResultContent';
import { useUserApiCallHandler } from 'src/hooks/useUserApiCall';

interface Props {
  onClickCallback?: (data: string) => void;
}

export default function UserIdSearchContent(props: Props) {
  const { onClickCallback } = props;

  //api call
  const apiCall = useUserApiCallHandler();

  //store: user modal 상태관리
  const userModalAction = storeUserModalActions();

  const [userCompanyNo, setUserCompanyNo] = useState<string>(''); //사업자등록번호
  const [ordStaffName, setOrdStaffName] = useState<string>(''); //발주담당자명
  const [ordStaffTelNo, setOrdStaffTelNo] = useState<string>(''); //발주담당자번호

  const [userCompanyNoErr, setUserCompanyNoErr] = useState<string>(''); //사업자등록번호 Error
  const [ordStaffNameErr, setOrdStaffNameErr] = useState<string>(''); //발주담당자명 Error
  const [ordStaffTelNoErr, setOrdStaffTelNoErr] = useState<string>(''); //발주담당자번호 Error

  //FN: 취소
  const handleClickCancel = () => {
    userModalAction.closeLastModal();
  };
  //FN: 필수 항목 체크
  const handleValidationCheck = () => {
    //사업자등록번호
    if (userCompanyNo === '') {
      setUserCompanyNoErr('사업자등록번호를 입력해 주세요.');
      return false;
    }
    //사업자등록번호 자릿수 체크
    if (userCompanyNo.length < 10) {
      setUserCompanyNoErr('입력하신 사업자등록번호가 올바르지 않습니다.');
      return false;
    }
    //발주담당자명
    if (ordStaffName === '') {
      setOrdStaffNameErr('이름을 입력해 주세요.');
      return false;
    }
    //발주담당자번호
    if (ordStaffTelNo === '') {
      setOrdStaffTelNoErr('휴대폰번호를 입력해 주세요.');
      return false;
    }
    //휴대전화번호 정규식
    if (!handleTelNoCheck(ordStaffTelNo)) {
      setOrdStaffTelNoErr('입력하신 휴대폰번호가 올바르지 않습니다.');
      return false;
    }

    return true;
  };

  //FN: 아이디 찾기
  const handleClickPasswordSearch = async () => {
    const params = {
      userCompanyNo: '11', //userCompanyNo,
      ordStaffName: '김민수', //ordStaffName,
      ordStaffTelNo: '01011111111', //ordStaffTelNo,
    };
    // API 호출: 아이디 찾기 ==================================//
    let result: { list: { userId: string; recvPlaceName: string }[] } =
      await apiCall.userApiCall('POST', apiPostUserIdSearch(), params);

    if (result) {
      //pop modal 닫기
      userModalAction.closeLastModal();
      userModalAction.setUserModal({
        type: 'popup',
        modalOpen: true,
        headerTitle: '아이디 찾기 결과',
        content: (
          <UserIdSearchResultContent
            userList={result.list}
            onClickCallback={onClickCallback}
          />
        ),
      });
    }
  };

  return (
    <div className="inner">
      <div className="popup-find-info-box">
        <div className="dscr">
          <strong>아이디가 기억나지 않으세요?</strong>
          <p>아래에서 아이디 찾기를 시도해 주세요.</p>
        </div>

        <div className="inp-cont">
          <div className="inp-label">사업자등록번호</div>
          <div className="input">
            <InputBox
              className="t-inp"
              value={userCompanyNo}
              placeholder="숫자만 입력해 주세요."
              onChangeCallback={(e) => {
                setUserCompanyNoErr('');

                //자릿수 체크
                if (handleLengthCheck(e, 10)) {
                  //숫자 체크
                  setUserCompanyNo(handleInputNumberCheck(e));
                }
              }}
            />
          </div>
          {userCompanyNoErr && (
            <p className="t-text ty3 c-red fw-4">{userCompanyNoErr}</p>
          )}
        </div>

        <div className="inp-cont">
          <div className="inp-label">발주 담당자 이름</div>
          <div className="input">
            <InputBox
              className="t-inp"
              value={ordStaffName}
              placeholder="이름을 입력해 주세요."
              onChangeCallback={(e) => {
                setOrdStaffName(e);
                setOrdStaffNameErr('');
              }}
            />
          </div>
          {ordStaffNameErr && (
            <p className="t-text ty3 c-red fw-4">{ordStaffNameErr}</p>
          )}
        </div>

        <div className="inp-cont">
          <div className="inp-label">발주 담당자 휴대폰번호</div>
          <div className="input">
            <InputBox
              className="t-inp"
              value={ordStaffTelNo}
              placeholder="숫자만 입력해 주세요."
              onChangeCallback={(e) => {
                setOrdStaffTelNoErr('');

                //자릿수 체크
                if (handleLengthCheck(e, 11)) {
                  //숫자 체크
                  setOrdStaffTelNo(handleInputNumberCheck(e));
                }
              }}
            />
          </div>
          {ordStaffTelNoErr && (
            <p className="t-text ty3 c-red fw-4">{ordStaffTelNoErr}</p>
          )}
        </div>
      </div>

      <div className="popup-btn-area">
        <button
          type="button"
          className="btn ty1 bd-ty1"
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
