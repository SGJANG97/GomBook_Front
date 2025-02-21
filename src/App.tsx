import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';

// import { handleIsMobile } from 'src/utils/mobile';
// import { useLoginStatusHandler } from 'src/hooks/useLoginStatus';
import { routes } from 'src/routes/routes';
// import { storeAdminUser } from 'src/lib/store/adminUserStore';
// import { storeUser } from 'src/lib/store/userStore';
// import { useAuth } from 'src/hooks/useAuth';
import {
  adminLoginPath,
  adminMainPath,
  userLoginPath,
  userMypagePasswordChangePath,
} from 'src/routes/path';

// import CommonCallModal from 'src/components/modal/CommonCallModal';

import 'src/assets/css/reset.css';
import 'src/assets/css/common.css';
import 'src/assets/css/admin_common.css';

Buffer.from('anything', 'base64');
window.Buffer = window.Buffer || require('buffer').Buffer;

export default function App() {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  //store: user 상태관리
  // const user = storeUser();
  // const adminUser = storeAdminUser();
  //
  // const isTokenExp = useAuth();
  //
  // //FN: mobile 여부
  // const isMobile = handleIsMobile();
  //
  // const useLoginStatus = useLoginStatusHandler();
  // const useAdminLoginStatus = useLoginStatusHandler();

  // token 만료체크
  // useEffect(() => {
  //   if (isMobile) {
  //     console.log('모바일 장치입니다.');
  //     document.getElementsByTagName('html')[0].classList.add('mob');
  //   } else {
  //     console.log('PC입니다.');
  //   }
  //
  //   if (pathname.startsWith(adminMainPath)) {
  //     //admin token 만료 체크
  //     const dminisTokenExp = isTokenExp.adminAuthCheck();
  //
  //     if (dminisTokenExp.status) {
  //       navigate(pathname);
  //     } else {
  //       if (adminUser === null && pathname !== adminLoginPath) {
  //         useAdminLoginStatus.handleClickLoginStatus(
  //             adminUser,
  //             pathname + search,
  //             pathname + search,
  //             dminisTokenExp.message
  //         );
  //       }
  //     }
  //   } else {
  //     //user token 만료 체크
  //     const userIsTokenExp = isTokenExp.userAuthCheck();
  //
  //     if (userIsTokenExp.status) {
  //       navigate(pathname);
  //     } else {
  //       if (user === null && pathname !== '/' + userLoginPath) {
  //         useLoginStatus.handleClickLoginStatus(
  //             user,
  //             pathname + search,
  //             pathname + search,
  //             userIsTokenExp.message
  //         );
  //       } else {
  //         // user가 임시비밀번호를 가지고 있을시 비밀번호 확인 화면을 띄워줌.
  //         //비밀번호 확인
  //         navigate(userMypagePasswordChangePath);
  //       }
  //     }
  //   }
  //
  //   return () => {
  //     document.documentElement.classList.remove('mob');
  //   };
  // }, []);

  return (
      <>
        {/* login check */}
        {pathname.startsWith(adminMainPath) &&
        // !adminUser &&
        pathname !== adminLoginPath ? (
            <></>
        ) : (
            <Routes>
              {routes.map((route, idx) => (
                  <Route key={idx} path={route.path} element={route.element}>
                    {route.children &&
                        route.children.map((child, childIdx) => (
                            <Route
                                key={`${idx}-${childIdx}`}
                                path={child.path}
                                element={child.element}
                            />
                        ))}
                  </Route>
              ))}
            </Routes>
        )}

        {/* 모달창 호출 */}
        {/*<CommonCallModal />*/}
      </>
  );
}
