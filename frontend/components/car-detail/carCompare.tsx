import React from "react";
import { PinkPlus } from "../svg";
import Button from "../common/Button";

const CarCompare = () => {
  return (
    <div className="px-7.5 max-[376px]:p-6.5 py-6 bg-[var(--other-White)] border border-[var(--Primary-Muted-Blue)] flex flex-col gap-6.25">
      <h3 className="text-xl font-medium text-[var(--Primary-Midnight-Blue)]">
        Compare Cars
      </h3>
      <div className="grid grid-cols-4 gap-3.5 max-[376px]:gap-2.5">
        <div className="max-[376px]:w-15.75 max-[376px]:h-15.75 max-[376px]:p-1.25 p-3 flex flex-col justify-center items-center gap-1.5 text-center border border-dashed border-[var(--Font-Disabled-Font)]">
          <PinkPlus />
          <h4 className="max-[1025px]:text-[10px] leading-4.5 text-xs font-bold text-[var(--Primary-Cheery-Red)]">
            Add this Car
          </h4>
        </div>
        <div className="max-[376px]:w-15.75 max-[376px]:h-15.75 p-1.25 border border-dashed border-[var(--Font-Disabled-Font)]"></div>
        <div className="max-[376px]:w-15.75 max-[376px]:h-15.75 p-1.25 border border-dashed border-[var(--Font-Disabled-Font)]"></div>
        <div className="max-[376px]:w-15.75 max-[376px]:h-15.75 p-1.25 border border-dashed border-[var(--Font-Disabled-Font)]"></div>
      </div>
      <Button
        disable={true}
        className="self-end justify-end bg-[var(--Primary-Cheery-Red)] text-[var(--other-White)] disabled:opacity-30"
      >
        Compare Selected
      </Button>
    </div>
  );
};

export default CarCompare;
