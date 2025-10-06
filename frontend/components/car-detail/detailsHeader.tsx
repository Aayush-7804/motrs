import React from "react";
import Button from "../common/Button";
import { Eye, InfoMark, SupInfoMark } from "../svg";

const DetailsHeader = () => {
  return (
    <div>
      <div className="min-[376px]:hidden flex items-center justify-between mb-3.75">
        <button className="w-21.5 h-5.75 bg-[var(--Secondary-Teal)] text-[var(--other-White)] flex justify-center items-center gap-1">
          <span className="text-[10px]">Great Price</span>
          <InfoMark />
        </button>
        <div className="px-3 py-2.75 h-5.75 rounded-[26px] leading-4.5 text-xs font-bold bg-[var(--other-offWhite)] text-[var(--Primary-Midnight-Blue)] inline-flex items-center gap-1.75">
          <Eye />
          <p>48 Viewing Now</p>
        </div>
      </div>
      <div className="max-[376px]:block mb-7.5 text-[var(--Primary-Font)] flex items-center justify-between">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-4xl font-medium leading-10.5 max-[376px]:leading-6.5 max-[769px]:text-2xl max-[376px]:text-xl">
            2013 Nissan Juke 1.6 Acenta
          </h1>
          <div className="flex items-center gap-5">
            <button className="max-[376px]:hidden w-21.5 h-5.75 bg-[var(--Secondary-Teal)] text-[var(--other-White)] flex justify-center items-center gap-1">
              <span className="text-[10px]">Great Price</span>
              <InfoMark />
            </button>
            <ul className="max-[769px]:text-xs flex items-center gap-1.5 text-[var(--Secondary-Font)] leading-6">
              {["Used Car", "3434Km", "Automatic", "Petrol"].map(
                (item, index) => (
                  <li key={index} className="px-1.5 border-r last:border-0">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-8 max-[769px]:gap-4 max-[376px]:block">
          <div className="text-[var(--Primary-Cheery-Red)] max-[376px]:mb-4.5">
            <div className="flex items-end gap-1">
              <span className="text-base font-normal leading-7.5 max-[376px]:leading-7 text-[var(--Secondary-Font)] max-[769px]:text-[10px]">
                Was <span className="line-through">R145 800</span>
              </span>
              <h2 className="min-[376px]:mb-1 text-3xl leading-8.25 font-bold max-[769px]:text-xl">
                R122 800
              </h2>
            </div>
            <div className="flex justify-end gap-1 max-[376px]:justify-normal leading-5.5">
              <span>R 7 636 p/m</span>
              <SupInfoMark />
            </div>
          </div>
          <Button className="text-[var(--other-White)] bg-[var(--Primary-Cheery-Red)] ">
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
