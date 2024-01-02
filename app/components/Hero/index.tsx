import React from "react";
import Image from "next/image";
import { HeroProps } from "./types";
import "./index.scss";

const Hero = ({ title, description, buttonText }: HeroProps) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__body">
          <div className="hero__body-menu">
            {title !== "" && (
              <div className="hero__body-menu-title">{title}</div>
            )}
            <div className="hero__body-menu-description">{description}</div>
            <button className="hero__body-menu-button">{buttonText}</button>
            <button className="hero__body-menu-button">{buttonText}</button>
          </div>

          <div className="hero__image">
            <Image src="/hero.png" alt="Krypto" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
