import React from "react";
import Navigation from "@/components/car-detail/navigation";
import ImageGrid from "@/components/car-detail/Image-grid";
import DetailsHeader from "@/components/car-detail/detailsHeader";
import Image from "next/image";
import QualityAssurance from "@/components/car-detail/qualityAssurance";
import CarCompare from "@/components/car-detail/carCompare";
import Overview from "@/components/car-detail/overview";
import Description from "@/components/car-detail/description";
import DetailsSpecification from "@/components/car-detail/Details-Specification";
import FinanceCalculator from "@/components/car-detail/financeCalculator";
import Subscribe from "@/components/car-detail/subscribe";
import Deal from "@/components/car-detail/Dealer-Contact";
import SimilarVehicle from "@/components/car-detail/SimilarVehical";
import MoveOnTo from "@/components/car-detail/moveOnTo";
import NewsNReviews from "@/components/car-detail/News-and-Reviews";
import {
  getDealerTitle,
  specificationArrayCreator,
  specificationObjectCleaner,
} from "@/helper/object-manager";
import {
  fetchCarData,
  fetchDealerData,
  fetchNewsData,
  fetchSimilarData,
} from "@/helper/fetch";

const car = "9f386734-5406-41b8-957e-3cb378c40076";

const page = async () => {
  const carData = await fetchCarData(car);
  const carNews = await fetchNewsData();
  const carSimilar = await fetchSimilarData(car);
  const detailsSpecification = specificationArrayCreator(
    carData.body,
    carData.EnE,
    carData.EnD,
    carData.features
  );
  const dealerData = await fetchDealerData(carData.dealerId);
  const dealerTitle = await getDealerTitle(dealerData);
  const detailsTitle = `${carData.carLaunchYear} ${carData.carBrand} ${carData.carRange} ${carData.carModel} ${carData.carColor}`;

  return (
    <main>
      <Navigation details={carData} />
      <div className="flex flex-col min-[376px]:flex-col-reverse">
        <ImageGrid
          dealer={dealerData}
          dealerTitle={dealerTitle}
          images={carData.carImagesUrl}
          title={detailsTitle}
          description={carData.carDescription}
        />
        <DetailsHeader title={detailsTitle} details={carData} />
      </div>
      <div className="max-w-360 mx-auto max-[1441px]:px-9.75 max-[376px]:px-5 mb-10 grid grid-cols-[repeat(2,1fr)_484px] max-[1025px]:grid-cols-[repeat(2,1fr)_334px] max-[769px]:block max-[769px]:space-y-8 gap-10">
        <div className="col-span-2 max-[376px]:flex flex-col">
          <div className="mb-9.25">
            <h3 className="text-xl font-bold capitalize leading-5.5 mb-5.75">
              description
            </h3>
            <Description description={carData.carDescription} />
          </div>
          <div className="mb-8 bg-[var(--Other-offWhite)]">
            <h3 className="px-4.75 py-5.5 text-xl leading-5.5 font-bold capitalize">
              overview
            </h3>
            <Overview
              overview={specificationObjectCleaner(carData.carOverview)}
            />
          </div>
          <DetailsSpecification DS={detailsSpecification} />
        </div>
        <div className="space-y-8">
          <Deal dealer={dealerData} title={dealerTitle} />
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
      <SimilarVehicle
        brand={carData.carBrand}
        model={carData.carRange}
        cars={carSimilar}
      />
      <MoveOnTo />
      <NewsNReviews news={carNews} />
      <Subscribe />
    </main>
  );
};

export default page;
