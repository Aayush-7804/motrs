import React from "react";
import { Call, Clock, DownArrow, Location } from "@/components/svg";
import { scheduling } from "@/helper/handlers";

const DealSchedule: React.FC<{
  schedule: string[][];
  contact: string;
  location: { [key: string]: string };
}> = ({ schedule, contact, location }) => {
  const scheduleTransform = scheduling(schedule);
  console.log(schedule, scheduleTransform);
  return (
    <>
      <div className="flex gap-2.5 leading-4.5">
        <Call />
        <span className="underline">{contact}</span>
      </div>
      <div className="flex gap-2.5">
        <Location />
        <p className="leading-4.5">
          {location.streets}, {location.city}, {location.state}, {location.PIN},{" "}
          {location.country}
          <span className="block font-bold underline text-[var(--Secondary-Teal)] ">
            Directions
          </span>
        </p>
      </div>
      <div className="flex gap-2.5">
        <Clock />
        <div className="flex gap-2.5">
          <span
            className={`leading-4.5 ${
              scheduleTransform.isOpen
                ? "text-[var(--Notification-Successful)]"
                : "text-[var(--Primary-Cherry-Red)]"
            }`}
          >
            {scheduleTransform.isOpen ? "Open" : "Close"}
          </span>
          <span className="leading-4.5">
            {scheduleTransform.nextClose ?? `next opening ${scheduleTransform.nextOpen}`}
          </span>
          <DownArrow />
        </div>
      </div>
    </>
  );
};

export default DealSchedule;
