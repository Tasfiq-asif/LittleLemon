import ReviewCard from "../ReviewCard/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination module styles
import "swiper/css/navigation"; // Navigation module styles
import { Autoplay, Pagination } from "swiper/modules";
import "./reviews.css";

const Reviews = () => {
  const reviews = [
    {
      name: "John Waltz",
      avatarUrl: "https://i.ibb.co/K7B04r9/boy6.jpg",
      review:
        "Amazing food and excellent service! The attention to detail in every dish shows their commitment to quality. Highly recommend the pasta.",
      rating: 4.5,
      position: "Food Critic",
    },
    {
      name: "Jane Smith",
      avatarUrl: "https://i.ibb.co/p4gmfX2/girl5.jpg",
      review:
        "The ambiance was perfect, and the dessert was divine. Every visit feels like a special occasion. The staff goes above and beyond.",
      rating: 5,
      position: "Regular Customer",
    },
    {
      name: "Emily Johnson",
      avatarUrl: "https://i.ibb.co/25V3wPR/girl2.jpg",
      review:
        "A hidden gem with exceptional flavors. The chef's special never disappoints. Love the seasonal menu changes.",
      rating: 4.8,
      position: "Food Blogger",
    },
    {
      name: "Michael Brown",
      avatarUrl: "https://i.ibb.co/Ytrhzvz/boy5.jpg",
      review:
        "Great variety on the menu, and incredibly friendly staff. The wine pairing suggestions were spot on!",
      rating: 4.2,
      position: "Wine Enthusiast",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our Guests Say
        </h2>
        <div className="h-1 w-20 bg-yellow-400 rounded-full mx-auto"></div>
      </div>

      {/* Reviews Slider */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active bg-yellow-400",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
