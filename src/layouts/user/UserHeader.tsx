import React from 'react';
import { Link } from 'react-router-dom';
import "src/assets/css/common.css";
import {
    userMainPath
} from 'src/routes/path';
import icon_logo from 'src/assets/images/icon_logo.svg';

export default function UserHeader() {
    return (
        <header className="user-header">
            <div className="user-header-inner">
                <div className="user-header-logo">
                    <Link to={userMainPath}>
                        <img src={icon_logo} alt="Logo" />
                    </Link>
                </div>
                <nav className="user-header-nav">
                    <Link to={userMainPath} className="nav-link">Home</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    {/*<Link to="/cart" className="nav-link">Cart</Link>*/}
                </nav>
            </div>
        </header>
    );
}
