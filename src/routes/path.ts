// 어드민 로그인
export const adminLoginPath = '/admin/login';

// user 메인
export const userMainPath = '/';
// 거래처 로그인
export const userLoginPath = 'login';
// // user 회원 가입 안내
// export const userMemberJoinInfoPath = 'member/memberjoininfo';
// user 회원가입
export const userMemberJoinPath = 'member/memberjoin';
// user 상품 카테고리 목록
export const userProductPath = 'product';
export const userBookPath = 'book';
// user 상품 상세
export const userProductDetailPath = 'product/:id';
// user 브랜드
export const userBrandPath = 'brand';
// user 기획전 목록
export const userExhibitionPath = 'exhibition';
// user 기획전 목록
export const userExhibitionDetailPath = 'exhibition/:id';
// user 공지사항
export const userNoticePath = 'board/notice';
// user 공지사항 상세
export const userNoticeDetailPath = 'board/notice/:id';

// user 문의하기
export const userReqBoardPath = 'reqboard';
// user 문의하기 > 문의글 작성
export const userReqBoardCreatePath = 'reqboard/create';
// user 문의하기 > 문의글 상세
export const userReqBoardDetailPath = 'reqboard/:id';
// user 문의하기 > FAQ
// export const userReqBoardFaqPath = 'reqboard/faq';
export const userReqBoardFaqPath = 'faq';

// user 장바구니
export const userCartPath = 'cart';

// user 바로주문
export const userQuickOrderPath = 'quickorder';
// user 바로주문 > 주문했던 상품
export const userQuickOrderOrderedProductPath = 'quickorder/orderedproduct';
// user 바로주문 > 즐겨찾기 상품
export const userQuickOrderFavoritesProductPath = 'quickorder/favoritesproduct';
// user 바로주문 > 할인중인 상품
export const userQuickOrderDiscountProductPath = 'quickorder/discountproduct';

// user 이용약관
export const userTermsPath = 'board/terms';
// user 전자금융거래이용약관
export const userEBankingPath = 'board/ebanking';
// user 개인정보처리방침
export const userPrivacyTermsPath = 'board/privacyterms';

// user 마이페이지
export const userMypagePath = 'mypage';
// user 마이페이지 > 내정보
export const userMypageMyInfoPath = 'mypage/myinfo';
// user 마이페이지 > 주문내역
export const userMypageOrderInfoPath = 'mypage/orderinfo';
// user 마이페이지 > 거래원장
export const userMypageTransactionLedgerPath = 'mypage/transactionledger';
// user 마이페이지 > 통계
export const userMypageStatisticsPath = 'mypage/statistics';
// user 마이페이지 > 현재 비밀번호 확인
export const userMypageCurruntPasswordCheckPath = 'mypage/curruntpasswordcheck';
// user 마이페이지 > 비밀번호 변경
export const userMypagePasswordChangePath = 'mypage/passwordchange';

// 어드민 메인
export const adminMainPath = '/admin';
// admin 주문 관리 > 주문 목록
export const adminOrderPath = 'order';
// admin 주문 관리 > 주문 > 상세
export const adminOrderDetailPath = 'order/:id';
// admin 주문 관리 > 주문 조건 설정
export const adminOrderSettingPath = 'order/setting';
// admin 주문 관리 > 주문 조건 설정 > 주문 조건 설정 상세
export const adminOrderSettingDetailPath = 'order/setting/:id';

// admin 상품 관리 > 상품 목록
export const adminProductPath = 'product';
// admin 상품 관리 > 상품 > 상세
export const adminProductDetailPath = 'product/:id';
// admin 상품 관리 > 카테고리 설정
export const adminProductCategorySettingPath = 'product/categorysetting';
// admin 상품 관리 > 카테고리 설정 > 상세
export const adminProductCategorySettingDetailPath =
  'product/categorysetting/:id';
// admin 상품 관리 > 검색색인어 그룹관리
export const adminProductSearchGroupPath = 'product/searchgroup';
// admin 상품 관리 > 검색색인어 그룹관리 > 상세
export const adminProductSearchGroupDetailPath = 'product/searchgroup/:id';
// admin 상품 관리 > 프로모션 설정
export const adminProductPromotionSettingPath = 'product/promotionsetting';
// admin 상품 관리 > 프로모션 설정 > 상세
export const adminProductPromotionSettingDetailPath =
  'product/promotionsetting/:id';
