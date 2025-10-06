import React from "react";
import Navigation from "@/components/car-detail/navigation";
import ImageGrid from "@/components/car-detail/imageGrid";
import DetailsHeader from "@/components/car-detail/detailsHeader";
import DetailPageForm from "@/components/form/detailPageForm";
import Image from "next/image";
import QualityAssurance from "@/components/car-detail/qualityAssurance";
import CarCompare from "@/components/car-detail/carCompare";
import DealSchedule from "@/components/form/dealSchedule";
import Overview from "@/components/car-detail/overview";
import Description from "@/components/car-detail/description";
import DetailsSpecification from "@/components/car-detail/Details-Specification";
import FinanceCalculator from "@/components/car-detail/financeCalculator";
import Subscribe from "@/components/car-detail/subscribe";

const page = () => {
  return (
    <main className="max-w-360 mx-auto">
      <Navigation />
      <div className="max-[376px]:hidden max-[1441px]:px-9.75">
        <DetailsHeader />
      </div>
      <ImageGrid />
      <div className="min-[376px]:hidden max-[376px]:px-5">
      <DetailsHeader />
      </div>
      <div className="max-[1441px]:px-9.75 max-[376px]:px-5 mb-10 grid grid-cols-[repeat(2,1fr)_484px] max-[1025px]:grid-cols-[repeat(2,1fr)_334px] max-[769px]:block max-[769px]:space-y-8 gap-10">
        <div className="col-span-2 max-[376px]:flex flex-col">
          <Description />
          <div className="mb-8 bg-[var(--other-offWhite)]">
            <h3 className="px-4.75 py-5.25 text-xl leading-5.5 font-bold capitalize">
              overview
            </h3>
            <Overview />
          </div>
          <DetailsSpecification />
        </div>
        <div className="space-y-8">
          <div className="bg-[var(--Primary-Midnight-Blue)] text-[var(--other-White)]">
            <h3 className="text-xl font-medium px-7.5 py-6.25">
              Motus Nissan, Renault, Kia, Hyundai and Select Menlyn
            </h3>
            <DetailPageForm />
            <div className="px-7.5 py-6.25 flex flex-col gap-3">
              <h4 className="text-xl font-medium">Dealership Details</h4>
              <DealSchedule />
            </div>
          </div>
          <div className="px-4.25 py-5 flex gap-3 bg-gradient-to-r from-[#02253A] from-[-28.8%]  via-[#008291] via-[42.68%] to-[#2AA295] to-[95.49%]">
            <Image
              src={"/car-details-images/BrandLogo.jpg"}
              alt="Brand-logo"
              width={500}
              height={500}
              className="w-20 h-20 max-[376px]:hidden"
            />
            <QualityAssurance />
          </div>
          <CarCompare />
        </div>
      </div>
      <FinanceCalculator />
      <Subscribe />
    </main>
  );
};

export default page;
