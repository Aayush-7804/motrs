import React from "react";
import DetailPageForm from "./detailPageForm";
import DealSchedule from "./dealSchedule";

const DealerContact = () => {
  return (
    <div className="w-[485px] max-[1025px]:w-[344px] max-[769px]:w-full bg-[var(--Primary-Midnight-Blue)] text-[var(--Other-White)]">
      <h3 className="text-xl font-medium px-7.5 py-6.25">
        Motus Nissan, Renault, Kia, Hyundai and Select Menlyn
      </h3>
      <DetailPageForm />
      <div className="px-7.5 py-6.25 flex flex-col gap-3">
        <h4 className="text-xl font-medium">Dealership Details</h4>
        <DealSchedule />
      </div>
    </div>
  );
};

export default DealerContact;
