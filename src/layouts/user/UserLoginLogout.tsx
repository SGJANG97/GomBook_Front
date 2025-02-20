import { Link, useLocation, useNavigate } from 'react-router-dom';

import { storeUser, storeUserActions } from 'src/lib/store/userStore';
import {
  userLoginPath,
  userMainPath,
  userMemberJoinPath,
  // userMemberJoinInfoPath,
} from 'src/routes/path';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { removeAuth } from 'src/utils/localStorage';

export default function UserLoginLogout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  //store: user 상태관리
  const user = storeUser();
  const userAction = storeUserActions();

  //FN: user name
  const handleClickUserName = handleClickPreventDefault(() => {
    console.log('userName');
  });
  //FN: 로그아웃
  const handleClickLogout = handleClickPreventDefault(async () => {
    // await APIPost(apiPostUserLogout()).then((res) => {
    //   if (res.code === 200) {
    userAction.setUser(null);
    removeAuth('user');
    navigate(userMainPath);
    console.log('로그아웃 되었습니다.');
    // }
    // });
  });

  return (
    <>
      {!user ? (
        <>
          {/* <!-- 로그인전 --> */}
          <Link to={`${userLoginPath}?redirectPath=${pathname}`}>로그인</Link>
          {/*<Link to={`${userMemberJoinPath}`}>사업자 회원가입</Link>*/}
        </>
      ) : (
        <>
          {/* <!-- 로그인후 --> */}
          <Link to="" onClick={handleClickUserName}>
            {user.userName} 님
          </Link>
          <Link to="" onClick={handleClickLogout}>
            로그아웃
          </Link>
        </>
      )}
    </>
  );
}
