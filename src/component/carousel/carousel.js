import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Imagecouple1 from "../../assets/imagecouple1.jpg";
import Imagecouple22 from "../../assets/imagecouple22.avif";
import Image28 from "../../assets/image28.jpg";

import "./carousel.css";

const Carou = () => {
  return (
    <Carousel className="main-slide" showThumbs={false}>
      <div>
        <img src={Imagecouple1} height="300px" width="500px" alt="" />
      </div>
      <div>
        <img src={Imagecouple22} height="300px" width="500px" alt="" />
      </div>
      <div>
        <img src={Image28} height="300px" width="500px" alt="" />
      </div>
    </Carousel>
  );
};
export default Carou;
