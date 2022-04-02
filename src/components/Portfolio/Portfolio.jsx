import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "./portfolio.css";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* Heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="ecommerce" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={HOC} alt="hoc" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="music-app" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;