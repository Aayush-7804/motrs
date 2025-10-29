import React from "react";
import {
  CarType,
  Consumption,
  EngineCap,
  Fuel,
  Milage,
  Transmission,
} from "@/components/svg";
import { overview } from "@/types/specifications";
import { objectEntries } from "@/helper/handlers";
import { overviewIcons } from "@/types/overviewIcons";

const overviewDetailsIcon: overviewIcons = {
  Milage: <Milage />,
  "Drive Type": <CarType />,
  Transmission: <Transmission />,
  Fuel: <Fuel />,
  Consumption: <Consumption />,
  "Engine Cap": <EngineCap />,
};

const Overview: React.FC<{ overview: overview }> = ({ overview }) => {
  const overviewDetails = objectEntries(overview);
  const overviewDetailsIconEntries = objectEntries(overviewDetailsIcon);
  return (
    <div className="pb-8.5 grid grid-cols-3 max-[376px]:grid-cols-2 gap-x-12.5 gap-y-8.25">
      {overviewDetails.map(([key, value]) => (
        <div
          key={key}
          className="flex flex-col items-center text-center gap-1.75"
        >
          {overviewDetailsIconEntries.map(
            ([iconKey, iconValue]) =>
              iconKey === key && <div key={iconKey}>{iconValue}</div>
          )}
          <div className="text-[var(--Primary-Font)] leading-6">
            <h4 className="text-[var(--Secondary-Font)]">{key}</h4>
            <p className="font-bold">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