// admin 상품 관리 > 배송예약일 샘플신청 설정
export const adminProductDeliverySampleSettingPath =
  'product/deliverysamplesetting';
// admin 상품 관리 > 배송예약일 샘플신청 설정 > 상세
export const adminProductDeliverySampleSettingDetailPath =
  'product/deliverysamplesetting/:id';
// admin 상품 관리 > 샘플신청 상품 설정
export const adminProductSampleProductSettingPath =
  'product/sampleproductsetting';
// admin 상품 관리 > 샘플신청 상품 설정 > 상세
export const adminProductSampleProductSettingDetailPath =
  'product/sampleproductsetting/:id';
// admin 상품 관리 > 연관상품 / 대체상품 설정
export const adminProductRelatedAlternativeSettingPath =
  'product/relatedalternativesetting';
// admin 상품 관리 > 연관상품 / 대체상품 설정 > 상세
export const adminProductRelatedAlternativeSettingDetailPath =
  'product/relatedalternativesetting/:id';
// admin 상품 관리 > 뱃지 설정
export const adminProductBadgeSettingPath = 'product/badgesetting';
// admin 상품 관리 > 뱃지 설정 > 상세
export const adminProductBadgeSettingDetailPath = 'product/badgesetting/:id';

// admin 거래처 목록
export const adminCorrespondentPath = 'correspondent';
// admin 거래처 목록 > 상세
export const adminCorrespondentDetailPath = 'correspondent/:id';
// admin 거래처 목록 > 결제 설정
export const adminCorrespondentPaymentSettingPath =
  'correspondent/paymentsetting';
// admin 거래처 목록 > 결제 설정 > 상세
export const adminCorrespondentPaymentSettingDetailPath =
  'correspondent/paymentsetting/:id';
// admin 거래처 목록 > 입수량 및 배송코스 설정
export const adminCorrespondentQuantityDeliveryCourseSettingPath =
  'correspondent/quantitydeliverycoursesetting';
// admin 거래처 목록 > 입수량 및 배송코스 설정 > 상세
export const adminCorrespondentQuantityDeliveryCourseSettingDetailPath =
  'correspondent/quantitydeliverycoursesetting/:id';

// admin 통계 > 미출고 및 결품현황
export const adminStatisticsNonDeliveryShortageStatusPath =
  'statistics/nondeliveryshortagestatus';
// admin 통계 > 주문수량 순위
export const adminStatisticsOrderQuantityRankingPath =
  'statistics/orderquantityranking';
// admin 통계 > 기간별 주문 현황
export const adminStatisticsOrderStatusByPeriodPath =
  'statistics/orderstatusbyperiod';
// admin 통계 > 월별 신규회원 현황
export const adminStatisticsMonthNewCorrespondentStatusPath =
  'statistics/monthnewcorrespondentstatus';
// admin 통계 > 월별 신규주문 거래처 현황
export const adminStatisticsMonthNewOrderCorrespondentStatusPath =
  'statistics/monthnewordercorrespondentstatus';

// admin 문의하기 > FAQ 관리
export const adminReqBoardFaqPath = 'reqboard/faq';
// admin 문의하기 > FAQ 관리 > 상세
export const adminReqBoardFaqDetailPath = 'reqboard/faq/:id';
// admin 문의하기 > 문의 목록
export const adminReqBoardPath = 'reqboard';
// admin 문의하기 > 문의 목록 > 상세
export const adminReqBoardDetailPath = 'reqboard/:id';
// admin 문의하기 > 통계
export const adminReqBoardStatisticsPath = 'reqboard/statistics';

