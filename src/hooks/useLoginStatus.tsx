import { useNavigate } from 'react-router';
import { storeAdminAlertModalActions } from 'src/lib/store/adminAlertModalStore';
import { storeUserModalActions } from 'src/lib/store/userModalStore';

import { UserAuth } from 'src/models/user/UserAuth';
import {
  adminLoginPath,
  adminMainPath,
  userCartPath,
  userReqBoardCreatePath,
  userReqBoardDetailPath,
  userReqBoardPath,
  userLoginPath,
  userMypageMyInfoPath,
  userMypageOrderInfoPath,
  userMypagePasswordChangePath,
  userMypagePath,
  userMypageStatisticsPath,
  userMypageTransactionLedgerPath,
  userQuickOrderDiscountProductPath,
  userQuickOrderFavoritesProductPath,
  userQuickOrderOrderedProductPath,
  userQuickOrderPath,
} from 'src/routes/path';

//로그인 상태 핸들러
export const useLoginStatusHandler = () => {
  //store: admin alert modal 상태관리
  const adminAlertModalAction = storeAdminAlertModalActions();

  //store: user modal 상태관리
  const userModalAction = storeUserModalActions();

  const navigate = useNavigate();

  const handleClickLoginStatus = (
    user: UserAuth | null,
    path: string,
    redirectPath?: string,
    message?: string
  ) => {
    const userType = path.startsWith(adminMainPath) ? 'admin' : 'user';
    if (user) {
      navigate(path);
    } else {
      const protectedPaths = [
        userQuickOrderPath, //바로주문
        userQuickOrderOrderedProductPath, //바로주문 - 주문했던 상품
        userQuickOrderFavoritesProductPath, //바로주문 - 즐겨찾기 상품
        userQuickOrderDiscountProductPath, //바로주문 - 할인중인 상품
        userMypagePath, //마이페이지
        userMypageMyInfoPath, //마이페이지 - 내정보
        userMypageOrderInfoPath, //마이페이지 - 주문내역
        userMypageTransactionLedgerPath, //마이페이지 - 거래원장
        userMypageStatisticsPath, //마이페이지 - 통계
        userMypagePasswordChangePath, //마이페이지 - 비밀번호 변경
        userCartPath, //장바구니
        userReqBoardPath, //문의하기
        userReqBoardCreatePath, //문의하기 등록
        userReqBoardDetailPath, //문의하기 상세
      ];
      if (
        //user login check
        path &&
        protectedPaths.some((protectedPath) =>
          // path.startsWith(protectedPath)
          path.includes(protectedPath)
        )
      ) {
        userModalAction.setUserModal({
          type: 'confirm',
          headerTitle: '알림',
          modalOpen: true,
          content: (
            <>
              {message}
              로그인 회원만 이용 가능한 서비스입니다.
              <br />
              로그인 화면으로 이동하시겠습니까?
            </>
          ),
          onClickCancelCallback: () => {
            userModalAction.closeLastModal();
          },
          onClickOkCallback: () => {
            userModalAction.closeLastModal();
            if (!redirectPath?.includes(userLoginPath)) {
              navigate(`/${userLoginPath}?redirectPath=${redirectPath}`);
            }
          },
        });
      } else if (path && userType === 'admin') {
        adminAlertModalAction.setAdminAlertModal({
          modalOpen: true,
          message: (
            <>
              {message}
              로그인 회원만 이용 가능한 서비스입니다.
              <br />
              로그인 화면으로 이동하시겠습니까?
            </>
          ),
          path: !redirectPath?.includes(adminLoginPath)
            ? `${adminLoginPath}?redirectPath=${redirectPath}`
            : path,
        });
      } else if (path) {
        navigate(path);
      }
    }
  };

  return {
    handleClickLoginStatus,
  };
};
