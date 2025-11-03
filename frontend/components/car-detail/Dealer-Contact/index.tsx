import React from "react";
import DetailPageForm from "./detailPageForm";
import DealerContact from "./DealerContact";
import { dealer } from "@/types/dealer";

const Deal: React.FC<{
  dealer:dealer;
  title: string;
}> = ({ dealer: dealerData, title }) => {
  const cars = new Set(
    dealerData.car?.map((item: { carBrand: string }) => item.carBrand)
  );
  const carBrand = [...cars].slice(0, 4).join(", ");

  return (
    <div className="w-[485px] max-[1025px]:w-[344px] max-[769px]:w-full bg-[var(--Primary-Midnight-Blue)] text-[var(--Other-White)]">
      <h3 className="text-xl font-medium px-7.5 py-6.25">
        Motus {carBrand} and select {title}
      </h3>
      <DetailPageForm contact={dealerData.contact} />
      <div className="px-7.5 py-6.25 flex flex-col gap-3">
        <h4 className="text-xl font-medium">Dealership Details</h4>
        <DealerContact
          schedule={dealerData.schedule}
          contact={dealerData.contact}
          location={dealerData.location}
        />
      </div>
    </div>
  );
};

export default Deal;
