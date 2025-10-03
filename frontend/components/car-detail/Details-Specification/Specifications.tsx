import React, { useState } from "react";

const Specifications: React.FC<{ initialCondition: boolean }> = ({
  initialCondition,
}) => {
  const [showSpecificationsDetail, setShowSpecificationsDetail] =
    useState(initialCondition);
  const showDetails = () => {
    setShowSpecificationsDetail((prevShowDetails) => !prevShowDetails);
  };
  return (
    <div
      onClick={showDetails}
      className="px-4.75 py-5.25 bg-[var(--other-offWhite)]"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold capitalize">body</h3>
        {!showSpecificationsDetail ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15 12.5L10 7.5L5 12.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {showSpecificationsDetail && (
        <div className="mt-3.75 flex items-center gap-47.5">
          <div className="text-[var(--Secondary-Font)]">
            <h4>Body Type</h4>
            <h4>Doors</h4>
            <h4>Length</h4>
            <h4>Width</h4>
            <h4>Height</h4>
            <h4>Weight</h4>
            <h4>Seats</h4>
            <h4>Front Tyres</h4>
            <h4>Rear Tyres</h4>
            <h4>Driven Wheels</h4>
          </div>
          <div className="font-bold  text-[var(--Primary-Font)] ">
            <p>SUV</p>
            <p>5</p>
            <p>4135 mm</p>
            <p>0 mm</p>
            <p>1565 mm</p>
            <p>1645 kg</p>
            <p>5</p>
            <p>205/60 R16</p>
            <p>205/60 R16</p>
            <p>Front</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Specifications;
