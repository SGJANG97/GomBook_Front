import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { storeUser } from 'src/lib/store/userStore';
import { userMenuListPC } from 'src/data/menuData';
import { menuListMapping } from 'src/utils/menuMapping';
import { useLoginStatusHandler } from 'src/hooks/useLoginStatus';
import { handleClickPreventDefault } from 'src/utils/commonHandler';

import UserLoginLogout from 'src/layouts/user/UserLoginLogout';
import { userReqBoardPath, userExhibitionPath } from 'src/routes/path';

export default function UserMenuPC() {
  const { pathname } = useLocation();

  //store: user 상태관리
  const user = storeUser();

  //menu list
  const newMenuList = menuListMapping(userMenuListPC);

  const useLoginStatus = useLoginStatusHandler();
  //FN: 로그인 상태별 router
  const handleClickLink = handleClickPreventDefault((path: string) => {
    // 여기서 메뉴 목록 빼야할것 같은데....
    // ::after
    // document.documentElement.classList.remove('mob');
    useLoginStatus.handleClickLoginStatus(user, path, pathname);
  });

  //FN: 언어변경 (KR->EN, EN->KR)
  const [lang, setLang] = useState<string>('EN');
  const handleClickLang = handleClickPreventDefault(() => {
    setLang(lang === 'EN' ? 'KR' : 'EN');
  });

  return (
    <>
      <div className="header-menu">
        <div className="inner-content">
          <div className="left-menu">
            <ul>
              {newMenuList?.map((oneDepth, oneIndex) => (
                <li
                  className={pathname.includes(oneDepth.path) ? 'active' : ''}
                  key={oneIndex}
                >
                  <Link
                    to=""
                    onClick={(e) => handleClickLink(e, oneDepth.path)}
                    className={`${oneDepth.path === `/${userExhibitionPath}` ? 'new' : ''}`}
                  >
                    {oneDepth.name}
                  </Link>
                  {oneDepth.sub && oneDepth.sub.length > 0 && (
                    <div className="depth2">
                      <div className="inner-content">
                        {oneDepth.sub?.map((twoDepth, twoIndex) => (
                          <div className="wrap" key={`${oneIndex}-${twoIndex}`}>
                            <Link
                              to=""
                              onClick={(e) => handleClickLink(e, twoDepth.path)}
                            >
                              {twoDepth.name}
                            </Link>
                            {twoDepth.sub &&
                              twoDepth.sub.length > 0 &&
                              twoDepth.sub.map((threeDepth, threeIndex) => (
                                <Link
                                  to=""
                                  onClick={(e) =>
                                    handleClickLink(e, threeDepth.path)
                                  }
                                  key={`${oneIndex}-${twoIndex}-${threeIndex}`}
                                >
                                  {threeDepth.name}
                                </Link>
                              ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="right-menu">
            {/* 로그인/로그아웃 */}
            <UserLoginLogout />

            <Link
              to=""
              onClick={(e) => handleClickLink(e, `${userReqBoardPath}`)}
            >
              문의하기
            </Link>
            <Link to={''} onClick={handleClickLang}>
              {lang}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
