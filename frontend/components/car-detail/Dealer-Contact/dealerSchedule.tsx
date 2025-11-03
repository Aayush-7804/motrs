'use client';
import { Clock, DownArrow } from "@/components/svg";
import { scheduling } from "@/helper/handlers";
import React, { useState } from "react";

const DealerSchedule: React.FC<{ schedule: string[][] }> = ({ schedule }) => {
  const scheduleTransform = scheduling(schedule);
  const [open, setOpen] = useState(false);
  return (
    <>
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
            {scheduleTransform.nextClose ??
              `next opening ${scheduleTransform.nextOpen}`}
          </span>
          <button onClick={() => setOpen((pervOpen) => (pervOpen = !pervOpen))} className={`${open ? "rotate-180" : ''}`}>
            <DownArrow />
          </button>
        </div>
      </div>
      {open && (
        <div>
          <p className="underline">Schedule:</p>
          <ul>
            {scheduleTransform.day.map((day, index) => (
              <li key={day} className="flex">
                <p className="flex-2/3">{day}</p>
                <p className="flex-1/3">{scheduleTransform.weekLabel[index]}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default DealerSchedule;
