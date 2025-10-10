"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../../common/Modal";
import DealerContact from "../Dealer-Contact";
import ImageSlider from "./imageSlider";
import ImageSvgs from "./imageSvgs";

type imageType = { id: number; src: string };

const carImages: imageType[] = [
  { id: 1, src: "/news/news1.jpg" },
  { id: 2, src: "/car-details-images/image2.jpg" },
  { id: 3, src: "/car-details-images/image3.jpg" },
  { id: 4, src: "/car-details-images/image4.jpg" },
  { id: 5, src: "/car-details-images/image4.jpg" },
  { id: 6, src: "/car-details-images/image4.jpg" },
  { id: 7, src: "/car-details-images/image4.jpg" },
  { id: 8, src: "/car-details-images/image4.jpg" },
  { id: 9, src: "/car-details-images/image4.jpg" },
  { id: 10, src: "/car-details-images/image4.jpg" },
  { id: 11, src: "/car-details-images/image4.jpg" },
  { id: 12, src: "/car-details-images/image4.jpg" },
];

const ImageGrid = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [openedImage, setOpenImage] = useState<imageType | null>(null);
  const visibleImages = carImages.slice(0, 6);
  const otherImagesCount = carImages.length - visibleImages.length;

  const handleModal = (item: imageType | null) => {
    console.log("clicked");
    setModalOpen((prevModal) => !prevModal);
    handleImage(item);
  };
  const handleModalClose = (item: imageType | null) => {
    setModalOpen((prevModal) => (prevModal = !prevModal));
    if (!openedImage) {
      handleImage(item);
    }
  };

  const handleImage = (item: imageType | null) => {
    setOpenImage(item);
  }

  return (
    <>
      {openedImage && (
        <>
          <Modal
            open={modalOpen}
            onClose={() => handleModalClose(null)}
            className="w-fit min[769px]:h-220"
          >
            <div className="max-[376px]:hidden">
              <div className="sticky top-0 z-30 flex items-center px-7.5 py-5 text-[var(--Primary-Midnight-Blue)] bg-[var(--other-White)] border-b border-[var(--other-Grey)]">
                <h1 className="text-xl font-bold leading-5.5 capitalize w-full">
                  2017 Hyundai Tucson 2.0CRDi Elite - R 399 950
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  onClick={() => handleModal(null)}
                >
                  <path
                    d="M15 5L5 15"
                    stroke="#003C52"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 5L15 15"
                    stroke="#003C52"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex">
                <div className="w-[875px] max-[1025px]:w-[575px] max-[769px]:w-[675px] flex flex-col gap-2.5 p-7.5">
                  <p className="text-sm leading-5.5 text-[var(--Primary-Font)]">
                    Image Description Goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco
                  </p>
                  <div className="relative w-full h-[613px] max-[1025px]:h-[413px]">
                    <Image
                      src={openedImage.src}
                      alt="open"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <ImageSvgs />
                  </div>
                  <div className="flex w-full gap-2.5 overflow-x-auto outline-0">
                    {carImages.map((item) => (
                      <div key={item.id}>
                        <Image
                          src={item.src}
                          alt={`car image ${item.id}`}
                          width={500}
                          height={300}
                          className="min-w-[127px] object-cover"
                          onClick={() => handleImage(item)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="max-[769px]:hidden">
                  <DealerContact />
                </div>
              </div>
            </div>
            <div className="min-[376px]:hidden relative">
              <div className="absolute top-0 w-full flex items-center justify-between p-3">
                <div className="bg-[var(--other-White)] px-2 py-1 flex items-center gap-1 text-[var(--Secondary-Teal)] text-sm leading-6 rounded-2xl">
                  <p>{openedImage.id}</p>
                  <p>of</p>
                  <p>{carImages.length}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  onClick={() => handleModal(null)}
                >
                  <path
                    d="M15 5L5 15"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 5L15 15"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="w-full h-dvh flex items-center">
                <ImageSlider
                initialImage={openedImage}
                images={carImages}
                currentImageShown={handleImage}
                mobileModal
              />
              </div>
              
            </div>
          </Modal>
        </>
      )}

      <div className="relative overflow-hidden max-w-360 mx-auto mb-15 max-[1441px]:mx-9.75 max-[376px]:m-0 max-[376px]:mb-5 grid grid-cols-5 gap-0.5 max-[769px]:flex ">
        <div className="max-[769px]:hidden relative min-w-full min-h-full col-span-2 row-span-2 ">
          <Image
            src={carImages[0].src}
            alt={"image-" + carImages[0].id}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <ImageSvgs onClick={() => handleModal(carImages[0])} />
        </div>
        {visibleImages.map((item, index) => {
          const isLast = index === visibleImages.length - 1;
          return (
            <div key={index} className="max-[769px]:hidden relative min-w-full">
              <Image
                src={item.src}
                alt={"image-" + item.id}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                onClick={() => handleModal(item)}
              />
              {isLast && (
                <div className="bg-black/60 absolute w-full h-full top-0 left-0 text-[var(--other-White)] flex justify-center items-center">
                  <p>+{otherImagesCount} more</p>
                </div>
              )}
            </div>
          );
        })}
        <div className="min-[769px]:hidden relative min-w-full">
          <ImageSlider images={carImages} fullScreen={handleModal} />
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
