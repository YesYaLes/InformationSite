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
              <Link
                className="nav-link px-2 text-muted"
                to={`/InformationSite/main`}
              >
                Головна
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-2 text-muted"
                to={`/InformationSite/aboutUs`}
              >
                Про нас
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-2 text-muted"
                to={`/InformationSite/news`}
              >
                Новини
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-2 text-muted"
                to={`/InformationSite/services`}
              >
                Послуги
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-2 text-muted"
                to={`/InformationSite/OurWork`}
              >
                Наші роботи
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-2 text-muted"
                to={`/InformationSite/contacts`}
              >
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
