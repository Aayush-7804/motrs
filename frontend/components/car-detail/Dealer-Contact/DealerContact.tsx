import React from "react";
import { Call, Location } from "@/components/svg";
import DealerSchedule from "./dealerSchedule";

const DealerContact: React.FC<{
  schedule: string[][];
  contact: string;
  location: { [key: string]: string };
}> = ({ schedule, contact, location }) => {
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
      <DealerSchedule schedule={schedule} />
    </>
  );
};

export default DealerContact;
