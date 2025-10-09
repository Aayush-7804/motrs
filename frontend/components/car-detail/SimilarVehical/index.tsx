"use client";
import React, { useState } from "react";
import SimilarItem from "./SimilarItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SimilarVehicle = () => {
  // const itemsPerPage = 4;
  // const [currentPage, setCurrentPage] = useState(0);

  // // Calculate total pages
  // const totalPages = Math.ceil(arrya.length / itemsPerPage);

  // // Slice the array to get current 4 items
  // const startIndex = currentPage * itemsPerPage;
  // const visibleItems = arrya.slice(startIndex, startIndex + itemsPerPage);
  // const goToPrevious = () => {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // // Handle next page
  // const goToNext = () => {
  //   if (currentPage < totalPages - 1) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  const [swiper, setSwiper] = useState<any>(null);
  const items = Array.from({ length: 12 }).map((_, i) => ({ id: i + 1 })); // Example: 12 items

  const goToPrevious = () => swiper?.slidePrev();
  const goToNext = () => swiper?.slideNext();

  return (
    <div className="max-w-360 mx-auto px-10 max-[376px]:px-0 py-15 flex flex-col gap-7.5">
      <div className="max-[376px]:px-5 flex flex-col items-center gap-2.5">
        <h2 className="text-[50px] font-bold leading-13.75 capitalize text-[var(--Primary-Muted-Blue)]">
          Other Hyundai Tucson&apos;s
        </h2>
        <small className="text-base leading-6 text-[var(--Secondary-Font)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tem
        </small>
      </div>
      <div className="w-full mx-auto max-[376px]:pl-5">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1} // Default for smallest screens
          slidesPerGroup={1} // Default for smallest screens
          breakpoints={{
            375: {
              slidesPerView: "auto",
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 40,
            },
          }}
          navigation={false} // Use custom navigation buttons
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass:
              "custom-bullet w-[31px] h-1.5 bg-[var(--other-offWhite)] inline-block mx-1 cursor-pointer",
            bulletActiveClass: "custom-bullet-active",
          }}
          onSwiper={setSwiper}
          className="mySwiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "fit-content" }}>
              <div className="min-[376px]:w-full min-[376px]:flex justify-center">
                <SimilarItem item={item.id} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Container with responsive max-width and padding */}
      <div className="flex items-center justify-between mt-4 max-[376px]:px-5">
        <button className="max-[376px]:hidden px-0 py-0" onClick={goToPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="43"
            viewBox="0 0 54 43"
            fill="none"
          >
            <rect opacity="0.8" width="54" height="43" rx="8" fill="#F5F7F2" />
            <path
              d="M12.6464 20.6464C12.4512 20.8417 12.4512 21.1583 12.6464 21.3536L15.8284 24.5355C16.0237 24.7308 16.3403 24.7308 16.5355 24.5355C16.7308 24.3403 16.7308 24.0237 16.5355 23.8284L13.7071 21L16.5355 18.1716C16.7308 17.9763 16.7308 17.6597 16.5355 17.4645C16.3403 17.2692 16.0237 17.2692 15.8284 17.4645L12.6464 20.6464ZM13 21L13 21.5L40 21.5L40 21L40 20.5L13 20.5L13 21Z"
              fill="#2AA295"
            />
          </svg>
        </button>
        <div className="flex justify-center gap-2 custom-pagination " />
        <button className="max-[376px]:hidden px-0 py-0" onClick={goToNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="43"
            viewBox="0 0 54 43"
            fill="none"
          >
            <rect opacity="0.8" width="54" height="43" rx="8" fill="#F5F7F2" />
            <path
              d="M41.3536 21.3536C41.5488 21.1583 41.5488 20.8417 41.3536 20.6464L38.1716 17.4645C37.9763 17.2692 37.6597 17.2692 37.4645 17.4645C37.2692 17.6597 37.2692 17.9763 37.4645 18.1716L40.2929 21L37.4645 23.8284C37.2692 24.0237 37.2692 24.3403 37.4645 24.5355C37.6597 24.7308 37.9763 24.7308 38.1716 24.5355L41.3536 21.3536ZM14 21L14 21.5L41 21.5L41 21L41 20.5L14 20.5L14 21Z"
              fill="#2AA295"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SimilarVehicle;
