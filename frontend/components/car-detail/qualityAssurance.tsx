import React from "react";
import Button from "../common/Button";
import Image from "next/image";

const QualityAssurance = () => {
  return (
    <div className="min-[376px]:space-y-2.5 leading-5.5 text-[var(--other-White)]">
      <div className="flex items-center gap-3.5">
        <Image
          src={"/car-details-images/BrandLogo.jpg"}
          alt="Brand-logo"
          width={500}
          height={500}
          className="w-15 h-15 min-[376px]:hidden"
        />
        <h3 className="text-xl font-bold capitalize">Quality Assurance</h3>
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button className="min-[376px]:border max-[376px]:px-0 border-[var(-other-White)]">
        Find Out More
      </Button>
    </div>
  );
};

export default QualityAssurance;
