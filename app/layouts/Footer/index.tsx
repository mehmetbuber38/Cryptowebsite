import React from "react";
import "./index.scss";
import { FooterProps } from "./types";

const Footer = ({
  homeTitle,
  marketTitle,
  contactTitle,
  newsletterTitle,
  buttonText,
  submitButtonText,
  home,
  market,
  contact,
}: FooterProps) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__menu">
            <div className="footer__menu-home list">
              <div className="footer__menu-title">{homeTitle}</div>
              {home && (
                <div className="footer__menu-items">
                  {home.map((item, index) => (
                    <div className="footer__menu-items-item" key={index}>
                      <a href="#">{item}</a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="footer__menu-market list">
              <div className="footer__menu-title">{marketTitle}</div>
              {market && (
                <div className="footer__menu-items">
                  {market.map((item, index) => (
                    <div className="footer__menu-items-item" key={index}>
                      <a href="#">{item}</a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="footer__menu-contact list">
              <div className="footer__menu-title">{contactTitle}</div>
              {contact && (
                <div className="footer__menu-items">
                  {contact.map((item, index) => (
                    <div className="footer__menu-items-item" key={index}>
                      <a href="#">{item}</a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="footer__newsletter">
            <div className="footer__newsletter-title">{newsletterTitle}</div>
            <button className="footer__newsletter-email">{buttonText}</button>
            <button className="footer__newsletter-submit">{ submitButtonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
