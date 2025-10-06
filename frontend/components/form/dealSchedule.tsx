import React from "react";
import { Call, Clock, DownArrow, Location } from "../svg";

const DealSchedule = () => {
  return (
    <>
      <div className="flex gap-2.5 leading-4.5">
        <Call />
        <span>021 5516 5435</span>
      </div>
      <div className="flex gap-2.5">
        <Location />
        <p className="leading-4.5">
          Cnr Blaauberg &, Koeberg Rd, Table View, Cape Town, 7441
          <span className="block font-bold underline text-[var(--Secondary-Teal)] ">
            Directions
          </span>
        </p>
      </div>
      <div className="flex gap-2.5">
        <Clock />
        <div className="flex gap-2.5">
          <span className="leading-4.5">Open</span>
          <span className="leading-4.5">Close 5pm</span>
          <DownArrow />
        </div>
      </div>
    </>
  );
};

export default DealSchedule;
