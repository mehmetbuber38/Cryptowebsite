"use client";
import { useState } from "react";
import "./index.scss";
import Image from "next/image";
import Link from "next/link";

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
            <Image src="/krypto.png" alt="Krypto" width={93} height={22} />
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/buy-nfts">Buy NFTs</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
