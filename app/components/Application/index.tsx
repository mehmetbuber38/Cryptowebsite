import React from "react";
import "./index.scss";
import Image from "next/image";
import { ApplicationProps } from "./types";

const Application = ({
  title,
  description,
  url1,
  url2,
  buttonText,
}: ApplicationProps) => {
  return (
    <div className="application">
      <div className="container">
        <div className="application__body">
          <div className="application__body-image1">
            <Image src={url1} alt="Image" width={270} height={270} />
          </div>
          <div className="application__body-menu">
            <div className="application__body-menu-title">{title}</div>
            <div className="application__body-menu-description">
              {description}
            </div>
            <button className="application__body-menu-button">
              {buttonText}
            </button>
          </div>
          <div className="application__body-image2">
            <Image src={url2} alt="Image" width={270} height={270} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
