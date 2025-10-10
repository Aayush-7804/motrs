import Button from "@/components/common/Button";
import Image from "next/image";
import React from "react";

const NewsNReviewItem = () => {
  return (
    <div className="flex min-w-106 max-[376px]:min-w-full max-w-106 flex-col gap-6">
      <div className="relative h-[377px] overflow-hidden">
        <Image
          src={"/news/news1.jpg"}
          alt="news-image"
          width={500}
          height={500}
          className="h-full"
        />
        <div className="absolute top-7.5 left-0 text-sm leading-5.5 px-2.5 py-0.75 bg-[var(--Primary-Midnight-Blue)]">
          <p>Adventure</p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-1.25">
          <h3 className="text-2xl font-medium">Lorem ipsum dolor sit amet</h3>
          <small className="leading-5.5 text-sm text-[var(--Disabled-Font)]">
            14 Feb 2024
          </small>
          <p className="leading-6 text-ellipsis line-clamp-3 h-18">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <Button className="border border-[var(--other-White)]">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default NewsNReviewItem;
