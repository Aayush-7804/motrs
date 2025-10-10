import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageSvgs from "./imageSvgs";
import { Pagination } from "swiper/modules";

interface ImageSliderProps {
  images: { id: number; src: string }[];
  fullScreen?: (image: { id: number; src: string }) => void;
  currentImageShown?: (image: { id: number; src: string }) => void;
  initialImage?: { id: number; src: string };
  mobileModal?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  fullScreen,
  initialImage,
  currentImageShown,
  mobileModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (initialImage) {
      const index = images.findIndex(
        (img) => img.id === initialImage.id && img.src === initialImage.src
      );
      return index !== -1 ? index : 0;
    }
    return 0;
  });
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (initialImage && swiperRef.current?.swiper) {
      const index = images.findIndex(
        (img) => img.id === initialImage.id && img.src === initialImage.src
      );
      if (index !== -1) {
        setCurrentIndex(index);
        swiperRef.current.swiper.slideTo(index);
        if (currentImageShown) {
          currentImageShown(images[index]);
        }
      }
    }
  }, [initialImage, images, currentImageShown]);

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);
    if (currentImageShown) {
      currentImageShown(images[swiper.activeIndex]);
    }
  };

  const currentImage = images[currentIndex];

  return (
    <Swiper
      breakpoints={{
        375: {
          spaceBetween: 0,
        },
        768: {
          spaceBetween: 16,
        },
      }}
      slidesPerView={1}
      initialSlide={
        initialImage
          ? images.findIndex(
              (img) =>
                img.id === initialImage.id && img.src === initialImage.src
            )
          : 0
      }
      modules={[Pagination]}
      pagination={{
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
        renderBullet: (index, className) => {
            return `<div class="${className}" style="width: 32px; height: 6px; background-color: var(--Primary-Muted-Blue);"></div>`;
          },
      }}
      onSlideChange={handleSlideChange}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      className="mySwiper gap-5"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="max-[376px]:w-dvw max-[769px]:h-[473px] max-[376px]:h-[253px]">
            <Image
              src={image.src}
              alt={`Slide ${index + 1}`}
              width={768}
              height={432}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
          </div>
            
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
      {!mobileModal && <ImageSvgs onClick={() => fullScreen(currentImage)} />}
    </Swiper>
  );
};

export default ImageSlider;
