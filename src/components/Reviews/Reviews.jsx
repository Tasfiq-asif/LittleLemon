import Header from "../Header/Header";
import ReviewCard from "../ReviewCard/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination module styles
import "swiper/css/navigation"; // Navigation module styles
import { Autoplay, Pagination } from "swiper/modules";
import "./reviews.css"

const Reviews = () => {
  const reviews = [
    {
      name: "John Waltz",
      avatarUrl: "https://i.ibb.co/K7B04r9/boy6.jpg",
      review: "Amazing food and excellent service! Highly recommend the pasta.",
      rating: 4.5,
    },
    {
      name: "Jane Smith",
      avatarUrl: "https://i.ibb.co/p4gmfX2/girl5.jpg",
      review: "The ambiance was perfect, and the dessert was divine.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      avatarUrl: "https://i.ibb.co/25V3wPR/girl2.jpg",
      review: "Good main course, but the service was slow. Nice overall.",
      rating: 3.8,
    },
    {
      name: "Michael Brown",
      avatarUrl: "https://i.ibb.co/Ytrhzvz/boy5.jpg",
      review: "Great variety on the menu, and friendly staff.",
      rating: 4.2,
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center mb-10">
        <Header text={"Customer Reviews"} />
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={1}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ padding: "20px 0" }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.name}>
            <ReviewCard
              name={review.name}
              img={review.avatarUrl}
              rating={review.rating}
              review={review.review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
