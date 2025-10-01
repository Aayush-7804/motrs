import React from "react";
import { Eye, LeftArrow } from "../svg";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center px-9.25">
      <div className="flex items-center gap-2.5">
        <button className="py-4 w-30 h-12.5 font-semibold text-[13px] text-[var(--Primary-Muted-Blue)] inline-flex items-center gap-2.5">
          <LeftArrow />
          <p className="leading-4.5">Back to listing</p>
        </button>
        <ul className="flex gap-1.25 text-sm">
          {[
            "Home",
            "Used Cars",
            "2024 Audi A4",
            "2024 Audi A4 40 TFSI S line",
          ].map((item, index) => (
            <li
              key={index}
              className="border-r px-1.25 last:font-bold last:border-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-3 py-2.75 h-5.75 rounded-[26px] text-xs font-bold bg-[var(--other-offWhite)] inline-flex items-center gap-1.75">
        <Eye />
        <p>48 Viewing Now</p>
      </div>
    </div>
  );
};

export default Navigation;
