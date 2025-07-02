import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedCarousel = ({ meals }) => {
  return (
    <div className="mb-10 px-2">
      <h2 className="text-2xl font-bold mb-4 text-rose-600">Featured Meals</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: Math.min(3, meals.length) },
        }}
      >
        {meals.map((meal) => (
          <SwiperSlide key={meal.idMeal}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{meal.strMeal}</h3>
                <p className="text-gray-600 text-sm">{meal.strArea} Cuisine</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCarousel;
