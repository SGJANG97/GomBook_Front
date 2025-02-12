import React from 'react';

//화면 - User View
import UserLayout from "../layouts/user/UserLayout";
import Main from "../pages/user/main";
import Book from "../pages/user/book";
import BookDetail from "../pages/user/book/[id]"
import Login from 'src/pages/Login';

import {
    userMainPath,
    userLoginPath,
    userBookPath,
    userBookDetailPath
} from "./path";

export const routes = [
    {
        path: '/',
        element: <UserLayout />,
        children: [
            { path: userMainPath, name: '메인', element: <Main /> }, // 여기서 명확하게 '/' 경로를 지정
            { path: userLoginPath, name: '로그인', element: <Login /> },
            { path: userBookPath, name: '도서', element: <Book /> },
            { path: userBookDetailPath, name: '도서 상세', element: <BookDetail /> }, // 도서 상세 페이지 추가
        ]
    }
];
