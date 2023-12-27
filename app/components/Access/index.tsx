import React from "react";
import "./index.scss";
import { AccessProps } from "./types";

const Access = ({ title, description, buttonText }: AccessProps) => {
  return (
    <div className="access">
      <div className="container">
        <div className="access__body">
          <div className="access__title">{title}</div>
          <div className="access__description">{description}</div>

          <button className="access__button">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Access;
