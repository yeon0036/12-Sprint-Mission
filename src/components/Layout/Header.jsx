import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.svg";
import "./Header.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "var(--blue)" : undefined,
  };
=======
import Logo from "../../assets/images/logo/logo.svg";
=======
>>>>>>> c67bc75 (Sprint Mission 5 Final)
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.svg";
import "./Header.css";

function getLinkStyle({ isActive }) {
<<<<<<< HEAD
  return { color: isActive ? "var(--blue)" : undefined };
>>>>>>> f80040d (fixed)
=======
  return {
    color: isActive ? "var(--blue)" : undefined,
  };
>>>>>>> c67bc75 (Sprint Mission 5 Final)
}

function Header() {
  return (
    <header className="globalHeader">
      <div className="headerLeft">
<<<<<<< HEAD
<<<<<<< HEAD
        <Link to="/" className="headerLogo">
          <img src={Logo} alt="판다마켓 로고" />
        </Link>
=======
        <Link to="/" className="headerLogo" aria-label="홈으로 이동">
          <img src={Logo} alt="판다마켓 로고" width="153" />
        </Link>

>>>>>>> f80040d (fixed)
=======
        <Link to="/" className="headerLogo">
          <img src={Logo} alt="판다마켓 로고" />
        </Link>
>>>>>>> c67bc75 (Sprint Mission 5 Final)
        <nav>
          <ul>
            <li>
              <NavLink to="/community" style={getLinkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
<<<<<<< HEAD
<<<<<<< HEAD
              <NavLink to="/item" style={getLinkStyle}>
=======
              <NavLink to="/items" style={getLinkStyle}>
>>>>>>> f80040d (fixed)
=======
              <NavLink to="/item" style={getLinkStyle}>
>>>>>>> c67bc75 (Sprint Mission 5 Final)
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

      <Link to="/login" className="loginLink button">
        로그인
      </Link>
>>>>>>> f80040d (fixed)
=======
>>>>>>> c67bc75 (Sprint Mission 5 Final)
    </header>
  );
}

export default Header;
