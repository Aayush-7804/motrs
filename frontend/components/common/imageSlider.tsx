import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageSvgs from "../svg/imageSvgs";

interface ImageSliderProps {
  images: { id: number; src: string }[];
  fullScreen: (image: { id: number; src: string }) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, fullScreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle slide change
  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    const swiper = document.querySelector(".mySwiper")?.swiper;
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  const currentImage = images[currentIndex];
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Swiper Slider */}
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        className="mySwiper gap-5"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={`Slide ${index + 1}`}
              width={768}
              height={432}
              className="w-full h-auto object-cover"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
        <ImageSvgs onClick={() => fullScreen(currentImage)} />
      </Swiper>

      {/* Custom Pagination */}
      <div className="flex justify-center items-center mt-4 gap-4 max-[376px]:gap-2">
        {/* First Button (<<) */}
        <button
          onClick={() => goToSlide(0)}
          disabled={currentIndex === 0}
          className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
            currentIndex === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          &lt;&lt;
        </button>

        {/* Previous Button (<) */}
        <button
          onClick={() => goToSlide(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
            currentIndex === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          &lt;
        </button>

        {/* First Page Number (1) */}
        <button
          onClick={() => goToSlide(0)}
          className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
            currentIndex === 0
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          1
        </button>

        {/* Ellipsis Before Middle Buttons */}
        {images.length > 5 && currentIndex > 2 && (
          <span className="text-xs sm:text-sm text-gray-600">...</span>
        )}

        {/* Fixed 3 Middle Buttons with Changing Values */}
        {images.length > 3 && 
        (() => {
            const maxButtons = 3; // Always show 3 buttons
            const half = Math.floor(maxButtons / 2);
            // Calculate start to center the currentIndex, but cap it to ensure 3 buttons
            const start = Math.max(
              1,
              Math.min(currentIndex - half, images.length - maxButtons - 1)
            );
            const buttons = [];

            // Always render exactly 3 buttons (unless fewer than 3 images remain)
            for (let i = 0; i < Math.min(maxButtons, images.length - 2); i++) {
              const pageIndex = start + i;
              buttons.push(
                <button
                  key={`middle-${i}`} // Stable key to prevent re-rendering
                  onClick={() => goToSlide(pageIndex)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
                    currentIndex === pageIndex
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  }`}
                >
                  {pageIndex + 1}
                </button>
              );
            }
            return buttons;
          })()}

        {/* Ellipsis After Middle Buttons */}
        {images.length > 5 && currentIndex < images.length - 3 && (
          <span className="text-xs sm:text-sm text-gray-600">...</span>
        )}

        {/* Last Page Number */}
        {images.length > 1 && (
          <button
            onClick={() => goToSlide(images.length - 1)}
            className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
              currentIndex === images.length - 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {images.length}
          </button>
        )}

        {/* Next Button (>) */}
        <button
          onClick={() =>
            goToSlide(Math.min(images.length - 1, currentIndex + 1))
          }
          disabled={currentIndex === images.length - 1}
          className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
            currentIndex === images.length - 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          &gt;
        </button>

        {/* Last Button (>>) */}
        <button
          onClick={() => goToSlide(images.length - 1)}
          disabled={currentIndex === images.length - 1}
          className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
            currentIndex === images.length - 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
