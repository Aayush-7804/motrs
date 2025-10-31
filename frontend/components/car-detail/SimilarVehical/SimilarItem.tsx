import Button from "@/components/common/Button";
import InfoLabels from "@/components/common/InfoLabels";
import FormInput from "@/components/form/formInput";
import { Location, RegHeart, SupInfoMark } from "@/components/svg";
import React from "react";
import ImageSlide from "./imageSlide";
import { header } from "@/types/header";
import { carHierarchy, toZAR } from "@/helper/handlers";

const SimilarItem: React.FC<{ item: header }> = ({ item }) => {
  return (
    <div className="relative w-[310px] h-[521px] border-2 border-[var(--Other-offWhite)] bg-[var(--Other-White)]">
      {carHierarchy(item.carPrice, item.carPrePrice) && (
        <small
          className={`absolute z-30 top-3.5 left-0 px-2.5 py-0.75 capitalize text-[var(--Other-White)] bg-[var(--Secondary-Teal)]`}
        >
          grate price
        </small>
      )}
      <ImageSlide images={item.carImagesUrl.slice(0,4)} />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2.75">
          <div>
            <div className="flex items-center gap-3.75">
              <h4 className="text-2xl font-bold text-[var(--Primary-Cherry-Red)] w-full whitespace-nowrap text-ellipsis line-clamp-1">
                {toZAR(item.carPrice)}
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
                {toZAR(item.carEMI)} p/m
              </p>
              <SupInfoMark />
            </div>
          </div>
          <div className="flex flex-col gap-1.25 h-25">
            <h4 className="font-bold leading-6 text-[var(--Primary-Midnight-Blue)] text-ellipsis line-clamp-2">
              {item.carLaunchYear} {item.carBrand} {item.carRange}{" "}
              {item.carModel}
            </h4>
            <InfoLabels
              items={[
                item.carCondition,
                item.carOverview.Milage,
                item.carOverview.Transmission,
                item.carOverview.Fuel,
              ]}
              className="text-xs leading-4.25 text-[var(--Primary-Midnight-Blue)] "
            />
            <small className="px-2.5 py-0.5 w-fit bg-[#E7E7E5] text-[var(--Primary-Font)] capitalize">
              {item.carColor}
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
            className="relative flex flex-row-reverse items-center text-sm leading-5.5 justify-end gap-3.25"
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
