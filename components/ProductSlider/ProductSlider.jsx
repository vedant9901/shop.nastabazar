import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperComponent = ({ categories,onCategoryClick }) => {
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
      spaceBetween={12}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      pagination={{ clickable: true }}
      loop={false}
      scrollbar={{ draggable: true }}
      preloadimages="false"
      lazy={true}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        425: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 5, spaceBetween: 10 },
        1140: { slidesPerView: 5, spaceBetween: 10 },
        2560: { slidesPerView: 5, spaceBetween: 10 },
      }}
      className="mySwiper"
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index} className='p-4 mb-4' >
          <div className="relative cursor-pointer overflow-hidden rounded border-2 bg-light text-center md:py-2 border-light" onClick={()=>{onCategoryClick(category._key)}}>
            <div className="relative flex items-center justify-center w-auto my-3.5 mb-3 overflow-hidden h-28">
              <img
                alt={category.interfaceCategoryName?.en || 'Category Image'} // Ensure it's a string
                className="object-contain w-[50px] h-[50px]"
                src={category.interfaceCategoryImage} // Ensure it's a valid image URL
              />
            </div>
            <span className="block px-4 pb-4 text-sm font-semibold text-center md:pt-1 text-heading">
              {category.interfaceCategoryName || 'Category Name'} 
            </span>
          </div>
        </SwiperSlide>
      ))}

      {/* Navigation Buttons */}
      <div className="hidden md:block">
               <FaArrowCircleRight   className="swiper-button-next"/>
            </div>

            <div className="hidden md:block">
               <FaArrowCircleLeft  className="swiper-button-prev"/>
            </div>

    </Swiper>
  );
};

export default SwiperComponent;
