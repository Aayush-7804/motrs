import React from "react";
import Button from "../common/Button";
import { Eye, InfoMark, SupInfoMark } from "../svg";
import InfoLabels from "../common/InfoLabels";
import { header } from "@/types/header";
import { carHierarchy, toZAR } from "@/helper/handlers";

const DetailsHeader: React.FC<{ details: header; title: string }> = ({
  details,
  title,
}) => {
  return (
    <div className="mx-auto px-9.75 max-[376px]:px-5 min-[1025px]:w-360 max-[1441px]:m-0">
      <div className="min-[376px]:hidden flex items-center justify-between mb-3.75">
        {carHierarchy(details.carPrice, details.carPrePrice) && (
          <button className="w-21.5 h-5.75 bg-[var(--Secondary-Teal)] text-[var(--Other-White)] flex justify-center items-center gap-1">
            <span className="text-[10px]">Great Price</span>
            <InfoMark />
          </button>
        )}
        <div className="px-3 py-2.75 h-5.75 rounded-[26px] leading-4.5 text-xs font-bold bg-[var(--Other-offWhite)] text-[var(--Primary-Midnight-Blue)] inline-flex items-center gap-1.75">
          <Eye />
          <p>48 Viewing Now</p>
        </div>
      </div>
      <div className="max-[376px]:block mb-7.5 text-[var(--Primary-Font)] flex items-center justify-between">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-[32px] font-medium leading-10.5 max-[376px]:leading-6.5 max-[769px]:text-2xl max-[376px]:text-xl">
            {title}
          </h1>
          <div className="flex items-center gap-5">
            {carHierarchy(details.carPrice, details.carPrePrice) && (
              <button className="w-21.5 h-5.75 bg-[var(--Secondary-Teal)] text-[var(--Other-White)] flex justify-center items-center gap-1">
                <span className="text-[10px]">Great Price</span>
                <InfoMark />
              </button>
            )}
            <InfoLabels
              items={[
                details.carCondition,
                details.carOverview.Milage,
                details.carOverview.Transmission,
                details.carOverview.Fuel,
              ]}
              className="max-[769px]:text-xs text-[var(--Secondary-Font)] leading-6"
            />
          </div>
        </div>
        <div className="flex items-center gap-8 max-[769px]:gap-4 max-[376px]:block">
          <div className="text-[var(--Primary-Cherry-Red)] max-[376px]:mb-4.5">
            <div className="flex items-end gap-1">
              <span className="font-normal leading-6 max-[376px]:leading-7 text-[var(--Secondary-Font)] max-[769px]:text-[10px]">
                Was{" "}
                <span className="line-through">
                  {toZAR(details.carPrePrice)}
                </span>
              </span>
              <h2 className="text-3xl leading-8.25 font-bold max-[769px]:text-xl">
                {toZAR(details.carPrice)}
              </h2>
            </div>
            <div className="flex justify-end gap-1 max-[376px]:justify-normal leading-5.5">
              <span>{toZAR(details.carEMI)} p/m</span>
              <SupInfoMark />
            </div>
          </div>
          <Button className="text-[var(--Other-White)] bg-[var(--Primary-Cherry-Red)]">
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
