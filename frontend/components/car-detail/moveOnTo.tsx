import Image from "next/image";
import React from "react";

const MoveOnTo = () => {
  return (
    <div className="max-w-360 mx-auto flex items-center justify-between px-4.25 mb-12.5 max-[376px]:mb-20 max-[376px]:mt-1.5 [&>div:nth-child(2)]:flex-row-reverse ">
      <div className="flex items-center gap-2.25">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
          >
            <path
              d="M8 1L1 8L8 15"
              stroke="#02253A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="px-2 pt-1 pb-2 text-xs font-bold leading-4.5 border border-[var(--other-Grey)] flex flex-col gap-1">
          <h3 className="text-[var(--Primary-Muted-Blue)] capitalize">
            Previous Listing
          </h3>
          <div className="w-28 h-21 overflow-hidden">
            <Image
              src={"/Similear/sm1.jpg"}
              alt="asd"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h5 className="text-[var(--Primary-Font)] ">R799 900</h5>
            <p className="font-normal text-[var(--Primary-Midnight-Blue)]">
              Ford Ranger
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2.25">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
          >
            <path
              d="M1 15L8 8L1 1"
              stroke="#02253A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="px-2 pt-1 pb-2 text-xs font-bold leading-4.5 border border-[var(--other-Grey)] flex flex-col gap-1">
          <h3 className="text-[var(--Primary-Muted-Blue)] capitalize">
            Previous Listing
          </h3>
          <div className="w-28 h-21 overflow-hidden">
            <Image
              src={"/Similear/sm1.jpg"}
              alt="asd"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h5 className="text-[var(--Primary-Font)] ">R799 900</h5>
            <p className="font-normal text-[var(--Primary-Midnight-Blue)]">
              Ford Ranger
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveOnTo;
