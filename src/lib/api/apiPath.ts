const userAPIPath = '';
const adminAPIPath = '/admin';
// const deliveryAPIPath = '/delivery';
const commonAPIPath = '/common';

//공통 코드 목록
export const apiGetCommonCodeList = () => `${commonAPIPath}/getCommonCode`;
// 거래처 목록 (Get)
export const apiGetPartnerList = () => `${commonAPIPath}/getPartnerList`;
// 그룹(단가, 거래처) (Get)
export const apiGetCustomerGroupList = () =>
  `${commonAPIPath}/getCustomerGroupList`;

/* ================================================================
 * user path
 * ================================================================ */
// user 로그인
export const apiPostUserLogin = () => `${userAPIPath}/login/doLogin`;
// user 로그아웃
export const apiPostUserLogout = () => `${userAPIPath}/logout`;
// user 로그인 > 비밀번호 찾기 (Post)
export const apiPostUserIdSearch = () => `${userAPIPath}/login/doFindUserId`;
// user 로그인 > 비밀번호 찾기 (Post)
export const apiPostUserPasswordSearch = () =>
  `${userAPIPath}/login/doFindPassword`;
// user 회원가입
export const apiPostMemberJoin = () => ``;

//user 비밀번호 확인
export const apiPostCurruntPasswordCheck = () => ``;

// user Main 배너 팝업
export const apiGetUserMainBannerPopupList = () => ``;
// user Main 배너 팝업 > 오늘 or 일주일 그만보기
export const apiPostUserMainBannerPopup = (mainBannerId: string) => ``;
// user Main 공지사항
export const apiGetUserMainNotice = () =>
  `${userAPIPath}/board/getOmsUserNotice`;
// user 공지사항 목록
export const apiGetUserNoticeList = () => `${userAPIPath}/board/getNoticeList`;
// user 공지사항 상세
export const apiGetUserNoticeDetail = (noticeId: string) =>
  `${userAPIPath}/board/getNotice/${noticeId}`;
// user 이용약관
export const apiGetUserTermsList = (termsType: string) =>
  `${userAPIPath}/board/getTermsList/${termsType}`;
// user 브랜드
export const apiGetUserBrandList = () => `${userAPIPath}/brand/getBrandList`;

/* ================================================================
 * admin path
 * ================================================================ */
// admin 로그인 (Post)
export const apiPostAdminLogin = () => `${adminAPIPath}/login/doLogin`;
// admin 로그아웃 (Post)
export const apiPostAdminLogout = () => `${adminAPIPath}/logout`;
// admin 로그인 > 비밀번호 찾기 (Post)
export const apiPostAdminPasswordSearch = () =>
  `${adminAPIPath}/login/doFindPassword`;

// admin 메뉴 목록
export const apiGetAdminMenuList = () => `${adminAPIPath}/user/getMenuList`;

// admin 대시보드

// admin 주문 관리 > 주문 목록 (Get)
export const apiGetAdminOrderList = () => ``;
// admin 주문 관리 > 주문 상세 (Get)
export const apiGetAdminOrderDetail = (orderId: string) => ``;

// admin 주문 관리 > 상세 > 배송조회 (Get)
export const apiGetAdminDeliveryList = () => ``;
// admin 주문 관리 > 상세 > 배송상세 (Get)
export const apiGetAdminDeliveryDetailList = (dlvId: string) => ``;

// admin 게시판 관리 > 공지사항 목록 (Get)
export const apiGetAdminNoticeList = () =>
  `${adminAPIPath}/board/getNoticeList`;
// admin 게시판 관리 > 공지사항 상세 (Get)
export const apiGetAdminNoticeDetail = (noticeId: string) =>
  `${adminAPIPath}/board/getNotice/${noticeId}`;
// admin 게시판 관리 > 공지사항 상세 > 노출 대상 (Get)
export const apiGetAdminNoticeShowList = (noticeId: string) =>
  `${adminAPIPath}/board/getNoticeTgt/${noticeId}`;

