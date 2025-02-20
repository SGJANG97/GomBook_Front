import NotFound from 'src/pages/NotFound';

// 화면 - User view
import UserLayout from 'src/layouts/user/UserLayout';
import Login from 'src/pages/Login';
import Main from 'src/pages/_user/main';
import Book from 'src/pages/_user/book';
import Faq from 'src/pages/_user/reqboard/faq';
import Notice from 'src/pages/_user/board/notice';
import NoticeDetail from 'src/pages/_user/board/notice/[id]';

// 화면 - Admin view
import AdminLayout from 'src/layouts/admin/AdminLayout';
import AdminMain from 'src/pages/admin/main';

// 화면 경로 path
import {
  // admin
  adminMainPath,
  adminLoginPath,
  // user,
  userLoginPath,
  userBookPath,
  userReqBoardFaqPath,
  userNoticePath,
  userNoticeDetailPath,
} from 'src/routes/path';

export const routes = [
  // 어드민 라우터
  {
    path: adminMainPath,
    element: <AdminLayout />,
    children: [
      { path: '', name: '어드민 메인', element: <AdminMain />, auth: true },
    ],
  },
  // user 라우터
  {
    path: '/',
    element: <UserLayout />,
    children: [
      { path: '', name: '메인', element: <Main /> },
      { path: userLoginPath, name: '사용자 로그인', element: <Login /> },
      { path: userBookPath, name: '도서', element: <Book /> },
      { path: userReqBoardFaqPath, name: 'FAQ', element: <Faq />, auth: true },
      { path: userNoticePath, name: '공지사항', element: <Notice /> },
      { path: userNoticeDetailPath, name: '공지사항 상세', element: <NoticeDetail />, },
    ],
  },
  // 배송기사 라우터

  //header, footer X
  { path: adminLoginPath, name: '어드민 로그인', element: <Login /> },
  { path: '/*', name: '오류', element: <NotFound /> },
];
