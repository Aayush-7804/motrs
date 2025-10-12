import { RegHeart } from "@/components/svg";
import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

const ImageSvgs: React.FC<{onClick?: () => void}> = ({onClick}) => {
  return (
    <div>
      <div className="absolute z-10 top-3 right-3.75 px-3.5 py-1.5 rounded-[30px] bg-[var(--Other-White)] opacity-90 flex items-center gap-4">
        <RegHeart />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M15 6.66675C16.3807 6.66675 17.5 5.54746 17.5 4.16675C17.5 2.78604 16.3807 1.66675 15 1.66675C13.6193 1.66675 12.5 2.78604 12.5 4.16675C12.5 5.54746 13.6193 6.66675 15 6.66675Z"
            stroke="#2AA295"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z"
            stroke="#2AA295"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4525 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4525 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z"
            stroke="#2AA295"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.15845 11.2583L12.8501 14.575"
            stroke="#2AA295"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.8418 5.42505L7.15845 8.74172"
            stroke="#2AA295"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="absolute z-10 bottom-3 right-3.75 pl-3.5 pr-3 pb-0.75 pt-1.25 text-[var(--Secondary-Teal)] bg-[var(--Other-White)] opacity-90 font-bold leading-6 rounded-[30px]">
        360°
      </div>
      <div className={`${onClick ? "block" : "hidden"} absolute z-10 bottom-3 left-3.75 p-1.25 text-[var(--Secondary-Teal)] font-bold bg-[var(--Other-White)] rounded-[5px] opacity-90`}>
        <BsArrowsFullscreen onClick={onClick} />
      </div>
    </div>
  );
};

export default ImageSvgs;
