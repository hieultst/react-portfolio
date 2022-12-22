import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
    {
        avatar: AVTR1,
        name: "John Smith",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, recusandae sint corporis eligendi ipsum repudiandae ad debitis temporibus assumenda, voluptas saepe quos! Distinctio perferendis nisi doloribus, vel eos fugiat nam!",
    },
    {
        avatar: AVTR2,
        name: "Alexander",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, recusandae sint corporis eligendi ipsum repudiandae ad debitis temporibus assumenda, voluptas saepe quos! Distinctio perferendis nisi doloribus, vel eos fugiat nam!",
    },
    {
        avatar: AVTR3,
        name: "Wiliam",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, recusandae sint corporis eligendi ipsum repudiandae ad debitis temporibus assumenda, voluptas saepe quos! Distinctio perferendis nisi doloribus, vel eos fugiat nam!",
    },
    {
        avatar: AVTR4,
        name: "Messi",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, recusandae sint corporis eligendi ipsum repudiandae ad debitis temporibus assumenda, voluptas saepe quos! Distinctio perferendis nisi doloribus, vel eos fugiat nam!",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
            >
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
