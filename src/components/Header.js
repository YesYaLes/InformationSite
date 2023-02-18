import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const checkEl = document.getElementById("side-menu");
const Header = () => {
  const CheckOverflow = (event) => {
    document.body.style.overflowY === "hidden"
      ? (document.body.style.overflowY = "auto")
      : (document.body.style.overflowY = "hidden");
  };
  const closeNav = () => {
    setTimeout(() => {}, 500);
    checkEl.checked = false;
  };
  return (
    <>
      <header className="header">
        <Link className="logo" to={`/main`}>
          Logo
        </Link>

        <input
          className="side-menu"
          type="checkbox"
          id="side-menu"
          onClick={CheckOverflow}
        />
        <label className="hamb" htmlFor="side-menu">
          <span className="hamb-line"></span>
        </label>

        <nav className="nav1">
          <ul className="menu">
            <li className="header-item">
              <Link to={`/InformationSite`} onClick={closeNav}>
                Головна
              </Link>
            </li>
            <li className="header-item">
              <Link to={`/aboutUs`} onClick={closeNav}>
                Про нас
              </Link>
            </li>
            <li className="header-item">
              <Link to={`/news`} onClick={closeNav}>
                Новини
              </Link>
            </li>
            <li className="header-item">
              <Link to={`/services`} onClick={closeNav}>
                Послуги
              </Link>
            </li>
            <li className="header-item">
              <Link to={`/OurWork`} onClick={closeNav}>
                Наші роботи
              </Link>
            </li>
            <li className="header-item">
              <Link to={`/contacts`} onClick={closeNav}>
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
