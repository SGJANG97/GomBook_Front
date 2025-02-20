import { MutableRefObject, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { FileInfoBase64 } from 'src/models/file/fileInfoBase64';
import { userMainPath } from 'src/routes/path';

import InputBox from 'src/components/form/InputBox';
import SelectBox from 'src/components/form/SelectBox';
import TextareaBox from 'src/components/form/TextareaBox';
import DaumAddressSearchBox from 'src/components/form/DaumAddressSearchBox';
import { storeUserModalActions } from 'src/lib/store/userModalStore';
import {
  handleInputNumberCheck,
  handleLengthCheck,
  handleTelNoCheck,
  handleTelNoFormat,
} from 'src/utils/commonHandler';
import { useUserApiCallHandler } from 'src/hooks/useUserApiCall';
import FileBoxBase64 from 'src/components/form/FileBoxBase64';
import { MemberJoinReqParams } from 'src/models/member/MemberJoinReqParams';
import { apiPostMemberJoin } from 'src/lib/api/apiPath';

export default function MemberJoinContent() {
  const navigate = useNavigate();

  //api call
  const apiCall = useUserApiCallHandler();

  //store: modal 상태관리
  const userModalAction = storeUserModalActions();

  //focus
  const askCompanyNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const askCompanyNoRef = useRef() as MutableRefObject<HTMLInputElement>;
  const askCompanyFullAddrRef = useRef() as MutableRefObject<HTMLInputElement>;
  const askCompanyAddr2Ref = useRef() as MutableRefObject<HTMLInputElement>;
  const askNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const askTelNoRef = useRef() as MutableRefObject<HTMLInputElement>;
  const askNoteRef = useRef() as MutableRefObject<HTMLInputElement>;

  //data
  const [askCompanyName, setAskCompanyName] = useState<string>(''); //상호명
  const [askJobClass, setAskJobClass] = useState<string>(''); //업종(음식점, 그로셔리, 도매유통, 온라인몰 구분, 디폴드 음식점)
  const [askCompanyNo, setAskCompanyNo] = useState<string>(''); //사업자등록번호
  const [askCompanyZipNo, setAskCompanyZipNo] = useState<string>(''); //우편번호
  const [askCompanyFullAddr, setAskCompanyFullAddr] = useState<string>(''); //(우편번호)기본주소
  const [askCompanyAddr1, setAskCompanyAddr1] = useState<string>(''); //기본주소
  const [askCompanyAddr2, setAskCompanyAddr2] = useState<string>(''); //상세주소
  const [askName, setAskName] = useState<string>(''); //문의자 성함
  const [askTelNo, setAskTelNo] = useState<string>(''); //문의자 연락처
  const [askNote, setAskNote] = useState<string>(''); //문의 내용
  const [askPath, setAskPath] = useState<string>(''); //문의 경로(기존거래, 지인소개, 온라인 검색, 광고매체 구분, 디폴트 기존거래)
  const [newFiles, setNewFiles] = useState<FileInfoBase64[]>([]); //사업자 등록증 (File) 최대 3개

  const [askCompanyNameErr, setAskCompanyNameErr] = useState<string>(''); //상호명 오류 메시지
  // const [askJobClassErr, setAskJobClassErr] = useState<string>(''); //업종(음식점, 그로셔리, 도매유통, 온라인몰 구분, 디폴드 음식점) 오류 메시지
  const [askCompanyErr, setAskCompanyErr] = useState<string>(''); //사업자 소재지 오류 메시지
  const [askNameErr, setAskNameErr] = useState<string>(''); //문의자 성함 오류 메시지
  const [askTelNoErr, setAskTelNoErr] = useState<string>(''); //문의자 연락처 오류 메시지
  const [askNoteErr, setAskNoteErr] = useState<string>(''); //문의 내용 오류 메시지
  // const [askPathErr, setAskPathErr] = useState<string>(''); //문의 경로(기존거래, 지인소개, 온라인 검색, 광고매체 구분, 디폴트 기존거래) 오류 메시지
  const [newFilesErr, setNewFilesErr] = useState<string>(''); //사업자 등록증 (File) 최대 3개 오류 메시지

  //FN: 필수 항목 체크
  const handleValidationCheck = () => {
    if (askCompanyName === '') {
      setAskCompanyNameErr('상호명을 입력해 주세요.');
      askCompanyNameRef.current.focus();
      return false;
    }
    if (askCompanyNo === '') {
      setAskCompanyErr('사업자등록번호를 입력해 주세요.');
      askCompanyNoRef.current.focus();
      return false;
    }
    //사업자등록번호 자릿수 체크
    if (askCompanyNo.length < 10) {
      setAskCompanyErr('입력하신 사업자등록번호가 올바르지 않습니다.');
      askCompanyNoRef.current.focus();
      return false;
    }
    if (askCompanyAddr1 === '') {
      setAskCompanyErr('사업자 기본 주소를 입력해 주세요.');
      askCompanyFullAddrRef.current.focus();
      return false;
    }
    if (askCompanyAddr2 === '') {
      setAskCompanyErr('사업자 상세 주소를 입력해 주세요.');
      askCompanyAddr2Ref.current.focus();
      return false;
    }
    if (askName === '') {
      setAskNameErr('문의자 성함을 입력해 주세요.');
      askNameRef.current.focus();
      return false;
    }
    if (askTelNo === '') {
      setAskTelNoErr('문의자 연락처를 입력해 주세요.');
      askTelNoRef.current.focus();
      return false;
    }
    //휴대전화번호 정규식
    if (!handleTelNoCheck(askTelNo)) {
      setAskTelNoErr('입력하신 휴대폰번호가 올바르지 않습니다.');
      return false;
    }
    if (askNote === '') {
      setAskNoteErr('문의 내용을 입력해 주세요.');
      askNoteRef.current.focus();
      return false;
    }
    if (newFiles.length <= 0) {
      setNewFilesErr('사업자등록증을 업로드해 주세요.');
      return false;
    }

    return true;
  };

  //FN: 회원가입 확인
  const handleClickMemberJoinConfirm = () => {
    userModalAction.setUserModal({
      type: 'confirm',
      headerTitle: '회원가입 요청',
      modalOpen: true,
      content: '회원가입 요청하시겠습니까?',
      onClickOkCallback: handleClickMemberJoin,
    });
  };

  //FN: 회원가입 요청
  const handleClickMemberJoin = async () => {
    //modal 닫기
    userModalAction.closeLastModal();

    const params: MemberJoinReqParams = {
      askCompanyName: askCompanyName,
      askJobClass: askJobClass,
      askCompanyAddr1: askCompanyAddr1,
      askCompanyAddr2: askCompanyAddr2,
      askCompanyZipNo: askCompanyZipNo,
      askCompanyNo: askCompanyNo,
      askName: askName,
      askTelNo: askTelNo,
      askNote: askNote,
      askPath: askPath,
      pcFiles: newFiles,
    };

    console.log(params);
    // const formData = new FormData();

    // formData.append('askCompanyName', askCompanyName); //문의상호명
    // formData.append('askJobClass', askJobClass); //문의업종
    // formData.append('askCompanyAddr1', askCompanyAddr1); //문의자 본사 기본 주소
    // formData.append('askCompanyAddr2', askCompanyAddr2); //문의자 본사 상세 주소
    // formData.append('askcompanyZipNo', askCompanyZipNo); //문의자 본사 우편번호
    // formData.append('askCompanyNo', askCompanyNo); //문의자 사업자등록번호
    // formData.append('askName', askName); //문의자 성함
    // formData.append('askTelNo', askTelNo); //문의자 연락처
    // formData.append('askNote', askNote); //문의자 내용
    // formData.append('askPath', askPath); //문의자 경로

    // //신규 파일 추가
    // if (newFiles.length > 0) {
    //   newFiles.forEach((fileInfo: FileInfoBase64) => {
    //     if (fileInfo.files) {
    //       // formData.append('files', fileInfo.files);
    //     }
    //   });
    // }

    // API 호출: 등록 ==================================//
    let result = await apiCall.userApiCall(
      'FILEPOST',
      apiPostMemberJoin(),
      params
      //formData
    );

    if (result) {
      userModalAction.setUserModal({
        type: 'alert',
        headerTitle: '회원가입 요청 완료',
        modalOpen: true,
        content: (
          <>
            회원가입 요청이 완료되었습니다.
            <br />
            {handleTelNoFormat(askTelNo)} 위 연락처에서 고객님께 연락드릴
            예정이오니 참고 바랍니다.
          </>
        ),
        path: userMainPath,
      });
    }
  };

  //FN: 회원가입 취소
  const handleClickCancel = () => {
    navigate(`${userMainPath}`);
  };

  //FN: 주소 검색
  const handleClickAddressSearch = () => {
    userModalAction.setUserModal({
      type: 'popup',
      headerTitle: '주소 입력',
      modalOpen: true,
      content: <DaumAddressSearchBox onClickCallback={handleSetAddress} />,
    });
  };

  //FN: 주소 정보
  const handleSetAddress = (addr: string, zipCode: string) => {
    //askCompany modal 닫기
    userModalAction.closeLastModal();
    setAskCompanyAddr1(addr);
    setAskCompanyZipNo(zipCode);
    setAskCompanyFullAddr(`(${zipCode}) ${addr}`);
    setAskCompanyErr('');
  };

  return (
    <section className="join-wrap">
      <article className="inner-content">
        {/* <!-- PC ONLY--> */}
        <div className="sub-title-box ty2 show-pc">
          <h2 className="title-t ty2">회원가입</h2>
        </div>
        {/* <!-- PC ONLY--> */}
        <div className="join-box tbl-wrap">
          <div className="tbl ty1">
            <div className="row">
              <div className="tit">
                <p>상호명</p>
              </div>
              <div className="con">
                <div className="input-cont">
                  <InputBox
                    ref={askCompanyNameRef}
                    value={askCompanyName}
                    className="t-inp"
                    placeholder="상호명을 입력해 주세요."
                    onChangeCallback={(e) => {
                      setAskCompanyName(e);
                      setAskCompanyNameErr('');
                    }}
                  />
                  {askCompanyNameErr && (
                    <p className="t-text ty2 c-red">{askCompanyNameErr}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="tit">
                <p>업종</p>
              </div>
              <div className="con">
                <SelectBox
                  value={askJobClass}
                  options={[
                    { value: '01', name: '음식점' },
                    { value: '02', name: '그로서리' },
                    { value: '03', name: '도매유통' },
                    { value: '04', name: '온라인몰 구분. 디폴트 음식점' },
                  ]}
                  onChangeCallback={(e) => setAskJobClass(e)}
                />
              </div>
            </div>

            <div className="row">
              <div className="tit">
                <p>사업자 소재지</p>
              </div>
              <div className="con">
                <div className="input-cont">
                  <InputBox
                    ref={askCompanyNoRef}
                    value={askCompanyNo}
                    className="t-inp"
                    placeholder="사업자등록번호를 입력해 주세요."
                    onChangeCallback={(e) => {
                      setAskCompanyErr('');

                      //자릿수 체크
                      if (handleLengthCheck(e, 10)) {
                        //숫자 체크
                        setAskCompanyNo(handleInputNumberCheck(e));
                      }
                    }}
                  />
                  <InputBox
                    ref={askCompanyFullAddrRef}
                    value={askCompanyFullAddr}
                    className="t-inp"
                    placeholder="주소를 입력해 주세요."
                    readOnly={true}
                    onClickCallback={handleClickAddressSearch}
                  />
                  <InputBox
                    ref={askCompanyAddr2Ref}
                    value={askCompanyAddr2}
                    className="t-inp"
                    placeholder="상세 주소를 입력해 주세요."
                    onChangeCallback={(e) => {
                      setAskCompanyAddr2(e);
                      setAskCompanyErr('');
                    }}
                  />
                  {askCompanyErr && (
                    <p className="t-text ty2 c-red">{askCompanyErr}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="tit">
                <p>문의자 성함</p>
              </div>
              <div className="con">
                <div className="input-cont">
                  <InputBox
                    ref={askNameRef}
                    value={askName}
                    className="t-inp"
                    placeholder="성함을 입력해 주세요."
                    onChangeCallback={(e) => {
                      setAskName(e);
                      setAskNameErr('');
                    }}
                  />
                  {askNameErr && (
                    <p className="t-text ty2 c-red">{askNameErr}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="tit">
                <p>문의자 연락처</p>
              </div>
              <div className="con">
                <div className="input-cont">
                  <InputBox
                    ref={askTelNoRef}
                    value={askTelNo}
                    className="t-inp"
                    placeholder="-없이 숫자만 입력해 주세요."
                    onChangeCallback={(e) => {
                      setAskTelNoErr('');
                      //자릿수 체크
                      if (handleLengthCheck(e, 11)) {
                        //숫자 체크
                        setAskTelNo(handleInputNumberCheck(e));
                      }
                    }}
                  />
                  {askTelNoErr && (
                    <p className="t-text ty2 c-red">{askTelNoErr}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="tit">
                <p>문의 내용</p>
              </div>
              <div className="con">
                <div className="textarea ty2">
                  <TextareaBox
                    ref={askNoteRef}
                    value={askNote}
                    placeholder="문의 내용을 입력하세요."
                    onChangeCallback={(e) => {
                      setAskNote(e);
                      setAskNoteErr('');
                    }}
                  />
                </div>
                {askNoteErr && <p className="t-text ty2 c-red">{askNoteErr}</p>}
              </div>
            </div>

            <div className="row">
              <div className="tit">
                <p>문의 경로</p>
              </div>
              <div className="con">
                <SelectBox
                  value={askPath}
                  options={[
                    { value: '01', name: '기존거래' },
                    { value: '02', name: '지인소개' },
                    { value: '03', name: '온라인검색' },
                    { value: '04', name: '광고매체 구분. 디폴트 기존거래' },
                  ]}
                  onChangeCallback={(e) => setAskPath(e)}
                />
              </div>
            </div>

            <div className="row">
              <div className="tit">
                <p>사업자등록증</p>
              </div>

              <div className="con">
                <FileBoxBase64
                  accept="image/*"
                  label="brand"
                  filePlaceholder="(사업자등록증 사본을 업로드해주세요.)"
                  fileInfoText="사업자등록증 사본을 업로드해주세요."
                  fileCount={3}
                  newFiles={newFiles}
                  multiple={false}
                  onChangeNewFileCallback={(e) => {
                    setNewFiles(e);
                    setNewFilesErr('');
                  }}
                />
                {newFilesErr && (
                  <p className="t-text ty2 c-red">{newFilesErr}</p>
                )}
              </div>
            </div>
          </div>

          <div className="btn-box center ty2">
            <button className="btn ty3 bd-ty2" onClick={handleClickCancel}>
              <span>취소</span>
            </button>
            <button
              className="btn ty3 c-black"
              onClick={() =>
                handleValidationCheck() && handleClickMemberJoinConfirm()
              }
            >
              <span>회원가입 요청</span>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