// admin 게시판 관리 > 공지사항 등록 (Post)
export const apiGetAdminNoticeCreate = () =>
  `${adminAPIPath}/board/insertNotice`;
// admin 게시판 관리 > 공지사항 수정 (Post)
export const apiGetAdminNoticeModify = () =>
  `${adminAPIPath}/board/updateNotice`;
// admin 게시판 관리 > 공지사항 > 노출 대상 저장 (Post)
export const apiGetAdminNoticeInsertNoticeTarget = () =>
  `${adminAPIPath}/board/saveNoticeTgt`;
// admin 게시판 관리 > 공지사항 > 선택글 고정/해제 (Post)
export const apiGetAdminNoticeFixed = () =>
  `${adminAPIPath}/board/updateFixNotice`;

// admin 게시판 관리 > 약관 목록 (Get)
export const apiGetAdminTermsList = () => `${adminAPIPath}/board/getTermsList`;
// admin 게시판 관리 > 약관 상세 (Get)
export const apiGetAdminTermsDetail = (termsId: string) =>
  `${adminAPIPath}/board/getTerms/${termsId}`;
// admin 게시판 관리 > 약관 등록 (Post)
export const apiPostAdminTermsCreate = () =>
  `${adminAPIPath}/board/insertTerms`;
// admin 게시판 관리 > 약관 수정 (Post)
export const apiPostAdminTermsModify = () =>
  `${adminAPIPath}/board/updateTerms`;

// admin 브랜드 관리 > 브랜드 목록 (Get)
export const apiGetAdminBrandList = () => `${adminAPIPath}/brand/getBrandList`;
// admin 브랜드 관리 > 브랜드 등록/상세 > 브랜드 검색 (Get)
export const apiGetAdminBrandCodeList = () =>
  `${adminAPIPath}/brand/getBrandCodeList`;
// admin 브랜드 관리 > 브랜드 상세 (Get)
export const apiGetAdminBrandDetail = (brandId: string) =>
  `${adminAPIPath}/brand/getBrand/${brandId}`;
// admin 브랜드 관리 > 브랜드 등록 (Post)
export const apiGetAdminBrandCreate = () => `${adminAPIPath}/brand/insertBrand`;
// admin 브랜드 관리 > 브랜드 수정 (Post)
export const apiGetAdminBrandModify = () => `${adminAPIPath}/brand/updateBrand`;

// admin 기획전 관리 > 기획전 목록 (Get)
export const apiGetAdminExhibitionList = () =>
  `${adminAPIPath}/exhibition/getExhibitionList`;
// admin 기획전 관리 > 기획전 등록 (Post)
export const apiGetAdminExhibitionCreate = () =>
  `${adminAPIPath}/exhibition/insertExhibition`;
// admin 기획전 관리 > 기획전 상세 (Get)
export const apiGetAdminExhibitionDetail = (exhibitionId: string) =>
  `${adminAPIPath}/exhibition/getExhibition/${exhibitionId}`;

// admin 운영자 관리 > 공통코드 마스터 목록 (Get)
export const apiGetCodesMasterList = () =>
  `${adminAPIPath}/code/getMasterCodeList`;
// admin 운영자 관리 > 공통코드 상세 목록 (Get)
export const apiGetCodesDetailList = () =>
  `${adminAPIPath}/code/getCodeDetailList`;
// admin 운영자 관리 > 공통코드 저장 (Post)
export const apiGetCodesSave = () => `${adminAPIPath}/code/updateCode`;

// admin 운영자 관리 > 회사 기본정보 관리
export const apiGetAdminCompanyDetail = () =>
  `${adminAPIPath}/company/getCompany`;
// admin 운영자 관리 > 회사 기본정보 관리 수정
export const apiPostAdminCompanyModify = () =>
  `${adminAPIPath}/company/insertUpdateCompany`;

// admin 회원가입 신청 목록
export const apiGetMemberJoinList = () => `${adminAPIPath}/`;