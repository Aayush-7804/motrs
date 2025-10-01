import Image from "next/image";
import React from "react";

const carImages: string[] = [
  "/car-details-images/image1.jpg",
  "/car-details-images/image2.jpg",
  "/car-details-images/image3.jpg",
  "/car-details-images/image4.jpg",
  "/car-details-images/image4.jpg",
  "/car-details-images/image4.jpg",
  "/car-details-images/image4.jpg",
];

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-0.5 px-9.75 mb-15">
      {carImages.map((src, index) => (
        <div key={index} className="first:col-span-2 first:row-span-2">
          <Image
            src={src}
            alt={`car image ${index + 1}`}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
