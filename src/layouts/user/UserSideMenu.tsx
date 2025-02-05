import React from 'react';
import { Link } from 'react-router-dom';
import "src/assets/css/common.css";

export default function UserSideMenu() {
    return (
        <aside className="user-side-menu">
            <ul className="menu-list">
                <li>
                    <Link to="/checkout" className="menu-link">
                        도서 대여
                    </Link>
                </li>
                <li>
                    <Link to="/return" className="menu-link">
                        도서 반납
                    </Link>
                </li>
                <li>
                    <Link to="/history" className="menu-link">
                        도서 대여 조회
                    </Link>
                </li>
                <li>
                    <Link to="/guide" className="menu-link">
                        이용안내
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
