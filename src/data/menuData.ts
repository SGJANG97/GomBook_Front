import {
  adminAlimTalkMessageSendPath,
  adminAlimTalkPath,
  adminAlimTalkSendPath,
  adminBoardEBankingPath,
  adminBoardNoticePath,
  adminBoardTermsPath,
  adminBoardPrivacyTermsPath,
  adminBrandPath,
  adminCorrespondentPath,
  adminCorrespondentPaymentSettingPath,
  adminCorrespondentQuantityDeliveryCourseSettingPath,
  adminFavoritesPath,
  adminMainPath,
  adminMainViewBannerPath,
  adminMainViewContentPath,
  adminMainViewPopupPath,
  adminMainViewRecommendedSearchPath,
  adminMypagePath,
  adminOperatorManagementAuthorityPath,
  adminOperatorManagementCommonCodePath,
  adminOperatorManagementCompanyPath,
  adminOperatorManagementDeliveryPath,
  adminOperatorManagementPath,
  adminOrderPath,
  adminOrderSettingPath,
  adminProductBadgeSettingPath,
  adminProductCategorySettingPath,
  adminProductDeliverySampleSettingPath,
  adminProductPath,
  adminProductPromotionSettingPath,
  adminProductRelatedAlternativeSettingPath,
  adminProductSampleProductSettingPath,
  adminProductSearchGroupPath,
  adminExhibitionPath,
  adminStatisticsMonthNewCorrespondentStatusPath,
  adminStatisticsMonthNewOrderCorrespondentStatusPath,
  adminStatisticsNonDeliveryShortageStatusPath,
  adminStatisticsOrderQuantityRankingPath,
  adminStatisticsOrderStatusByPeriodPath,
  userBrandPath,
  userMypageMyInfoPath,
  userMypageOrderInfoPath,
  userMypagePath,
  userMypageStatisticsPath,
  userMypageTransactionLedgerPath,
  userNoticePath,
  userProductPath,
  userQuickOrderDiscountProductPath,
  userQuickOrderFavoritesProductPath,
  userQuickOrderOrderedProductPath,
  userQuickOrderPath,
  userExhibitionPath,
  adminReqBoardPath,
  adminReqBoardStatisticsPath,
  adminReqBoardFaqPath,
  userReqBoardFaqPath,
  userReqBoardCreatePath,
  userReqBoardPath, userBookPath,
} from 'src/routes/path';
import { ReqBoardReqType } from 'src/utils/codeDefines';

export interface AdminMenuData {
  menuId: string;
  menuName: string;
  menuPath: string;
  sub?: any[];
}

export interface AdminMenus {
  menuId: string;
  menuName: string;
  menuPath: string;
  sub?: AdminMenuData[];
}

export interface MenuData {
  id: string;
  path: string;
  name: string;
  sub?: any[];
}

export interface Menus {
  id: string;
  path: string;
  name: string;
  sub?: MenuData[];
}

