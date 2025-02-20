import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { storeUser } from 'src/lib/store/userStore';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { handleIsMobile } from 'src/utils/mobile';
import { useLoginStatusHandler } from 'src/hooks/useLoginStatus';
import { useOpenModalHandler } from 'src/hooks/useOpenModal';
import { userMenuListMO, userMenuListPC } from 'src/data/menuData';
// import { menuListMapping } from 'src/utils/menuMapping';
import {
  userBrandPath,
  userReqBoardPath,
  userEBankingPath,
  userLoginPath,
  userMainPath,
  // userMemberJoinInfoPath,
  userMemberJoinPath,
  userReqBoardFaqPath,
  userMypagePath,
  userNoticeDetailPath,
  userNoticePath,
  userMypagePasswordChangePath,
  userTermsPath,
  userPrivacyTermsPath,
  userExhibitionPath,
  userCartPath,
  userProductPath,
  userProductDetailPath,
  userQuickOrderPath,
} from 'src/routes/path';

import SearchContent from 'src/components/modal/SearchModal';
import UserFooterMO from 'src/layouts/user/UserFooterMO';
import UserMenuPC from 'src/layouts/user/UserMenuPC';
// import UserMenuMO from 'src/layouts/user/UserMenuMO';

// import logo from 'src/assets/images/icon_logo2.png';
import logo from 'src/assets/images/icon_logo_case9.svg';

export default function UserHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  //store: user 상태관리
  const user = storeUser();

  //FN: mobile 여부
  const isMobile = handleIsMobile();

  /* 경로에 따라 모바일 헤더의 아이콘이 변경되어야할 화면 목록 */
  // 아이콘 없는 페이지(로그인, 회원가입, 로그인 전 모든 화면)
  const noIcon = [userLoginPath, userMemberJoinPath];
  // 장바구니 아이콘
  const cartIcon = [
    userMainPath, //메인
    userMypagePasswordChangePath, //비밀번호 변경
    // userMemberJoinInfoPath, //회원가입 안내
    userBrandPath, //브랜드
    userTermsPath, //이용약관
    userEBankingPath, //전자금융거래이용약관
    userPrivacyTermsPath, //개인정보처리방침
    // userOrderCompletePath, // 주문완료
    userReqBoardFaqPath, // FAQ
    userNoticePath, // 공지사항
    userNoticeDetailPath, //공지사항 상세
    userReqBoardPath, // 문의하기
    userExhibitionPath, // 기획전
    userMypagePath, // 마이페이지
  ];
  // home 아이콘(장바구니, 상품카테고리, 상품상세, 바로주문)
  const homeIcon = [
    userCartPath,
    userProductPath,
    userProductDetailPath,
    userQuickOrderPath,
  ];

  const [title, setTitle] = useState<string>('');
  // 메뉴 경로 제목
  // useEffect(() => {
  //   if (isMobile) {
  //     // mobile
  //     const newMenuListMo = menuListMapping(userMenuListMO);
  //     newMenuListMo.map((item) => {
  //       '/' + item.path.toString() === pathname && setTitle(item.name);
  //     });
  //   } else {
  //     //pc
  //     const newMenuListPC = menuListMapping(userMenuListPC);
  //     newMenuListPC.map((item) => {
  //       '/' + item.path.toString() === pathname && setTitle(item.name);
  //     });
  //   }
  // }, [pathname]);

  const useLoginStatus = useLoginStatusHandler();
  //FN: 로그인 상태별 router
  const handleClickLink = handleClickPreventDefault((path: string) => {
    useLoginStatus.handleClickLoginStatus(user, path, pathname);
  });

  //search modal
  const searchModal = useOpenModalHandler();

  //mobile menu
  const [mobileMenuModalOpen, setMobileMenuModalOpen] =
    useState<boolean>(false);
  //FN: mobile menu open
  const handleClickMobileMenuModalOpen = handleClickPreventDefault(() => {
    setMobileMenuModalOpen(true);
  });
  //FN: mobile menu close
  const handleClickMobileMenuModalClose = () => {
    setMobileMenuModalOpen(false);
  };
  //FN: mobile 뒤로가기
  const handleClickBackLink = handleClickPreventDefault(() => {
    navigate(-1);
  });

  //장바구니 total count API 호출
  const [cartTotalCount, setCartTotalCount] = useState<number>(0);

  return (
    <>
      {!user && (
        <div className="t-banner">
          <p>
            지식을 넓히는 첫걸음!{' '}
            {/* {isMobile && <br />} */}
            사내문고 서비스에 로그인하고 다양한 도서를 만나보세요.{' '}
            <Link to={`/${userLoginPath}`}>로그인하기</Link>
          </p>
        </div>
      )}

      {/* PC */}
      <header className="show-pc">
        <div className="header">
          <div className="inner-content">
            <div className="top">
              <div className="logo">
                <Link to={userMainPath}>
                  <img src={logo} alt="" />
                </Link>
              </div>

              <div className="right-menu">
                {/*<Link*/}
                {/*  to=""*/}
                {/*  className="order"*/}
                {/*  onClick={(e) => handleClickLink(e, userQuickOrderPath)}*/}
                {/*>*/}
                {/*  바로주문*/}
                {/*</Link>*/}
                <Link
                  to=""
                  className="search-btn"
                  onClick={searchModal.handleClickModalOpen}
                >
                  검색
                </Link>

                <Link
                  to=""
                  className="mypage"
                  onClick={(e) => handleClickLink(e, userMypagePath)}
                >
                  마이페이지
                </Link>

                <Link
                  to=""
                  className="cart"
                  onClick={(e) => handleClickLink(e, userCartPath)}
                >
                  장바구니
                  <span>{cartTotalCount}</span>
                </Link>
              </div>
            </div>
          </div>

          <UserMenuPC />
        </div>
      </header>

      {/* 모바일 */}
      <header className="show-mo">
        <div className="header">
          <div className="inner-content sub">
            <div className="top">
              {pathname.toString() === userMainPath ? (
                // 메인 페이지만 로고
                <div className="logo">
                  <Link to={userMainPath}>
                    <img src={logo} alt="" />
                  </Link>
                </div>
              ) : (
                <>
                  {/* 뒤로가기 */}
                  <Link to="" className="back" onClick={handleClickBackLink} />
                  {/* 화면 경로 제목 */}
                  <p className="cate">{title}</p>
                </>
              )}
              {/* 장바구니 */}
              <div className="right-menu">
                <Link to="" className="cart">
                  <span>{cartTotalCount}</span>
                </Link>
              </div>
            </div>
          </div>

          {/*{mobileMenuModalOpen && (*/}
          {/*  <UserMenuMO*/}
          {/*    modalOpen={mobileMenuModalOpen}*/}
          {/*    onClickCallback={handleClickMobileMenuModalClose}*/}
          {/*  />*/}
          {/*)}*/}
        </div>
      </header>

      {/* 검색어 */}
      <SearchContent
        modalOpen={searchModal.modalOpen}
        onClickCallback={searchModal.handleClickModalClose}
      />

      <UserFooterMO
        modalOpen={mobileMenuModalOpen}
        onClickCallback={handleClickMobileMenuModalOpen}
      />
    </>
  );
}
