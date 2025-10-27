import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperComponent: React.FC<{ images: { id: number; src: string }[] }> = ({
  images,
}) => {
  return (
    <div className="relative h-full bg-black">
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: ".swiper-pagination",
          dynamicBullets: true,
          renderBullet: (index, className) => {
            // Apply inline styles for bullet colors
            return `<span class="${className}" style="background: #D9D9D9;"></span>`;
          },
        }}
        className="w-full h-full"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex items-center justify-center h-full text-white text-lg bg-red-800">
              Slide 1
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