//사용자 메뉴 - 모바일
export const userMenuListMO: Menus[] = [
  {
    id: 'menu_01',
    // path: '/quickOrder',
    path: `${userQuickOrderPath}`,
    name: '바로주문',
    sub: [
      {
        id: 'menu_01_01',
        // path: '/quickOrder/orderProduct',
        path: `${userQuickOrderOrderedProductPath}`,
        name: '주문했던 상품',
      },
      {
        id: 'menu_01_02',
        // path: '/quickOrder/favoritesProduct',
        path: `${userQuickOrderFavoritesProductPath}`,
        name: '즐겨찾기 상품',
      },
      {
        id: 'menu_01_03',
        // path: '/quickOrder/discountProduct',
        path: `${userQuickOrderDiscountProductPath}`,
        name: '할인중인 상품',
      },
    ],
  },
  {
    id: 'menu_02',
    // path: '/product',
    path: `${userProductPath}`,
    name: '상품카테고리',
    sub: [],
  },
  {
    id: 'menu_03',
    // path: '/brand',
    path: `${userBrandPath}`,
    name: '브랜드',
    sub: [],
  },
  {
    id: 'menu_04',
    // path: '/exhibition',
    path: `${userExhibitionPath}`,
    name: '기획전',
    sub: [],
  },
  {
    id: 'menu_05',
    // path: '/board/notice',
    path: `${userNoticePath}`,
    name: '공지사항',
    sub: [],
  },
  {
    id: 'menu_06',
    // path: '/reqboard',
    path: `${userReqBoardPath}`,
    name: '문의하기',
    sub: [
      {
        id: 'menu_06_01',
        // path: '/reqboard/faq',
        path: `${userReqBoardFaqPath}`,
        name: 'FAQ',
      },
      {
        id: 'menu_06_02',
        // path: '/reqboard/orderInfo',
        path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('PRODUCT')}`,
        name: '제품문의',
      },
      {
        id: 'menu_06_03',
        // path: '/reqboard/delivery',
        path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('DELIVERY')}`,
        name: '배송문의',
      },
      {
        id: 'menu_06_04',
        // path: '/reqboard/userChange',
        path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('MEMBER')}`,
        name: '사업자정보변경요청',
      },
      {
        id: 'menu_06_04',
        // path: '/reqboard/return',
        path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('RETURN')}`,
        name: '반품신청',
      },
      {
        id: 'menu_06_05',
        // path: '/reqboard/sample',
        path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('SAMPLE')}`,
        name: '샘플신청',
      },
    ],
  },
  {
    id: 'menu_07',
    // path: '',
    path: `${userMypagePath}`,
    name: '마이페이지',
    sub: [
      {
        id: 'menu_07_01',
        // path: '/mypage/myInfo',
        path: `${userMypageMyInfoPath}`,
        name: '내정보',
      },
      {
        id: 'menu_07_02',
        // path: '/mypage/orderInfo',
        path: `${userMypageOrderInfoPath}`,
        name: '주문내역',
      },
      {
        id: 'menu_07_03',
        // path: '/mypage/transactionLedger',
        path: `${userMypageTransactionLedgerPath}`,
        name: '거래원장',
      },
      {
        id: 'menu_07_04',
        // path: '/mypage/statistics',
        path: `${userMypageStatisticsPath}`,
        name: '통계',
      },
    ],
  },
];

// user 메뉴
export const userMenuListPC: Menus[] = [
  {
    id: 'menu_01',
    path: '#',
    name: '전체메뉴',
    sub: [
      {
        id: 'menu_01_01',
        // path: '/quickOrder',
        path: `${userQuickOrderPath}`,
        name: '도서관리',
        sub: [
          {
            id: 'menu_01_01_01',
            // path: '/quickOrder/orderProduct',
            path: `${userQuickOrderOrderedProductPath}`,
            name: '도서목록',
          },
          {
            id: 'menu_01_01_02',
            // path: '/quickOrder/favoritesProduct',
            path: `${userQuickOrderFavoritesProductPath}`,
            name: '도서대여현황',
          },
        ],
      },
      {
        id: 'menu_01_02',
        // path: '/mypage',
        path: `${userMypagePath}`,
        name: '마이페이지',
        sub: [
          {
            id: 'menu_01_02_01',
            // path: '/mypage/myInfo',
            path: `${userMypageMyInfoPath}`,
            name: '내정보',
          },
          {
            id: 'menu_01_02_02',
            // path: '/mypage/orderInfo',
            path: `${userMypageOrderInfoPath}`,
            name: '도서대여내역(반납)',
          },
        ],
      },
      {
        id: 'menu_01_03',
        // path: '/reqboard',
        path: `${userReqBoardPath}`,
        name: '커뮤니티',
        sub: [
          {
            id: 'menu_01_03_01',
            // path: '/reqboard/faq',
            path: `${userReqBoardFaqPath}`,
            name: 'FAQ',
          },
          {
            id: 'menu_01_03_02',
            // path: '/reqboard/orderInfo',
            path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('PRODUCT')}`,
            name: '문의하기',
          },
          {
            id: 'menu_01_03_03',
            // path: '/reqboard/delivery',
            path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('DELIVERY')}`,
            name: '공지사항',
          },
        ],
      },
    ],
  },
  {
    id: 'menu_02',
    // path: '/product',
    path: `${userBookPath}`,
    name: '카테고리',
    sub: [],
  },
  {
    id: 'menu_03',
    // path: '/brand',
    path: `${userNoticePath}`,
    name: '공지사항',
    sub: [],
  },
];

//사용자 메뉴 - 상품 카테고리
export const categoryMenus: Menus[] = [
  {
    id: 'menu_02_01',
    name: '인문/교양',
    path: '/book',
    sub: [],
  },
  {
    id: 'menu_02_02',
    name: '역사/문화',
    path: '/book',
    sub: [],
  },
  {
    id: 'menu_02_03',
    name: '문학/소설',
    path: '/book',
    sub: [],
  },
  {
    id: 'menu_02_04',
    name: '사회/경제',
    path: '/book',
    sub: [],
  },
  {
    id: 'menu_02_05',
    name: '과학/기술',
    path: '/book',
    sub: [],
  },
  {
    id: 'menu_02_06',
    name: '철학/종교',
    path: '/book',
  },
];

//admin 메뉴 - 모바일
export const adminMenuListMO: Menus[] = [
  {
    id: 'menu_01',
    // path: '/admin',
    path: adminMainPath,
    name: '홈',
  },
  {
    id: 'menu_02',
    // path: '/admin/correspondent',
    path: `${adminMainPath}/${adminCorrespondentPath}`,
    name: '거래처',
  },
  {
    id: 'menu_03',
    // path: '/admin/product',
    path: `${adminMainPath}/${adminProductPath}`,
    name: '상품',
  },
  {
    id: 'menu_04',
    // path: '/admin/favorites',
    path: `${adminMainPath}/${adminFavoritesPath}`,
    name: '즐겨찾기',
  },
  {
    id: 'menu_05',
    // path: '/admin/reqboard',
    path: `${adminMainPath}/${adminReqBoardPath}`,
    name: '문의하기',
  },
  {
    id: 'menu_06',
    // path: '/admin/reqboard',
    path: `${adminMainPath}/${adminReqBoardPath}`,
    name: '회원가입 신청현황',
  },
];

//사용자 메뉴 - PC
// export const userMenuListPC: Menus[] = [
//   {
//     id: 'menu_01',
//     path: '#',
//     name: '전체메뉴',
//     sub: [
//       {
//         id: 'menu_01_01',
//         // path: '/quickOrder',
//         path: `${userQuickOrderPath}`,
//         name: '바로주문',
//         sub: [
//           {
//             id: 'menu_01_01_01',
//             // path: '/quickOrder/orderProduct',
//             path: `${userQuickOrderOrderedProductPath}`,
//             name: '주문했던 상품',
//           },
//           {
//             id: 'menu_01_01_02',
//             // path: '/quickOrder/favoritesProduct',
//             path: `${userQuickOrderFavoritesProductPath}`,
//             name: '즐겨찾기 상품',
//           },
//           {
//             id: 'menu_01_01_03',
//             // path: '/quickOrder/discountProduct',
//             path: `${userQuickOrderDiscountProductPath}`,
//             name: '할인중인 상품',
//           },
//         ],
//       },
//       {
//         id: 'menu_01_02',
//         // path: '/mypage',
//         path: `${userMypagePath}`,
//         name: '마이페이지',
//         sub: [
//           {
//             id: 'menu_01_02_01',
//             // path: '/mypage/myInfo',
//             path: `${userMypageMyInfoPath}`,
//             name: '내정보',
//           },
//           {
//             id: 'menu_01_02_02',
//             // path: '/mypage/orderInfo',
//             path: `${userMypageOrderInfoPath}`,
//             name: '주문내역',
//           },
//           {
//             id: 'menu_01_02_03',
//             // path: '/mypage/transactionLedger',
//             path: `${userMypageTransactionLedgerPath}`,
//             name: '거래원장',
//           },
//           {
//             id: 'menu_01_02_04',
//             // path: '/mypage/statistics',
//             path: `${userMypageStatisticsPath}`,
//             name: '통계',
//           },
//         ],
//       },
//       {
//         id: 'menu_01_03',
//         // path: '/reqboard',
//         path: `${userReqBoardPath}`,
//         name: '문의하기',
//         sub: [
//           {
//             id: 'menu_01_03_01',
//             // path: '/reqboard/faq',
//             path: `${userReqBoardFaqPath}`,
//             name: 'FAQ',
//           },
//           {
//             id: 'menu_01_03_02',
//             // path: '/reqboard/orderInfo',
//             path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('PRODUCT')}`,
//             name: '제품문의',
//           },
//           {
//             id: 'menu_01_03_03',
//             // path: '/reqboard/delivery',
//             path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('DELIVERY')}`,
//             name: '배송문의',
//           },
//           {
//             id: 'menu_01_03_04',
//             // path: '/reqboard/userChange',
//             path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('MEMBER')}`,
//             name: '사업자정보변경요청',
//           },
//           {
//             id: 'menu_01_03_04',
//             path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('RETURN')}`,
//             name: '반품신청',
//           },
//           {
//             id: 'menu_01_03_05',
//             // path: 'reqboard/sample',
//             path: `${userReqBoardCreatePath}?requestType=${ReqBoardReqType.getCode('SAMPLE')}`,
//             name: '샘플신청',
//           },
//         ],
//       },
//       {
//         id: 'menu_01_04',
//         // path: '/brand',
//         path: `${userBrandPath}`,
//         name: '브랜드',
//         sub: [],
//       },
//       {
//         id: 'menu_01_05',
//         // path: '/exhibition',
//         path: `${userExhibitionPath}`,
//         name: '기획전',
//         sub: [],
//       },
//       {
//         id: 'menu_01_06',
//         // path: '/board/notice',
//         path: `${userNoticePath}`,
//         name: '공지사항',
//         sub: [],
//       },
//     ],
//   },
//   {
//     id: 'menu_02',
//     // path: '/product',
//     path: `${userProductPath}`,
//     name: '상품카테고리',
//     sub: [],
//   },
//   {
//     id: 'menu_03',
//     // path: '/brand',
//     path: `${userBrandPath}`,
//     name: '브랜드',
//     sub: [],
//   },
//   {
//     id: 'menu_04',
//     // path: '/exhibition',
//     path: `${userExhibitionPath}`,
//     name: '기획전',
//     sub: [],
//   },
//   {
//     id: 'menu_05',
//     // path: '/board/notice',
//     path: `${userNoticePath}`,
//     name: '공지사항',
//     sub: [],
//   },
// ];
//
// //사용자 메뉴 - 상품 카테고리
// export const categoryMenus: Menus[] = [
//   {
//     id: 'menu_02_01',
//     name: '파스타',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_01_01', name: '롱파스타', path: '/product' },
//       { id: 'menu_02_01_02', name: '숏파스타', path: '/product' },
//       { id: 'menu_02_01_03', name: '에그파스타', path: '/product' },
//       { id: 'menu_02_01_04', name: '글루텐프리', path: '/product' },
//       { id: 'menu_02_01_05', name: '유기농 통밀', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_02',
//     path: '/product',
//     name: '밀가루',
//     sub: [
//       { id: 'menu_02_02_01', name: '밀가루', path: '/product' },
//       { id: 'menu_02_02_02', name: '식품첨가물', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_03',
//     name: '유가공품(치즈 등)',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_03_01', name: '생치즈', path: '/product' },
//       {
//         id: 'menu_02_03_02',
//         name: '연질@반경성 치즈',
//         path: '/product',
//       },
//       { id: 'menu_02_03_03', name: '경성치즈', path: '/product' },
//       { id: 'menu_02_03_04', name: '블루치즈', path: '/product' },
//       { id: 'menu_02_03_05', name: '냉동치즈', path: '/product' },
//       { id: 'menu_02_03_06', name: '우유&생크림', path: '/product' },
//       { id: 'menu_02_03_07', name: '버터', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_04',
//     name: '식초&소스',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_04_01', name: '식초', path: '/product' },
//       { id: 'menu_02_04_02', name: '소스', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_05',
//     name: '오일',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_05_01', name: '압착 올리브유', path: '/product' },
//       { id: 'menu_02_05_02', name: '정제 올리브유', path: '/product' },
//       { id: 'menu_02_05_03', name: '기타 오일', path: '/product' },
//       { id: 'menu_02_05_04', name: '가향 오일', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_06',
//     name: '조미료&향신료',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_06_01', name: '조미료&소금', path: '/product' },
//       { id: 'menu_02_06_02', name: '향신료', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_07',
//     name: '육류&육가공품',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_07_01', name: '생햄', path: '/product' },
//       { id: 'menu_02_07_02', name: '소시지&햄', path: '/product' },
//       { id: 'menu_02_07_03', name: '육류', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_08',
//     name: '수산물&수산가공품',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_08_01', name: '어란(생선알)', path: '/product' },
//       { id: 'menu_02_08_02', name: '수산물가공품', path: '/product' },
//       { id: 'menu_02_08_03', name: '냉동수산물', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_09',
//     name: '곡류가공품',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_09_01', name: '리조또', path: '/product' },
//       { id: 'menu_02_09_02', name: '두유&견과류', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_10',
//     name: '과채가공품',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_10_01', name: '과채가공품', path: '/product' },
//       { id: 'menu_02_10_02', name: '토마토통조림', path: '/product' },
//       { id: 'menu_02_10_03', name: '올리브', path: '/product' },
//       { id: 'menu_02_10_04', name: '버섯류', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_11',
//     name: '기타가공품',
//     path: '/product',
//     sub: [{ id: 'menu_02_11_01', name: '기타가공품', path: '/product' }],
//   },
//   {
//     id: 'menu_02_12',
//     name: '트러플',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_12_01', name: '트러플', path: '/product' },
//       { id: 'menu_02_12_02', name: '트러플가공품', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_13',
//     name: '캐비어',
//     path: '/product',
//     sub: [
//       {
//         id: 'menu_02_12_01',
//         name: '캐비어(철갑상어알)',
//         path: '/product',
//       },
//       { id: 'menu_02_12_02', name: '인조캐비어', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_13',
//     name: '푸아그라(가금류)',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_13_01', name: '푸아그라', path: '/product' },
//       { id: 'menu_02_13_02', name: '가금류가공품', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_14',
//     name: '분자요리',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_14_01', name: '분자요리요소', path: '/product' },
//       { id: 'menu_02_14_02', name: '도구', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_15',
//     name: '기구',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_15_01', name: '주방기구', path: '/product' },
//       { id: 'menu_02_15_02', name: '피자전용', path: '/product' },
//       { id: 'menu_02_15_03', name: '식기', path: '/product' },
//       { id: 'menu_02_15_04', name: '거치대', path: '/product' },
//       { id: 'menu_02_15_05', name: '박스케이스', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_16',
//     name: '냉동식품',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_16_01', name: '냉동피자', path: '/product' },
//       { id: 'menu_02_16_02', name: '냉동라비올라', path: '/product' },
//     ],
//   },
//   {
//     id: 'menu_02_17',
//     name: '카테고리',
//     path: '/product',
//     sub: [
//       { id: 'menu_02_17_01', name: '카테고리내용01', path: '/product' },
//       { id: 'menu_02_17_02', name: '카테고리내용02', path: '/product' },
//     ],
//   },
// ];
//
// //admin 메뉴 - 모바일
// export const adminMenuListMO: Menus[] = [
//   {
//     id: 'menu_01',
//     // path: '/admin',
//     path: adminMainPath,
//     name: '홈',
//   },
//   {
//     id: 'menu_02',
//     // path: '/admin/correspondent',
//     path: `${adminMainPath}/${adminCorrespondentPath}`,
//     name: '거래처',
//   },
//   {
//     id: 'menu_03',
//     // path: '/admin/product',
//     path: `${adminMainPath}/${adminProductPath}`,
//     name: '상품',
//   },
//   {
//     id: 'menu_04',
//     // path: '/admin/favorites',
//     path: `${adminMainPath}/${adminFavoritesPath}`,
//     name: '즐겨찾기',
//   },
//   {
//     id: 'menu_05',
//     // path: '/admin/reqboard',
//     path: `${adminMainPath}/${adminReqBoardPath}`,
//     name: '문의하기',
//   },
//   {
//     id: 'menu_06',
//     // path: '/admin/reqboard',
//     path: `${adminMainPath}/${adminReqBoardPath}`,
//     name: '회원가입 신청현황',
//   },
// ];

