import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.svg";
import "./Header.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "var(--blue)" : undefined,
  };
}

function Header() {
  return (
    <header className="globalHeader">
      <div className="headerLeft">
        <Link to="/" className="headerLogo">
          <img src={Logo} alt="판다마켓 로고" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/community" style={getLinkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to="/item" style={getLinkStyle}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
