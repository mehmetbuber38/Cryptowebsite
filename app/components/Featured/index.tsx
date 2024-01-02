import React from "react";
import "./index.scss";
import { FeaturedProps } from "./types";
import Image from "next/image";

const imageList = [
  {
    image: "/techcrunc.png",
    alt: "Image",
    width: 250,
    height: 140,
  },
  {
    image: "/astcompany.png",
    alt: "Image",
    width: 222,
    height: 40,
  },
  {
    image: "/mit.png",
    alt: "Image",
    width: 90,
    height: 58,
  },
  {
    image: "/forbes.png",
    alt: "Image",
    width: 150,
    height: 45,
  },
];
const Featured = ({ image }: FeaturedProps) => {
  return (
    <div className="featured">
      <div className="container">
        <div className="featured__image">
          {imageList.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
