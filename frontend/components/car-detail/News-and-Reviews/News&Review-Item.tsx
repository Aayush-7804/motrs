import Button from "@/components/common/Button";
import { dateConversion } from "@/helper/handlers";
import { news } from "@/types/news";
import Image from "next/image";
import React from "react";

const NewsNReviewItem: React.FC<{ news: news }> = ({ news }) => {
  const date = dateConversion(news.createdAt);

  return (
    <div className="flex min-w-[428px] max-w-[428px] max-[376px]:min-w-[335px] flex-col gap-6">
      <div className="relative h-[377px] max-[376px]:h-[300px] max-[769px]:h-[325px] overflow-hidden">
        <Image
          src={"/news/news1.jpg"}
          alt="news-image"
          width={500}
          height={500}
          className="h-full object-cover"
        />
        {news.tag && (
          <div className="absolute top-7.5 left-0 text-sm leading-5.5 px-2.5 py-0.75 bg-[var(--Primary-Midnight-Blue)]">
            <p>{news.tag}</p>
          </div>
        )}
      </div>
      <div className="space-y-6">
        <div className="space-y-1.25">
          <h3 className="text-2xl font-medium">{news.title}</h3>
          <small className="leading-5.5 text-sm text-[var(--Disabled-Font)]">
            {date}
          </small>
          <p className="leading-6 text-ellipsis line-clamp-3 h-18">
            {news.description}
          </p>
        </div>
        <Button className="border border-[var(--Other-White)]">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default NewsNReviewItem;
