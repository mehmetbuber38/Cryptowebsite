"use client";
import { useState } from "react";
import "./index.scss";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <div className="header__body">
          <div className="header__body-logo">
            <Image src={"/krypto.png"} alt="Krypto" width={93} height={22} />
          </div>

          <div
            className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <ul className={`header__body-menu ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Buy NFTs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