//admin 메뉴 - PC
export const adminMenuListPC: Menus[] = [
  {
    id: 'menu_01',
    // path: '/admin',
    path: `${adminMainPath}`,
    name: '메인',
    sub: [],
  },
  {
    id: 'menu_02',
    path: '',
    name: '주문 관리',
    sub: [
      {
        id: 'menu_02_01',
        // path: '/admin/order'
        path: `${adminMainPath}/${adminOrderPath}`,
        name: '주문 목록',
      },
      {
        id: 'menu_02_02',
        // path: '/admin/order/setting',
        path: `${adminMainPath}/${adminOrderSettingPath}`,
        name: '주문 조건 설정',
      },
    ],
  },
  {
    id: 'menu_03',
    path: '',
    name: '상품 관리',
    sub: [
      {
        id: 'menu_03_01',
        // path: '/admin/product',
        path: `${adminMainPath}/${adminProductPath}`,
        name: '상품 목록',
      },
      {
        id: 'menu_03_02',
        // path: '/admin/product/categorysetting',
        path: `${adminMainPath}/${adminProductCategorySettingPath}`,
        name: '카테고리 설정',
      },
      {
        id: 'menu_03_03',
        // path: '/admin/product/searchgroup',
        path: `${adminMainPath}/${adminProductSearchGroupPath}`,
        name: '검색색인어 그룹관리',
      },
      {
        id: 'menu_03_04',
        // path: '/admin/product/promotionsetting',
        path: `${adminMainPath}/${adminProductPromotionSettingPath}`,
        name: '1+1 / 프로모션 설정',
      },
      {
        id: 'menu_03_05',
        // path: '/admin/product/deliveryreservationsamplesetting',
        path: `${adminMainPath}/${adminProductDeliverySampleSettingPath}`,
        name: '배송예약일 샘플신청 설정',
      },
      {
        id: 'menu_03_06',
        // path: '/admin/product/sampleproductsetting',
        path: `${adminMainPath}/${adminProductSampleProductSettingPath}`,
        name: '샘플신청 상품 설정',
      },
      {
        id: 'menu_03_07',
        // path: '/admin/product/relatedalternative',
        path: `${adminMainPath}/${adminProductRelatedAlternativeSettingPath}`,
        name: '연관상품 / 대체상품 설정',
      },
      {
        id: 'menu_03_08',
        // path: '/admin/product/badgesetting',
        path: `${adminMainPath}/${adminProductBadgeSettingPath}`,
        name: '뱃지 설정',
      },
    ],
  },
  {
    id: 'menu_04',
    path: '',
    name: '거래처 관리',
    sub: [
      {
        id: 'menu_04_01',
        // path: '/admin/correspondent',
        path: `${adminMainPath}/${adminCorrespondentPath}`,
        name: '거래처 목록',
      },
      {
        id: 'menu_04_02',
        // path: '/admin/correspondent/pamentsetting',
        path: `${adminMainPath}/${adminCorrespondentPaymentSettingPath}`,
        name: '결제 설정',
      },
      {
        id: 'menu_04_03',
        // path: '/admin/correspondent/quantitydeliverycoursesetting',
        path: `${adminMainPath}/${adminCorrespondentQuantityDeliveryCourseSettingPath}`,
        name: '입수량 및 배송코스 설정',
      },
    ],
  },
  {
    id: 'menu_05',
    path: '',
    name: '통계',
    sub: [
      {
        id: 'menu_05_01',
        // path: '/admin/statistics/nondeliveryshortagestatus',
        path: `${adminMainPath}/${adminStatisticsNonDeliveryShortageStatusPath}`,
        name: '미출고 및 결품현황',
      },
      {
        id: 'menu_05_02',
        // path: '/admin/statistics/orderquantityranking',
        path: `${adminMainPath}/${adminStatisticsOrderQuantityRankingPath}`,
        name: '주문수량 순위',
      },
      {
        id: 'menu_05_03',
        // path: '/admin/statistics/orderstatusbyperiod',
        path: `${adminMainPath}/${adminStatisticsOrderStatusByPeriodPath}`,
        name: '기간별 주문 현황',
      },
      {
        id: 'menu_05_04',
        // path: '/admin/statistics/monthnewcorrespondentstatus',
        path: `${adminMainPath}/${adminStatisticsMonthNewCorrespondentStatusPath}`,
        name: '월별 신규회원 현황',
      },
      {
        id: 'menu_05_05',
        // path: '/admin/statistics/monthnewordercorrespondentstatus',
        path: `${adminMainPath}/${adminStatisticsMonthNewOrderCorrespondentStatusPath}`,
        name: '월별 신규주문 거래처 현황',
      },
    ],
  },
  {
    id: 'menu_06',
    path: '',
    name: '문의하기',
    sub: [
      {
        id: 'menu_06_01',
        // path: '/admin/reqboard/faq',
        path: `${adminMainPath}/${adminReqBoardFaqPath}`,
        name: 'FAQ 관리',
      },
      {
        id: 'menu_06_02',
        // path: '/admin/reqboard',
        path: `${adminMainPath}/${adminReqBoardPath}`,
        name: '문의 목록',
      },
      {
        id: 'menu_06_03',
        // path: '/admin/reqboard/statistics',
        path: `${adminMainPath}/${adminReqBoardStatisticsPath}`,
        name: '통계',
      },
    ],
  },
  {
    id: 'menu_07',
    path: '',
    name: '게시판 관리',
    sub: [
      {
        id: 'menu_07_01',
        // path: '/admin/board/notice',
        path: `${adminMainPath}/${adminBoardNoticePath}`,
        name: '공지사항',
      },
      {
        id: 'menu_07_02',
        // path: '/admin/board/Terms',
        path: `${adminMainPath}/${adminBoardTermsPath}`,
        name: '이용약관',
      },
      {
        id: 'menu_07_03',
        // path: '/admin/board/privacyTerms',
        path: `${adminMainPath}/${adminBoardPrivacyTermsPath}`,
        name: '개인정보처리방침',
      },
      {
        id: 'menu_07_04',
        // path: '/admin/board/ebanking',
        path: `${adminMainPath}/${adminBoardEBankingPath}`,
        name: '전자금융거래 이용약관',
      },
    ],
  },
  {
    id: 'menu_08',
    // path: '/admin/brand',
    path: `${adminMainPath}/${adminBrandPath}`,
    name: '브랜드 관리',
    sub: [],
  },
  {
    id: 'menu_09',
    // path: '/admin/exhibition',
    path: `${adminMainPath}/${adminExhibitionPath}`,
    name: '기획전 관리',
    sub: [],
  },
  {
    id: 'menu_10',
    path: '',
    name: '알림톡 관리',
    sub: [
      {
        id: 'menu_10_01',
        // path: '/admin/alimtalk',
        path: `${adminMainPath}/${adminAlimTalkPath}`,
        name: '알림톡 관리',
      },
      {
        id: 'menu_10_02',
        // path: '/admin/alimtalk/send',
        path: `${adminMainPath}/${adminAlimTalkSendPath}`,
        name: '알림톡 보내기',
      },
      {
        id: 'menu_10_03',
        // path: '/admin/alimtalk/messagesend',
        path: `${adminMainPath}/${adminAlimTalkMessageSendPath}`,
        name: '메시지 발송 내역',
      },
    ],
  },
  {
    id: 'menu_11',
    path: '',
    name: '메인 노출 관리',
    sub: [
      {
        id: 'menu_11_01',
        // path: '/admin/mainview/popup',
        path: `${adminMainPath}/${adminMainViewPopupPath}`,
        name: '메인 팝업',
      },
      {
        id: 'menu_11_02',
        // path: '/admin/mainview/banner',
        path: `${adminMainPath}/${adminMainViewBannerPath}`,
        name: '메인 배너',
      },
      {
        id: 'menu_11_03',
        // path: '/admin/mainview/recommendedsearch',
        path: `${adminMainPath}/${adminMainViewRecommendedSearchPath}`,
        name: '추천 검색어',
      },
      {
        id: 'menu_11_04',
        // path: '/admin/mainview/content',
        path: `${adminMainPath}/${adminMainViewContentPath}`,
        name: '메인 콘텐츠 운영',
      },
    ],
  },
  {
    id: 'menu_12',
    path: '',
    name: '운영자 관리',
    sub: [
      {
        id: 'menu_12_01',
        // path: '/admin/operatormanagement/authority',
        path: `${adminMainPath}/${adminOperatorManagementAuthorityPath}`,
        name: '권한 관리',
      },
      {
        id: 'menu_12_02',
        // path: '/admin/operatormanagement',
        path: `${adminMainPath}/${adminOperatorManagementPath}`,
        name: '운영자 관리',
      },
      {
        id: 'menu_12_03',
        // path: '/admin/operatormanagement/delivery',
        path: `${adminMainPath}/${adminOperatorManagementDeliveryPath}`,
        name: '배송기사 관리',
      },
      {
        id: 'menu_12_03',
        // path: '/admin/operatormanagement/commoncode',
        path: `${adminMainPath}/${adminOperatorManagementCommonCodePath}`,
        name: '공통코드 관리',
      },

      {
        id: 'menu_12_04',
        // path: '/admin/operatormanagement/company',
        path: `${adminMainPath}/${adminOperatorManagementCompanyPath}`,
        name: '회사 기본정보 관리',
      },
    ],
  },
  {
    id: 'menu_13',
    // path: '/admin/mypage',
    path: `${adminMainPath}/${adminMypagePath}`,
    name: '마이페이지',
    sub: [],
  },
  {
    id: 'menu_14',
    // path: '/admin/favorites',
    path: `${adminMainPath}/${adminFavoritesPath}`,
    name: '즐겨찾기',
    sub: [],
  },
];
