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
      <div key={ind}>
        <Image
          placeholder="blur"
          width="100vw"
          height={720}
          layout="responsive"
          alt="slider1"
          src={item}
        />
      </div>
    ))}
    {/* <div>
      <Image
        placeholder="blur"
        width="100vw"
        layout="responsive"
        alt="slider1"
        src={slider1}
      />
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div> */}
  </Carousel>
);
export default HomeSlider;
