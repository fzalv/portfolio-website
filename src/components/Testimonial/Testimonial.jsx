import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import "./testimonial.css";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis voluptatem aliquid! Esse porro accusantium delectus impedit illum quae maiores, nam sed dolor recusandae consectetur eius vero temporibus eos tempore.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis voluptatem aliquid! Esse porro accusantium delectus impedit illum quae maiores, nam sed dolor recusandae consectetur eius vero temporibus eos tempore.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis voluptatem aliquid! Esse porro accusantium delectus impedit illum quae maiores, nam sed dolor recusandae consectetur eius vero temporibus eos tempore.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis voluptatem aliquid! Esse porro accusantium delectus impedit illum quae maiores, nam sed dolor recusandae consectetur eius vero temporibus eos tempore.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "var(skyblue" }}
        ></div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
