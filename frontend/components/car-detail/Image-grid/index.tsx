"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../../common/Modal";
import DealerContact from "../Dealer-Contact";
import ImageSlider from "./imageSlider";
import { ImageModalXMark, ImageSvgs } from "./imageSvgs";

type imageType = string;

const ImageGrid: React.FC<{
  images: string[];
  title: string;
  description: string;
}> = ({ images, title, description }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [openedImage, setOpenImage] = useState<imageType | null>(null);
  const visibleImages = images.slice(0, 6);
  const otherImagesCount = images.length - visibleImages.length;

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
  };

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
              <div className="sticky top-0 z-30 flex items-center px-7.5 py-5 text-[var(--Primary-Midnight-Blue)] bg-[var(--Other-White)] border-b border-[var(--Other-Grey)]">
                <h1 className="text-xl font-bold leading-5.5 capitalize w-full">
                  {title}
                </h1>
                <ImageModalXMark
                  handleModal={() => handleModal(null)}
                  color="#003C52"
                />
              </div>
              <div className="flex">
                <div className="w-[875px] max-[1025px]:w-[575px] max-[769px]:w-[675px] flex flex-col gap-2.5 p-7.5">
                  <p className="text-sm leading-5.5 text-[var(--Primary-Font)]">
                    {description}
                  </p>
                  <div className="relative w-full h-[613px] max-[1025px]:h-[413px]">
                    <Image
                      src={openedImage}
                      alt="open"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <ImageSvgs />
                  </div>
                  <div className="flex w-full gap-2.5 overflow-x-auto outline-0">
                    {images.map((item, index) => (
                      <div key={index}>
                        <Image
                          src={item}
                          alt={`car image ${item}`}
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
                <div className="bg-[var(--Other-White)] px-2 py-1 flex items-center gap-1 text-[var(--Secondary-Teal)] text-sm leading-6 rounded-2xl">
                  <span>{images.indexOf(openedImage) + 1}</span>
                  <span>of</span>
                  <span>{images.length}</span>
                </div>
                <ImageModalXMark
                  handleModal={() => handleModal(null)}
                  color="#ffffff"
                />
              </div>
              <div className="w-full h-dvh flex items-center">
                <ImageSlider
                  initialImage={openedImage}
                  images={images}
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
            src={images[0]}
            alt={"image-" + images[0]}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <ImageSvgs onClick={() => handleModal(images[0])} />
        </div>
        {visibleImages.map((item, index) => {
          const isLast = index === visibleImages.length - 1;
          return (
            <div key={index} className="max-[769px]:hidden relative min-w-full">
              <Image
                src={item}
                alt={"image-" + item}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                onClick={() => handleModal(item)}
              />
              {isLast && (
                <div className="bg-black/60 absolute w-full h-full top-0 left-0 text-[var(--Other-White)] flex justify-center items-center">
                  <p>+{otherImagesCount} more</p>
                </div>
              )}
            </div>
          );
        })}
        <div className="min-[769px]:hidden relative min-w-full">
          <ImageSlider images={images} fullScreen={handleModal} />
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
