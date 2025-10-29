import { body, EnD, EnE, features } from "@/types/specifications";
import { objectEntries } from "@/helper/handlers";
import React, { useState } from "react";

const Specifications: React.FC<{
  spec: body | EnD | EnE | features;
  title: string;
}> = ({ spec, title }) => {
  const [showSpecificationsDetail, setShowSpecificationsDetail] =
    useState(false);
  const showDetails = () => {
    setShowSpecificationsDetail((prevShowDetails) => !prevShowDetails);
  };
  const entries = objectEntries(spec);
  return (
    <div className="flex flex-col gap-3.75 px-4.75 py-5.25 bg-[var(--Other-offWhite)]">
      <div onClick={showDetails} className="flex justify-between items-center">
        <h3 className="text-xl leading-5.5 font-bold capitalize">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`transition-all duration-100 ${
            showSpecificationsDetail ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showSpecificationsDetail && (
        <div className="flex flex-col">
          {entries.map(([key, value]) => (
            <div key={key} className="flex items-center gap-2.5 leading-8.5">
              <p className="flex-2/3 text-[var(--Secondary-Font)] whitespace-nowrap text-ellipsis overflow-hidden line-clamp-1">
                {key}
              </p>
              <p className="flex-1/3 font-bold text-[var(--Primary-Font)] whitespace-nowrap text-ellipsis overflow-hidden line-clamp-1">
                {value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Specifications;
