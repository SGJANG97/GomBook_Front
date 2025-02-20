import {
  storeAdminUser,
  storeAdminUserActions,
} from 'src/lib/store/adminUserStore';
import { storeUser, storeUserActions } from 'src/lib/store/userStore';
import { UserAuth } from 'src/models/user/UserAuth';
import { removeAuth } from 'src/utils/localStorage';

//FN: token 만료체크
export const useAuth = () => {
  //store: user 상태관리
  const userAction = storeUserActions();
  const userStore = storeUser();

  //store: admin 상태관리
  const adminUserAction = storeAdminUserActions();
  const adminUserStore = storeAdminUser();

  const userAuthCheck = () => {
    const currentTime = Math.floor(Date.now() / 1000); // 현재 시간을 초 단위로 변환

    const userInfo = localStorage.getItem('userInfo') || '';
    const auth = localStorage.getItem('userAuth') || '';

    if (userInfo && auth) {
      const user: UserAuth = JSON.parse(userInfo);
      if (userStore === null || userStore === undefined) {
        userAction.setUser(user);
      }
      // !userStore && userAction.setUser(user);
      const userExp = user?.exp || 0; // user.exp는 초 단위로 되어 있다고 가정

      if (currentTime > userExp) {
        // alert('토큰이 만료되었습니다.');
        //localstrege 삭제
        removeAuth('user');
        //store 초기화
        userAction.setUser(null);
        return {
          status: false,
          auth: null,
          message: '토큰이 만료되었습니다.',
        };
      } else {
        console.log('user 토큰이 유효합니다.');
        return { status: true, auth: auth, message: '' };
      }
    } else {
      console.log('=== user 로그인 전 ===');
      return { status: false, auth: null, message: '' };
    }
  };

  const adminAuthCheck = () => {
    const currentTime = Math.floor(Date.now() / 1000); // 현재 시간을 초 단위로 변환

    const adminUserInfo = localStorage.getItem('adminUserInfo') || '';
    const adminAuth = localStorage.getItem('adminAuth') || '';

    if (adminUserInfo && adminAuth) {
      let adminUser: UserAuth | null = JSON.parse(adminUserInfo);

      if (adminUserStore === null || adminUserStore === undefined) {
        adminUserAction.setAdminUser(adminUser);
      }
      // !adminUserStore && adminUserAction.setAdminUser(adminUser);
      const userExp = adminUser?.exp || 0; // user.exp는 초 단위로 되어 있다고 가정

      console.log('currentTime: ', currentTime);
      console.log('userExp: ', userExp);

      if (currentTime > userExp) {
        // alert('토큰이 만료되었습니다.');
        //localstrege 삭제
        removeAuth('admin');
        //store 초기화
        console.log('admin 초기화');
        adminUserAction.setAdminUser(null);
        return {
          status: false,
          auth: null,
          message: '토큰이 만료되었습니다.',
        };
      } else {
        console.log('admin 토큰이 유효합니다.');
        return { status: true, auth: adminAuth, message: '' };
      }
    } else {
      console.log('=== admin 로그인 전 ===');
      return { status: false, auth: null, message: '' };
    }
  };

  return {
    userAuthCheck,
    adminAuthCheck,
  };
};
