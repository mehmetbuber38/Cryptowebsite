import React from "react";
import { SubtitleProps } from "./types";
import "./index.scss";

const Subtitle = ({ title }: SubtitleProps) => {
  return (
    <div className="subtitle">
      <div className="container">
        <h3 className="subtitle__title">{title}</h3>
      </div>
    </div>
  );
};

export default Subtitle;
