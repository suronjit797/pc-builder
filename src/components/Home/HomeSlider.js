import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import slider1 from "@/images/slider1.webp";
import slider2 from "@/images/slider2.webp";
import slider3 from "@/images/slider3.webp";
import slider4 from "@/images/slider4.webp";

const sliderOptions = [slider1, slider2, slider3, slider4];

const HomeSlider = () => (
  <Carousel autoplay>
    {sliderOptions.map((item, ind) => (
      <Image
        placeholder="blur"
        width={1080}
        height={720}
        layout="responsive"
        alt="slider1"
        src={item}
        key={ind}
      />
    ))}
  </Carousel>
);
export default HomeSlider;
