import React from "react";
import "./index.scss";
import { ReadyProps } from "./types";

const Ready = ({ title1, title2, buttonText }: ReadyProps) => {
  return (
    <div className="ready">
      <div className="container">
        <div className="ready__body">
          <div className="ready__body-title1">{title1}</div>
          <div className="ready__body-title2">{title2}</div>
          <button className="ready__body-button">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Ready;
