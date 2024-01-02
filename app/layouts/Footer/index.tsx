"use client";
import { useState } from "react";
import "./index.scss";
import { FooterProps } from "./types";
import Link from "next/link";

const Footer = ({
  homeTitle,
  marketTitle,
  contactTitle,
  newsletterTitle,
  inputText,
  submitButtonText,
  home,
  market,
  contact,
}: FooterProps) => {
  const [email, setEmail] = useState<string>("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [previousEmail, setPreviousEmail] = useState<string[]>([]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMail = e.target.value;
    setEmail(newMail);
    setSubmitDisabled(!isValidEmailFormat(newMail));
  };

  const handleSubmit = () => {
    console.log("Email Submitted:", email);

    setPreviousEmail((prevEmails) => [...prevEmails, email]); // Gönderilen maili önceki maillere ekle.

    setEmail("");

    setSubmitDisabled(true);
  };

  const isValidEmailFormat = (email: string): boolean => {
    return email.includes("@");
  };

  const filterEmails = (filterText: string) => {
    return previousEmail.filter((prevEmail) => prevEmail.includes(filterText));
  };

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
                      <Link href="#">{item}</Link>
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
                      <Link href="#">{item}</Link>
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
                      <Link href="#">{item}</Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="footer__newsletter">
            <div className="footer__newsletter-title">{newsletterTitle}</div>
            <input
              type="email"
              className="footer__newsletter-input"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            ></input>
            <button
              className="footer__newsletter-submit"
              onClick={handleSubmit}
              disabled={submitDisabled}
            >
              {submitButtonText}
            </button>

            {email.length > 4 && (
              <div className="filtered-emails">
                <h2>Filtered Emails:</h2>
                <ul>
                  {filterEmails(email).map((filterEmail, index) => (
                    <li key={index}>{filterEmail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
