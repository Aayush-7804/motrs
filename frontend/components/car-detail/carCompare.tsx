import React from "react";
import { PinkPlus } from "../svg";
import Button from "../common/Button";

const CarCompare = () => {
  return (
    <div className="px-7.5 py-6 bg-[var(--other-White)] border border-[var(--Primary-Muted-Blue)] flex flex-col gap-6.25">
      <h3 className="text-xl font-medium text-[var(--Primary-Midnight-Blue)]">
        Compare Cars
      </h3>
      <div className="grid grid-cols-4 gap-2.75">
        <div className="h-25 p-1.25 flex flex-col justify-center items-center gap-1.5 text-center border border-dashed border-[var(--Font-Disabled-Font)]">
          <PinkPlus />
          <h4 className="text-xs font-bold text-[var(--Primary-Cheery-Red)]">
            Add this Car to Compare
          </h4>
        </div>
        <div className="h-25 border border-dashed border-[var(--Font-Disabled-Font)]"></div>
        <div className="h-25 border border-dashed border-[var(--Font-Disabled-Font)]"></div>
        <div className="h-25 border border-dashed border-[var(--Font-Disabled-Font)]"></div>
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
