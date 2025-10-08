"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import Modal from "../common/Modal";
import DealerContact from "./dealerContact";

type imageType = { id: number; src: string };

const carImages: imageType[] = [
  { id: 1, src: "/car-details-images/image1.jpg" },
  { id: 2, src: "/car-details-images/image2.jpg" },
  { id: 3, src: "/car-details-images/image3.jpg" },
  { id: 4, src: "/car-details-images/image4.jpg" },
  { id: 5, src: "/car-details-images/image4.jpg" },
  { id: 6, src: "/car-details-images/image4.jpg" },
  { id: 7, src: "/car-details-images/image4.jpg" },
  { id: 8, src: "/car-details-images/image4.jpg" },
  { id: 9, src: "/car-details-images/image4.jpg" },
];

const ImageGrid = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [openedIMage, setOpenImage] = useState<imageType | null>(null);

  const handleModal = (item: imageType | null) => {
    setModalOpen((prevModal) => (prevModal = !prevModal));
    handleImage(item);
  };
  const handleModalClose = (item: imageType | null) => {
    setModalOpen((prevModal) => (prevModal = !prevModal));
    if (!openedIMage) {
      handleImage(item);
    }
  };

  const handleImage = (item: imageType | null) => {
    setOpenImage(item);
  };

  return (
    <>
      {openedIMage && (
        <Modal
          open={modalOpen}
          onClose={() => handleModalClose(null)}
          className="w-fit h-220"
        >
          <div className="flex items-center px-7.5 py-5 text-[var(--Primary-Midnight-Blue)] bg-[var(--other-White)] border-b border-[var(--other-Grey)]">
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
            <div className="w-[875px] flex flex-col gap-2.5 p-7.5">
              <p className="text-sm leading-5.5 text-[var(--Primary-Font)]">
                Image Description Goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
              </p>
              <div className="relative flex justify-center items-center w-full h-[613px] overflow-hidden">
                <Image
                  src={openedIMage.src}
                  alt="open"
                  width={500}
                  height={500}
                  className="w-full"
                />
                <div className="absolute top-3 right-3.75 flex items-center gap-4 px-3.5 py-1.5 rounded-[30px] bg-[var(--other-White)] opacity-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65908 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172V3.84172Z"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15 6.66675C16.3807 6.66675 17.5 5.54746 17.5 4.16675C17.5 2.78604 16.3807 1.66675 15 1.66675C13.6193 1.66675 12.5 2.78604 12.5 4.16675C12.5 5.54746 13.6193 6.66675 15 6.66675Z"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4525 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4525 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.15845 11.2583L12.8501 14.575"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.8418 5.42505L7.15845 8.74172"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-3 right-3.75 opacity-90 pl-3.5 pr-3 pb-0.75 pt-1.25 text-[var(--Secondary-Teal)] bg-[var(--other-White)] opacity-90 font-bold leading-6 rounded-[30px]">
                  360°
                </div>
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
            <DealerContact />
          </div>
        </Modal>
      )}

      <div className="max-w-360 mx-auto max-[1441px]:px-9.75 mb-15 grid grid-cols-5 max-[376px]:block max-[376px]:p-0 max-[376px]:mb-5 gap-0.5">
        {carImages.map((item, index) => (
          <div
            key={item.id}
            className="relative first:col-span-2 first:row-span-2 first:block max-[376px]:hidden"
          >
            <Image
              src={item.src}
              alt={`car image ${item.id}`}
              width={500}
              height={300}
              className="w-full h-full object-cover"
              priority
              onClick={() => handleModal(item)}
            />
            {index === 0 && (
              <>
                <div className="absolute top-3 right-3.75 flex items-center gap-4 px-3.5 py-1.5 rounded-[30px] bg-[var(--other-White)] opacity-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65908 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172V3.84172Z"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15 6.66675C16.3807 6.66675 17.5 5.54746 17.5 4.16675C17.5 2.78604 16.3807 1.66675 15 1.66675C13.6193 1.66675 12.5 2.78604 12.5 4.16675C12.5 5.54746 13.6193 6.66675 15 6.66675Z"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4525 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4525 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.15845 11.2583L12.8501 14.575"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.8418 5.42505L7.15845 8.74172"
                      stroke="#2AA295"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-3 right-3.75 opacity-90 pl-3.5 pr-3 pb-0.75 pt-1.25 text-[var(--Secondary-Teal)] bg-[var(--other-White)] opacity-90 font-bold leading-6 rounded-[30px]">
                  360°
                </div>
                <div className="absolute bottom-3 left-3.75 p-1.25 text-[var(--Secondary-Teal)] font-bold bg-[var(--other-White)] rounded-[5px] opacity-90">
                  <BsArrowsFullscreen />
                </div>
                <div className="min-[376px]:hidden absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 justify-center">
                  {carImages.map((item) => (
                    <div
                      key={item.id}
                      className={`p-1 bg-[var(--other-White)] rounded-full`}
                    ></div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGrid;
