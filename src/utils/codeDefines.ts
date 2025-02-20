type DetailCd = {
  code: string;
  name: string;
};

export interface OptionData {
  name: string;
  value: string;
  disabled: boolean;
}

type DetailCds<T extends string> = Record<T, DetailCd>;

export const createCommonCode = <T extends string>(detailCds: DetailCds<T>) => {
  const getCode = (key: T): string => detailCds[key]?.code || '';

  const getName = (key: T): string => detailCds[key]?.name || '';

  const getNameByCode = (code?: string): string => {
    if (code === undefined) return '';
    const foundCode = (Object.values(detailCds) as DetailCd[]).find(
      (detailCd) => detailCd.code === code
    );
    return foundCode?.name || '';
  };

  const isIncludeCode = (keys: T[], code: string | undefined): boolean => {
    if (code === undefined) {
      return false;
    }

    const codes: string[] = keys.map((key) => getCode(key)).filter(Boolean);
    return codes.includes(code);
  };

  const getCodes = () => {
    return Object.keys(detailCds).map((key) => getCode(key as T));
  };

  const getEnum = () => {
    const codes = getCodes();
    return codes as [string, ...string[]];
  };

  const getOption = (key: T | string): OptionData => {
    const foundCode = detailCds[key as T];

    if (foundCode) {
      return {
        name: foundCode.name,
        value: foundCode.code,
        disabled: false,
      };
    } else {
      return {
        name: '',
        value: '',
        disabled: true,
      };
    }
  };

  const getOptionByCode = (code: string): OptionData => {
    const foundCode = (Object.values(detailCds) as DetailCd[]).find(
      (detailCd) => detailCd.code === code
    );

    return getOption(foundCode?.code || '');
  };

  const getOptions = (concat?: boolean): OptionData[] => {
    return Object.keys(detailCds).map((key) => {
      const code = getCode(key as T);
      const name = getName(key as T);
      return {
        name: concat ? name + ' (' + code + ')' : name,
        value: code,
        disabled: false,
      };
    });
  };

  return {
    getCode,
    getName,
    getNameByCode,
    isIncludeCode,
    getOption,
    getOptionByCode,
    getOptions,
    getCodes,
    getEnum,
  };
};

//노출 여부
export const DispYnType = createCommonCode({
  Y: { code: 'Y', name: '노출함' },
  N: { code: 'N', name: '노출안함' },
});

//사용 여부
export const UseYnType = createCommonCode({
  Y: { code: 'Y', name: '사용함' },
  N: { code: 'N', name: '사용안함' },
});

export const MainYnType = UseYnType;

//게시 여부
export const PostYnType = createCommonCode({
  Y: { code: 'Y', name: '게시함' },
  N: { code: 'N', name: '게시안함' },
});

//노출 대상
export const ShowTargetCodeType = createCommonCode({
  PARTNERALL: { code: 'OMBD001001', name: '거래처 전체' },
  PARTNER: { code: 'OMBD001002', name: '거래처' },
  PRGROUP: { code: 'OMBD001003', name: '단가 그룹' },
  TRGROUP: { code: 'OMBD001004', name: '거래처 그룹' },
  NON: { code: 'OMBD001005', name: '비회원' },
});

//약관 구분
export const TermsType = createCommonCode({
  TERMS: { code: 'OMBD002001', name: '이용약관' },
  PRIVACYTERMS: { code: 'OMBD002002', name: '개인정보처리방침' },
  EBANKING: { code: 'OMBD002003', name: '전자금융거래 이용약관' },
});

//공통코드 타입
export const CodesType = createCommonCode({
  MASTER: { code: 'master', name: 'Master' },
  DETAIL: { code: 'detail', name: 'Detail' },
});

//처리 상태
export const ExecStatusType = createCommonCode({
  NONE: { code: '1', name: '미처리' },
  RECTPROC: { code: '2', name: '접수 처리중' },
  PROCCOMPLET: { code: '3', name: '처리완료' },
  CONNECTCOMPLET: { code: '4', name: '연동완료' },
});

//배송 요일
export const DlvWeekType = createCommonCode({
  MON: { code: 'mon', name: '월요일' },
  TUE: { code: 'tue', name: '화요일' },
  WED: { code: 'wed', name: '수요일' },
  THU: { code: 'thu', name: '목요일' },
  FRI: { code: 'fri', name: '금요일' },
  SAT: { code: 'sat', name: '토요일' },
  SUN: { code: 'sun', name: '일요일' },
});

//문의요청 타입
export const ReqBoardReqType = createCommonCode({
  SAMPLE: { code: '1', name: '샘플신청' },
  RETURN: { code: '2', name: '반품' },
  PRODUCT: { code: '3', name: '제품' },
  DELIVERY: { code: '4', name: '배송' },
  OTHER: { code: '5', name: '기타' },
  MEMBER: { code: '6', name: '사업장 정보 변경 요청' },
  ORDERCANCEL: { code: '7', name: '주문취소' },
});
