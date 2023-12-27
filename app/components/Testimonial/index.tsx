import React from "react";
import Image from "next/image";
import "./index.scss";
import { TestimonialProps } from "./types";

const Testinomial = ({ url, description, title }: TestimonialProps) => {
  return (
    <div className="testinomial">
      <div className="container">
        <div className="testinomial__body">
          <div className="testinomial__body-image">
            <Image src={url} alt="Image" width={170} height={170} />
          </div>
          <div className="testinomial__body-title">{title}</div>
          <div className="testinomial__body-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Testinomial;
