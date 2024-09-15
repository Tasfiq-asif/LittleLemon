
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';


import { Pagination, Autoplay } from "swiper/modules";
import Header from "../Header/Header";


const Testimonials = () => {

    const reviews = [
      {
        name: "John Waltz",
        avatarUrl: "https://i.ibb.co.com/K7B04r9/boy6.jpg",
        review:
          "Amazing food and excellent service! Highly recommend the pasta.",
        rating: 4.5,
      },
      {
        name: "Jane Smith",
        avatarUrl: "https://i.ibb.co.com/p4gmfX2/girl5.jpg",
        review:
          "The ambiance was perfect, and the dessert was divine. Will definitely come again!",
        rating: 5,
      },
      {
        name: "Emily Johnson",
        avatarUrl: "https://i.ibb.co.com/25V3wPR/girl2.jpg",
        review:
          "The main course was good, but the service was a bit slow. Overall, a nice experience.",
        rating: 3.8,
      },
      {
        name: "Michael Brown",
        avatarUrl: "https://i.ibb.co.com/Ytrhzvz/boy5.jpg",
        review:
          "Great variety on the menu, and the staff was friendly. Enjoyed the evening!",
        rating: 4.2,
      },
    ];


    return (
      <div className=" flex flex-wrap max-w-7xl mx-auto justify-center items-center gap-5 my-10">
        <div className="mb-10">
          <Header text={"Testimonials"}></Header>
        </div>
        <div className="py-5 my-5-">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {reviews.map((user) => (
              <SwiperSlide key={user.name}>
                <TestimonialCard user={user} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
};

export default Testimonials;