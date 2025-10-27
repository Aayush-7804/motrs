import React from "react";
import {
  CarType,
  Consumption,
  EngineCap,
  Fuel,
  Milage,
  Transmission,
} from "@/components/svg";

const overviewDetails: {
  icon: React.ReactNode;
  header: string;
  value: string;
}[] = [
    {
      icon: <Milage />,
      header: "Mileage",
      value: "1 669 km",
    },
  {
    icon: <CarType />,
    header: "Drive Type",
    value: "4X2",
  },
  {
    icon: <Transmission />,
    header: "Transmission",
    value: "Manual",
  },
  {
    icon: <Fuel />,
    header: "Fuel",
    value: "Petrol",
  },
  {
    icon: <Consumption />,
    header: "Consumption",
    value: "4.8 l/100km",
  },
  {
    icon: <EngineCap />,
    header: "Engine Cap",
    value: "999 cc",
  },
];

const Overview = () => {
  return (
    <div className="pb-8.5 grid grid-cols-3 max-[376px]:grid-cols-2 gap-x-12.5 gap-y-8.25">
      {overviewDetails.map((overviewDetail, index) => (
        <div key={index} className="flex flex-col items-center text-center gap-1.75">
          {overviewDetail.icon}
          <div className="text-[var(--Primary-Font)] leading-6">
            <h4 className="text-[var(--Secondary-Font)]">
              {overviewDetail.header}
            </h4>
            <p className="font-bold">{overviewDetail.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
