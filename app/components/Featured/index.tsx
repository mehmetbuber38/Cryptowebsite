import React from "react";
import "./index.scss";

import Image from "next/image";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="featured__image">
          <Image src={"/techcrunc.png"} alt="Image" width={250} height={140} />
          <Image src={"/astcompany.png"} alt="Image" width={222} height={40} />
          <Image src={"/mit.png"} alt="Image" width={90} height={58} />
          <Image src={"/forbes.png"} alt="Image" width={150} height={45} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
