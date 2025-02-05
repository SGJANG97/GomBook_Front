import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import UserHeader from 'src/layouts/user/UserHeader';
import UserFooter from 'src/layouts/user/UserFooter';
import UserSideMenu from 'src/layouts/user/UserSideMenu';

import "src/assets/css/common.css";

export default function UserLayout() {
    const footerRef = useRef<HTMLDivElement>(null);
    const location = useLocation(); // 현재 URL 확인

    // 로그인 페이지 여부 확인
    const isLoginPage = location.pathname === "/login";

    return (
        <>
            <UserHeader />
            <div className="layout">
                <div className="main-content">
                    {/* 로그인 페이지가 아닐 때만 사이드 메뉴 표시 */}
                    {!isLoginPage && <UserSideMenu />}

                    {/* 로그인 페이지에서는 중앙 정렬된 컨테이너 적용 */}
                    {isLoginPage ? (
                        <div className="login-container">
                            <Outlet />
                        </div>
                    ) : (
                        <div className="content-wrap">
                            <Outlet />
                        </div>
                    )}
                </div>
            </div>
            <UserFooter ref={footerRef} />
        </>
    );
}
