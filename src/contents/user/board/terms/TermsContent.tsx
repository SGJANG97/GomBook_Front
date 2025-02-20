import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import parse from 'html-react-parser';

import { apiGetUserTermsList } from 'src/lib/api/apiPath';
import { Terms } from 'src/models/terms/Terms';
import {
  userEBankingPath,
  userMainPath,
  userTermsPath,
  userPrivacyTermsPath,
} from 'src/routes/path';
import { dateStringFormat } from 'src/utils/date';
import { TermsType } from 'src/utils/codeDefines';
import { useUserApiCallHandler } from 'src/hooks/useUserApiCall';

export default function TermsContent() {
  const { pathname } = useLocation();

  //api call
  const apiCall = useUserApiCallHandler();

  const [title, setTitle] = useState<string>('');
  const [termsList, setTermsList] = useState<Terms[]>([]);
  const [termsData, setTermsData] = useState<Terms>();
  const [termsId, setTermsId] = useState<string>('');

  useEffect(() => {
    let path = '';

    if (pathname.includes(`${userMainPath}${userTermsPath}`)) {
      path = userTermsPath.replace('board/', '');
      setTitle('이용약관');
    }
    if (pathname.includes(`${userMainPath}${userPrivacyTermsPath}`)) {
      path = userPrivacyTermsPath.replace('board/', '');
      setTitle('개인정보처리방침');
    }
    if (pathname.includes(`${userMainPath}${userEBankingPath}`)) {
      path = userEBankingPath.replace('board/', '');
      setTitle('전자금융거래 이용약관');
    }

    apiGetTermsList(path);
  }, [pathname]);

  // API 호출: 조회 ==================================//
  const apiGetTermsList = async (path: string) => {
    const params =
      path === userTermsPath.replace('board/', '') // 이용약관
        ? TermsType.getCode('TERMS') //'OMBD002001'
        : path === userPrivacyTermsPath.replace('board/', '') // 개인정보처리방침
          ? TermsType.getCode('PRIVACYTERMS') //'OMBD002002'
          : path === userEBankingPath.replace('board/', '') // 전자금융거래 이용약관
            ? TermsType.getCode('EBANKING') //'OMBD002003'
            : '';

    let result: { list: Terms[] } = await apiCall.userApiCall(
      'GET',
      apiGetUserTermsList(params),
      {}
    );
    if (result) {
      //(노출여부 = Y)
      const list: Terms[] = result?.list?.filter(
        (filter: Terms) => filter.dispYn === 'Y'
      );
      //약관 목록
      setTermsList(list);
      setTermsId(list[0].termsId || '');
      //최조 데이터
      setTermsData(list[0]);
    }
  };

  // 약관 내용
  const handleChangeTermsContent = (e: ChangeEvent<HTMLSelectElement>) => {
    const TermsId = e.target.value;
    const Terms = termsList?.find((find) => find.termsId === TermsId);
    setTermsId(TermsId);
    setTermsData(Terms);
  };

  return (
    <div className="agreement-wrap">
      <div className="inner-content">
        <div className="sub-title-box ty2">
          <h2 className="title-t ty2">{title}</h2>
        </div>
        <div className="selectbox">
          <select
            value={termsData?.termsId}
            onChange={handleChangeTermsContent}
          >
            {termsList?.map((item, idx) => (
              <option value={item.termsId} key={idx}>
                {/* 쉐프스푸드 개인정보처리방침 (개정 2024.12.23) */}
                {
                  item.termsName
                } ({dateStringFormat(item.createDt, 'YYYY-MM-DD')})
              </option>
            ))}
          </select>
        </div>
        <div className="agreement-area">
          {parse(termsData?.termsContents || '')}
          {/* <p>
            쉐프스푸드(주)(이하 "회사”)는 귀하의 개인정보보호를 매우 중요시하며,
            『정보통신망 이용촉진 및 정보보호 등에 관한 법률』 및
            『개인정보보호법』상의 개인정보보호 규정 및 행정안전부가 제정한
            『개인정보보호지침』을 준수하고 있습니다.회사는 개인정보처리방침을
            통해 귀하께서 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고
            있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지
            알려드립니다.
            <br />
            <br />
            회사의 개인정보 처리방침은 관련 법령, 지침 및 회사 내부 운영방침에
            따라 변경될 수 있으며, 개인정보 처리방침이 변경되는 경우 관련 법령이
            정하는 방법에 따라 공개하고 있습니다.※ 본 방침은 2024년 07월
            03일부터 시행됩니다.
          </p>
          <h3>제1조 총직</h3>
          <p>
            ① 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는
            성명, 전화번호 등의 사항에 의하여 당해 개인을 식별할 수 있는
            정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와
            용이하게 결합하여 식별할 수 있는 것을 포함합니다)를 말합니다.
          </p>
          <p>
            ② 주식회사 씨알케이(주)(이하 "회사")는 귀하의 개인정보보호를 매우
            중요시하며, 『정보통신망이용촉진및정보보호에관한법률』상의
            개인정보보호규정 및 정보통신부가 제정한 『개인정보보호지침』을
            준수하고 있습니다. 회사는 개인정보취급방침을 통하여 귀하께서
            제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며
            개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
            <p>
              ③ 회사는 개인정보취급방침을 홈페이지 첫 화면에 공개함으로써
              귀하께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다.
            </p>
            <p>
              ④ 회사는 개인정보취급방침의 지속적인 개선을 위하여
              개인정보취급방침을 개정하는데 필요한 절차를 정하고 있습니다.
              그리고 개인정보취급방침을 개정하는 경우 버전번호 등을 부여하여
              개정된 사항을 귀하께서 쉽게 알아볼 수 있도록 하고 있습니다.
            </p>
          </p> */}
        </div>
      </div>
    </div>
  );
}
