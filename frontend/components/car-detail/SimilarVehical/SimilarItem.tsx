import Button from "@/components/common/Button";
import InfoLabels from "@/components/common/InfoLabels";
import FormInput from "@/components/form/formInput";
import { Location, RegHeart, SupInfoMark } from "@/components/svg";
import React from "react";
import ImageSlide from "./imageSlide";

const SimilarItem: React.FC<{ item: number; rank?: string }> = ({
  item,
  rank,
}) => {
  return (
    <div className="relative w-[310px] h-[521px] border-2 border-[var(--other-offWhite)] bg-[var(--other-White)]">
      <small
        className={`absolute z-30 top-3.5 left-0 px-2.5 py-0.75 capitalize text-[var(--other-White)] ${
          rank === "on special"
            ? "bg-[var(--Secondary-Dirty-Red)]"
            : "bg-[var(--Secondary-Teal)]"
        }`}
      >
        grate price
      </small>
      <ImageSlide />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2.75">
          <div>
            <div className="flex items-center gap-3.75">
              <h4 className="text-2xl font-bold text-[var(--Primary-Cherry-Red)] w-full whitespace-nowrap text-ellipsis line-clamp-1">
                {item}
              </h4>
              <RegHeart />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="18"
                viewBox="0 0 5 18"
                fill="none"
              >
                <circle cx="2.85721" cy="2.14286" r="2.14286" fill="#D9D9D9" />
                <circle cx="2.85721" cy="9.00003" r="2.14286" fill="#D9D9D9" />
                <circle cx="2.85721" cy="15.8572" r="2.14286" fill="#D9D9D9" />
              </svg>
            </div>
            <div className="flex items-center gap-1.5">
              <p className="text-xs leading-4.5 text-[var(--Primary-Cherry-Red)]">
                R 27 636 p/m
              </p>
              <SupInfoMark />
            </div>
          </div>
          <div className="flex flex-col gap-1.25 h-25">
            <h4 className="font-bold leading-6 text-[var(--Primary-Midnight-Blue)] text-ellipsis line-clamp-2">
              2024 Jeep Grand Cherokee L 3.6 4x4
            </h4>
            <InfoLabels
              items={["Used Car", "150km", "Automatic", "Petrol"]}
              className="text-xs leading-4.25 text-[var(--Primary-Midnight-Blue)] "
            />
            <small className="px-2.5 py-0.5 w-fit bg-[#E7E7E5] text-[var(--Primary-Font)] capitalize">
              silver
            </small>
          </div>
          <div className="flex items-center gap-1.5">
            <Location size={16} color="#A7A7A7" />
            <p className="text-xs leading-4.5 text-[var(--Disabled-Font)]">
              Arnold Chatz Cars, Johannesburg
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <FormInput
            formName="compare"
            name="Compare"
            type="checkbox"
            className="flex flex-row-reverse items-center text-sm leading-5.5 justify-end gap-3.25"
          />
          <Button className="w-[139px] text-[var(--Primary-Muted-Blue)] border border-[var(--Primary-Muted-Blue)]">
            Enquire
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimilarItem;
