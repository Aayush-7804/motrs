"use client";
import React from "react";
import NewsNReviewItem from "./News&Review-Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const NewsNReviews = () => {
  return (
    <div className="max-w-360 mx-auto py-15 px-10 max-[376px]:px-5 max-[376px]:py-7.5 bg-[var(--Primary-Midnight-Blue)] text-[var(--other-White)] flex flex-col gap-7.5 items-center">
      <h2 className="text-[50px] max-[376px]:text-3xl font-bold capitalize leading-13.75">
        news & reviews
      </h2>
      <div className="w-full overflow-x-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Reference the custom pagination container
            bulletClass: "bg-[var(--Primary-Muted-Blue)]", // Class for pagination bullets
            bulletActiveClass: "pagination-bullet-active", // Class for active bullet
            renderBullet: (index, className) => {
              return `<div class="${className} w-8 h-1.5"></div>`;
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <NewsNReviewItem />
          </SwiperSlide>
          <SwiperSlide>
            <NewsNReviewItem />
          </SwiperSlide>
          <SwiperSlide>
            <NewsNReviewItem />
          </SwiperSlide>
          <SwiperSlide>
            <NewsNReviewItem />
          </SwiperSlide>
          <SwiperSlide>
            <NewsNReviewItem />
          </SwiperSlide>
        </Swiper>
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
};

export default NewsNReviews;
