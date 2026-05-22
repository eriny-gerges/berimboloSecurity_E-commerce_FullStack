import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import cam1 from "../images/homebanner.webp";
import cam2 from "../images/banner1.jpg";
import cam3 from "../images/banner2.jpg";

export default function SimpleSlider() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      
      {/* النص فوق السلايدر */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "10%",
          zIndex: 10,
        }}
      >
        <h2 style={{ color: "#8FBFBF" }}>Berimbolo Security</h2>
        <p style={{ color: "#fff" }}>For all security services</p>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src={cam1}
            style={{
              width: "100%",
              height: "80vh",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={cam2}
            style={{
              width: "100%",
              height: "80vh",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={cam3}
            style={{
              width: "100%",
              height: "80vh",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}