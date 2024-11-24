import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavigationBar() {
  const link = useNavigate();

  return (
    <nav className="navbar">
      <Link
        to="/items"
        className={`nav-link ${
          link.pathname === "/items" ? "active-market" : ""
        }`}
      >
        자유게시판
      </Link>
      <Link
        to="/items"
        className={`nav-link ${
          link.pathname === "/items" ? "active-market" : ""
        }`}
      >
        중고마켓
      </Link>
    </nav>
  );
}

export default NavigationBar;
