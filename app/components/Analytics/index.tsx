import React from "react";
import "./index.scss";
import Image from "next/image";
import { AnalyticsProps } from "./types";

const Analytics = ({ title, description, buttonText, url }: AnalyticsProps) => {
  return (
    <div className="analytics">
      <div className="container">
        <div className="analytics__body">
          <div className="analytics__body-image">
            <Image src={url} alt="Image" width={520} height={520} />
          </div>
          <div className="analytics__body-menu">
            <div className="analytics__body-menu-title">{title}</div>
            <div className="analytics__body-menu-description">
              {description}
            </div>
            <button className="analytics__body-menu-button">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
