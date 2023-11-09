"use client";
import Image from "next/image";
import img1 from "@public/assets/images/sliderImg_1.jpg";
import img2 from "@public/assets/images/sliderImg_2.jpg";
import img3 from "@public/assets/images/sliderImg_3.jpg";
import img4 from "@public/assets/images/sliderImg_4.jpg";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image priority src={img1} alt="slide-image" />
        </div>
        <div>
          <Image priority src={img2} alt="slide-image" />
        </div>
        <div>
          <Image priority src={img3} alt="slide-image" />
        </div>
        <div>
          <Image priority src={img4} alt="slide-image" />
        </div>
      </Carousel>
      <div className="h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default Banner;
