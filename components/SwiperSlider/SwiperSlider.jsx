import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductCard from "../ProductCard";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const CustomSlider = ({
  slidesPerView = 4,
  spaceBetween = 30,
  paginationClickable = true,
  products,
  locale,
}) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#F86E2F",
        "--swiper-pagination-color": "#F86E2F",
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={spaceBetween}
      pagination={{ clickable: true }}
      loop={false}
      autoplay={{ delay: 10000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      slidesPerView={slidesPerView}
      scrollbar={{ draggable: true }}
      preloadimages="false"
      lazy={true}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        425: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
        1140: { slidesPerView: 3, spaceBetween: 20 },
        2560: { slidesPerView: 4, spaceBetween: 10 },
      }}
      className="mySwiper w-full"
    >
      {products.map((product) => (
        <SwiperSlide key={product?._id} className="p-5">
          <ProductCard
            slug={product?.slug}
            title={product?.name}
            // models={product?.models}
            short_description={product?.short_description}
            coverImage1={product?.images[0]}
            coverImage2={product?.images[1]}
            locale={locale}
          />
        </SwiperSlide>
      ))}

      {/* Navigation Buttons */}
      <div className="hidden md:block">
        <FaArrowCircleRight className="swiper-button-next" />
      </div>

      <div className="hidden md:block">
        <FaArrowCircleLeft className="swiper-button-prev" />
      </div>
    </Swiper>
  );
};

// Example Usage
const CustomSwiperSlider = ({ products, locale }) => {
  return (
    <div className="flex flex-row w-full text-center">
      <CustomSlider
        products={products}
        slidesPerView={4}
        spaceBetween={30}
        paginationClickable={true}
        locale={locale}
      />
    </div>
  );
};

export default CustomSwiperSlider;
