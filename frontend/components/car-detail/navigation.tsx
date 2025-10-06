import React from "react";
import { Eye, LeftArrow } from "../svg";

const Navigation = () => {
  return (
    <div className=" max-[1441px]:px-9.75 max-[376px]:px-5  text-[var(--Primary-Font)] flex justify-between items-center">
      <div className="flex items-center gap-2.5 max-[376px]:w-full max-[376px]:justify-between">
        <button className="py-4 w-30 h-12.5 font-semibold text-xs text-[var(--Primary-Muted-Blue)] inline-flex items-center gap-2.5">
          <LeftArrow />
          <p className="leading-4.5">Back to listing</p>
        </button>
        <ul className="max-[376px]:hidden flex gap-1.25 text-sm max-[769px]:text-xs">
          {[
            "Home",
            "Used Cars",
            "2024 Audi A4",
            "2024 Audi A4 40 TFSI S line",
          ].map((item, index) => (
            <li
              key={index}
              className="border-r px-1.25 leading-5.5 last:font-bold last:border-0"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="min-[376px]:hidden flex gap-1.25 text-sm text-[var(--Primary-Muted-Blue)] max-[769px]:text-xs">
          {["previous", "next"].map((item, index) => (
            <li
              key={index}
              className="capitalize border-r px-1.25 leading-5.5 last:border-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="max-[376px]:hidden px-3 py-2.75 h-5.75 rounded-[26px] leading-4.5 text-xs font-bold bg-[var(--other-offWhite)] text-[var(--Primary-Midnight-Blue)] inline-flex items-center gap-1.75">
        <Eye />
        <p>48 Viewing Now</p>
      </div>
    </div>
  );
};

export default Navigation;
