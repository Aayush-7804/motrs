import React from "react";
import Button from "../common/Button";
import { InfoMark, SupInfoMark } from "../svg";

const DetailsHeader = () => {
  return (
    <div className="max-[1441px]:px-9.75 mb-7.5 text-[var(--Primary-Font)] flex items-center justify-between">
      <div className="flex flex-col gap-2.5">
        <h1 className="text-4xl font-medium">2013 Nissan Juke 1.6 Acenta</h1>
        <div className="flex items-center gap-5">
          <button className="w-21.5 h-5.75 bg-[var(--Secondary-Teal)] text-[var(--other-White)] flex justify-center items-center gap-1">
            <span className="text-[10px]">Great Price</span>
            <InfoMark />
          </button>
          <ul className="flex items-center gap-1.5 text-[var(--Secondary-Font)]">
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
      <div className="flex items-center gap-8">
        <div className="text-[var(--Primary-Cheery-Red)]">
          <h2 className="mb-1 text-3xl font-bold">
            <span className="text-base font-normal text-[var(--Secondary-Font)] ">
              Was <span className="line-through">R145 800</span>
            </span>{" "}
            R122 800
          </h2>
          <div className="flex justify-end gap-1">
            <span>R 7 636 p/m</span>
            <SupInfoMark />
          </div>
        </div>
        <Button className="text-[var(--other-White)] bg-[var(--Primary-Cheery-Red)] ">
          Enquire Now
        </Button>
      </div>
    </div>
  );
};

export default DetailsHeader;
