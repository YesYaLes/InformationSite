import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <footer className="py-3">
          <ul className="nav justify-content-center pb-3 mb-3">
            <li className="nav-item">
              <Link className="nav-link px-2 text-muted" to={`/main`}>
                Головна
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-muted" to={`/aboutUs`}>
                Про нас
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-muted" to={`/news`}>
                Новини
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-muted" to={`/services`}>
                Послуги
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-muted" to={`/OurWork`}>
                Наші роботи
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-muted" to={`/contacts`}>
                Контакти
              </Link>
            </li>
          </ul>
          <p className="text-center text-muted">&copy; 2023 Компанія</p>
        </footer>
      </div>
    </>
  );
};
export default Footer;