// admin 게시판 관리 > 공지사항 목록
export const adminBoardNoticePath = 'board/notice';
// admin 게시판 관리 > 공지사항 > 상세
export const adminBoardNoticeDetailPath = 'board/notice/:id';
// admin 게시판 관리 > 공지사항 > 신규
export const adminBoardNoticeCreatePath = 'board/notice/create';
// admin 게시판 관리 > 공지사항 > 수정
export const adminBoardNoticeUpdatePath = 'board/notice/update/:id';
// admin 게시판 관리 > 이용 약관
export const adminBoardTermsPath = 'board/terms';
// admin 게시판 관리 > 이용 약관 > 상세
export const adminBoardTermsDetailPath = 'board/terms/:id';
// admin 게시판 관리 > 이용 약관 > 신규
export const adminBoardTermsCreatePath = 'board/terms/create';
// admin 게시판 관리 > 개인정보처리방침
export const adminBoardPrivacyTermsPath = 'board/privacyterms';
// admin 게시판 관리 > 개인정보처리방침 > 상세
export const adminBoardPrivacyTermsDetailPath = 'board/privacyterms/:id';
// admin 게시판 관리 > 개인정보처리방침 > 신규
export const adminBoardPrivacyTermsCreatePath = 'board/privacyterms/create';
// admin 게시판 관리 > 전자금융거래 이용약관
export const adminBoardEBankingPath = 'board/ebanking';
// admin 게시판 관리 > 전자금융거래 이용약관 > 상세
export const adminBoardEBankingDetailPath = 'board/ebanking/:id';
// admin 게시판 관리 > 전자금융거래 이용약관 > 신규
export const adminBoardEBankingCreatePath = 'board/ebanking/create';

// admin 브랜드 관리
export const adminBrandPath = 'brand';
// admin 브랜드 관리 > 상세
export const adminBrandDetailPath = 'brand/:id';
// admin 브랜드 관리 > 신규
export const adminBrandCreatePath = 'brand/create';

// admin 기획전 관리
export const adminExhibitionPath = 'exhibition';
// admin 기획전 관리 > 신규
export const adminExhibitionCreatePath = 'exhibition/create';
// admin 기획전 관리 > 상세
export const adminExhibitionDetailPath = 'exhibition/:id';

// admin 알림톡 관리 > 알림톡 보내기
export const adminAlimTalkSendPath = 'alimtalk/send';
// admin 알림톡 관리 > 알림톡
export const adminAlimTalkPath = 'alimtalk';
// admin 알림톡 관리 > 메시지 발송 내역
export const adminAlimTalkMessageSendPath = 'alimtalk/messagesend';

// admin 메인 노출 관리 > 메인 팝업
export const adminMainViewPopupPath = 'mainview/popup';
// admin 메인 노출 관리 > 메인 팝업 > 신규
export const adminMainViewPopupCreatePath = 'mainview/popup/create';
// admin 메인 노출 관리 > 메인 팝업 > 상세
export const adminMainViewPopupDetailPath = 'mainview/popup/:id';
// admin 메인 노출 관리 > 메인 배너
export const adminMainViewBannerPath = 'mainview/banner';
// admin 메인 노출 관리 > 메인 배너 > 신규
export const adminMainViewBannerCreatePath = 'mainview/banner/create';
// admin 메인 노출 관리 > 메인 배너 > 상세
export const adminMainViewBannerDetailPath = 'mainview/banner/:id';
// admin 메인 노출 관리 > 추천 검색어
export const adminMainViewRecommendedSearchPath = 'mainview/recommendedsearch';
// admin 메인 노출 관리 > 메인 콘텐츠 운영
export const adminMainViewContentPath = 'mainview/content';

// admin 운영자 관리 > 운영자 관리
export const adminOperatorManagementPath = 'operatormanagement';
// admin 운영자 관리 > 배송기사 관리
export const adminOperatorManagementDeliveryPath =
  'operatormanagement/delivery';
// admin 운영자 관리 > 권한 관리
export const adminOperatorManagementAuthorityPath =
  'operatormanagement/authority';
// admin 운영자 관리 > 공통코드 관리
export const adminOperatorManagementCommonCodePath =
  'operatormanagement/commoncode';
// admin 운영자 관리 > 회사 기본정보 관리
export const adminOperatorManagementCompanyPath = 'operatormanagement/company';

// admin 마이페이지
export const adminMypagePath = 'mypage';

// admin 회원가입 신청 목록
export const adminMemberJoinPath = 'memberjoin';
// admin 회원가입 신청 > 상세
export const adminMemberJoinDetailPath = 'memberjoin/:id';

// admin 즐겨찾기
export const adminFavoritesPath = 'favorites';

// dlv 배송기사 메인
export const deliveryMainPath = '/delivery';
