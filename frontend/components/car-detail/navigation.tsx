import React from "react";
import { Eye, LeftArrow } from "../svg";
import InfoLabels from "../common/InfoLabels";
import Button from "../common/Button";
import { header } from "@/types/header";

const Navigation: React.FC<{ details: header }> = ({ details }) => {
  return (
    <div className="max-w-360 mx-auto max-[1441px]:px-9.75 max-[376px]:px-5 max-[730px]:bg-[var(--Other-offWhite)] text-[var(--Primary-Font)] flex justify-between items-center">
      <div className="flex items-center gap-2.5 max-[730px]:w-full max-[730px]:justify-between">
        <div className="flex items-center gap-10.75 max-[769px]:flex-col max-[769px]:items-start">
          <Button className="whitespace-nowrap w-30.25 min-[1px]:px-0 h-12.5 inline-flex justify-center items-center gap-2.5 text-[var(--Primary-Muted-Blue)]">
            <LeftArrow />
            <p className="leading-4.5">Back to listing</p>
          </Button>
          <div className="max-[730px]:hidden">
            <InfoLabels
              items={[
                "Home",
                details.carCondition,
                details.carBrand,
                details.carRange,
                `${details.carRange} ${details.carModel}`,
              ]}
              className="leading-5.5 last:font-bold text-sm max-[769px]:text-xs"
              clickable
            />
          </div>
        </div>

        <div className="min-[730px]:hidden">
          <InfoLabels
            items={["previous", "next"]}
            className="leading-5.5 text-sm text-[var(--Primary-Muted-Blue)] max-[769px]:text-xs"
          />
        </div>
      </div>
      <div className="max-[730px]:hidden px-3 py-2.75 h-5.75 rounded-[26px] leading-4.5 text-xs font-bold bg-[var(--Other-offWhite)] text-[var(--Primary-Midnight-Blue)] inline-flex items-center gap-1.75">
        <Eye />
        <p>48 Viewing Now</p>
      </div>
    </div>
  );
};

export default Navigation;
