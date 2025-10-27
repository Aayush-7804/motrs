"use client";
import React from "react";
import NewsNReviewItem from "./News&Review-Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const NewsNReviews = () => {
  return (
    <div className="max-w-360 mx-auto py-15 px-10 max-[376px]:px-5 max-[376px]:py-7.5 bg-[var(--Primary-Midnight-Blue)] text-[var(--Other-White)] flex flex-col gap-7.5 items-center">
      <h2 className="text-[50px] max-[376px]:text-3xl font-bold capitalize leading-13.75">
        news & reviews
      </h2>
      <div className="w-full overflow-x-auto">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
            el: ".custom-newReviews-pagination",
            bulletClass: "bg-[var(--Primary-Muted-Blue)]",
            bulletActiveClass: "bg-[var(--Secondary-Teal)]",
            renderBullet: (index, className) => {
              return `<div class="${className} w-8 h-1.5"></div>`;
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full justify-items-center">
              <NewsNReviewItem />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full justify-items-center">
              <NewsNReviewItem />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full justify-items-center">
              <NewsNReviewItem />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full justify-items-center">
              <NewsNReviewItem />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="custom-newReviews-pagination flex justify-center gap-2.25"></div>
    </div>
  );
};

export default NewsNReviews;
