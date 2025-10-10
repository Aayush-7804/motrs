
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ImageSlide = () => {
      const images = [
    "/Similar/sm1.jpg",
    "/Similar/sm2.jpg",
    "/Similar/sm3.jpg",
    "/Similar/sm4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setCurrentImageIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, images.length]);

  const directedTo = (index:number) => {
    setCurrentImageIndex(index);
  }
  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
              className="h-[236px] w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
        {images.map((_, index) => (
          <div key={index} onClick={() => directedTo(index)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle
                cx="3.85714"
                cy="3.85714"
                r="3.35714"
                fill={currentImageIndex === index ? "#2AA295" : "#FFFFFF"}
                stroke="#F5F7F2"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
