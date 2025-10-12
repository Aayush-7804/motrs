import React from "react";
import Button from "../common/Button";
import { Eye, InfoMark, SupInfoMark } from "../svg";
import InfoLabels from "../common/InfoLabels";

const DetailsHeader = () => {
  return (
    <div className="max-w-360 mx-auto">
      <div className="min-[376px]:hidden flex items-center justify-between mb-3.75">
        <button className="w-21.5 h-5.75 bg-[var(--Secondary-Teal)] text-[var(--Other-White)] flex justify-center items-center gap-1">
          <span className="text-[10px]">Great Price</span>
          <InfoMark />
        </button>
        <div className="px-3 py-2.75 h-5.75 rounded-[26px] leading-4.5 text-xs font-bold bg-[var(--Other-offWhite)] text-[var(--Primary-Midnight-Blue)] inline-flex items-center gap-1.75">
          <Eye />
          <p>48 Viewing Now</p>
        </div>
      </div>
      <div className="max-[376px]:block mb-7.5 text-[var(--Primary-Font)] flex items-center justify-between">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-[32px] font-medium leading-10.5 max-[376px]:leading-6.5 max-[769px]:text-2xl max-[376px]:text-xl">
            2013 Nissan Juke 1.6 Acenta
          </h1>
          <div className="flex items-center gap-5">
            <button className="max-[376px]:hidden w-21.5 h-5.75 bg-[var(--Secondary-Teal)] text-[var(--Other-White)] flex justify-center items-center gap-1">
              <span className="text-[10px] leading-2.5">Great Price</span>
              <InfoMark />
            </button>
            <InfoLabels
              items={["Used Car", "3434Km", "Automatic", "Petrol"]}
              className="max-[769px]:text-xs text-[var(--Secondary-Font)] leading-6"
            />
          </div>
        </div>
        <div className="flex items-center gap-8 max-[769px]:gap-4 max-[376px]:block">
          <div className="text-[var(--Primary-Cherry-Red)] max-[376px]:mb-4.5">
            <div className="flex items-end gap-1">
              <span className="font-normal leading-6 max-[376px]:leading-7 text-[var(--Secondary-Font)] max-[769px]:text-[10px]">
                Was <span className="line-through">R145 800</span>
              </span>
              <h2 className="text-3xl leading-8.25 font-bold max-[769px]:text-xl">
                R122 800
              </h2>
            </div>
            <div className="flex justify-end gap-1 max-[376px]:justify-normal leading-5.5">
              <span>R 7 636 p/m</span>
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
