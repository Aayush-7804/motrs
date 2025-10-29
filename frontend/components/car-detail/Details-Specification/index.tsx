"use client";

import React, { useState } from "react";
import Button from "../../common/Button";
import Specifications from "./Specifications";
import { carSpecifications, specificationType } from "@/types/specifications";
import { specificationArrayTitle } from "@/helper/object-manager";

const DetailsSpecification: React.FC<{
  DS: specificationType;
}> = ({ DS }) => {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const show = () => {
    setShowSpecifications(true);
  };

  return (
    <>
      {!showSpecifications ? (
        <Button
          onClick={show}
          className="text-[var(--Primary-Muted-Blue)] border border-[var(--Primary-Muted-Blue)]"
        >
          Detailed Specifications
        </Button>
      ) : (
        <div className="space-y-5">
          {DS.map((spec: carSpecifications, index: number) => {
            const title = specificationArrayTitle(index);
            return <Specifications key={index} spec={spec} title={title} />;
          })}
        </div>
      )}
    </>
  );
};

export default DetailsSpecification;
