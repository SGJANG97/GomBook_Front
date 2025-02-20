import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useLoginStatusHandler } from 'src/hooks/useLoginStatus';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { storeUser } from 'src/lib/store/userStore';
import {
  userMainPath,
  userMypagePath,
  userQuickOrderPath,
} from 'src/routes/path';

import SearchContent from 'src/components/modal/SearchModal';

interface Props {
  modalOpen: boolean;
  onClickCallback?: () => void;
}

export default function UserFooterMO(props: Props) {
  /* 경로에 따라 모바일 풋터의 메뉴 또는 버튼으로 변경되어야할 목록 */
  // 하단 메뉴가 있어야하는 화면 목록
  // 주문확정 버튼이 있어야하는 화면 목록
  // 장바구니 버튼이 있어야하는 화면 목록
  // 장바구니,즐겨찾기가 있어야하는 화면 목록

  const { pathname } = useLocation();

  const { modalOpen, onClickCallback } = props;
  //store: user 상태관리
  const user = storeUser();

  const useLoginStatus = useLoginStatusHandler();
  //FN: 로그인 상태별 router
  const handleClickLink = handleClickPreventDefault((path: string) => {
    useLoginStatus.handleClickLoginStatus(user, path, pathname);
  });

  //search modal
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  //FN: search modal open
  const handleClickSearchModalOpen = handleClickPreventDefault(() => {
    setSearchModalOpen(true);
  });
  //FN: search modal close
  const handleClickSearchModalClose = () => {
    setSearchModalOpen(false);
  };

  const handleClickMenuOpen = handleClickPreventDefault(() => {
    onClickCallback?.();
  });

  return (
    <>
      {modalOpen && (
        <>
          <div className="bot-menu show-mo">
            <ul>
              <li className="header-open">
                <Link to="" onClick={handleClickMenuOpen}>
                  <img
                    src={require('src/assets/images/icon_menu.png')}
                    alt=""
                  />
                  <p>전체메뉴</p>
                </Link>
              </li>
              <li>
                <Link to="" onClick={(e) => handleClickLink(e, userMainPath)}>
                  <img
                    src={require('src/assets/images/icon_home.png')}
                    alt=""
                  />
                  <p>홈</p>
                </Link>
              </li>
              <li className="center">
                <Link
                  to=""
                  onClick={(e) => handleClickLink(e, userQuickOrderPath)}
                >
                  <img src={require('src/assets/images/icon_buy.png')} alt="" />
                  <p>바로주문</p>
                </Link>
              </li>
              <li>
                <Link to="" onClick={handleClickSearchModalOpen}>
                  <img
                    src={require('src/assets/images/icon_search.png')}
                    alt=""
                  />
                  <p>검색</p>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="mypage"
                  onClick={(e) => handleClickLink(e, userMypagePath)}
                >
                  <img
                    src={require('src/assets/images/icon_user.png')}
                    alt=""
                  />
                  <p>마이페이지</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* 검색어 */}
          <SearchContent
            modalOpen={searchModalOpen}
            onClickCallback={handleClickSearchModalClose}
          />
        </>
      )}
    </>
  );
}
