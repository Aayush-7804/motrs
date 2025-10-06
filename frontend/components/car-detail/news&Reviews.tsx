import React from "react";
import Button from "../common/Button";
import Image from "next/image";

const NewsNReviews = () => {
  return (
    <div className="max-w-360 mx-auto py-15 px-10 max-[376px]:px-5 max-[376px]:py-7.5 bg-[var(--Primary-Midnight-Blue)] text-[var(--other-White)] flex flex-col gap-7.5 items-center">
      <h2 className="text-[50px] max-[376px]:text-3xl font-bold capitalize leading-13.75">
        news & reviews
      </h2>
      <div className="flex gap-10 w-full overflow-x-auto">
        <div className="flex min-w-106 max-w-106 max-[1025px]:min-w-112.5 max-[1025px]:max-w-112.5 max-[769px]:min-w-81 max-[769px]:max-w-81 max-[376px]:min-w-84 flex-col gap-6">
          <div className="relative h-[377px] overflow-hidden">
            <Image src={'/news/news1.jpg'} alt="news-image" width={500} height={500} className="h-full"  />
            <div className="absolute top-7.5 left-0 text-sm leading-5.5 px-2.5 py-0.75 bg-[var(--Primary-Midnight-Blue)]">
              <p>Adventure</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1.25">
              <h3 className="text-2xl font-medium">Lorem ipsum dolor sit amet</h3>
              <small className="leading-5.5 text-sm text-[var(--Disabled-Font)]">14 Feb 2024</small>
              <p className="leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <Button className="border border-[var(--other-White)]" >Read More</Button>
          </div>
        </div>
        <div className="flex min-w-106 max-w-106 max-[1025px]:min-w-112.5 max-[1025px]:max-w-112.5 max-[769px]:min-w-81 max-[769px]:max-w-81 max-[376px]:min-w-84 flex-col gap-6">
          <div className="relative h-[377px] overflow-hidden">
            <Image src={'/news/news2.jpg'} alt="news-image" width={500} height={500} className="h-full"  />
            <div className="absolute top-7.5 left-0 text-sm leading-5.5 px-2.5 py-0.75 bg-[var(--Primary-Midnight-Blue)]">
              <p>Adventure</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1.25">
              <h3 className="text-2xl font-medium">Lorem ipsum dolor sit amet</h3>
              <small className="leading-5.5 text-sm text-[var(--Disabled-Font)]">14 Feb 2024</small>
              <p className="leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <Button className="border border-[var(--other-White)]" >Read More</Button>
          </div>
        </div>
        <div className="flex min-w-106 max-w-106 max-[1025px]:min-w-112.5 max-[1025px]:max-w-112.5 max-[769px]:min-w-81 max-[769px]:max-w-81 max-[376px]:min-w-84 flex-col gap-6">
          <div className="relative h-[377px] overflow-hidden">
            <Image src={'/news/news3.jpg'} alt="news-image" width={500} height={500} className="h-full"  />
            <div className="absolute top-7.5 left-0 text-sm leading-5.5 px-2.5 py-0.75 bg-[var(--Primary-Midnight-Blue)]">
              <p>Adventure</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1.25">
              <h3 className="text-2xl font-medium">Lorem ipsum dolor sit amet</h3>
              <small className="leading-5.5 text-sm text-[var(--Disabled-Font)]">14 Feb 2024</small>
              <p className="leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <Button className="border border-[var(--other-White)]" >Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsNReviews;
