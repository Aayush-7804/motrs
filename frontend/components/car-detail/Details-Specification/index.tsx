"use client";

import React, { useState } from "react";
import Button from "../../common/Button";
import Specifications from "./Specifications";

const DetailsSpecification = () => {
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
          <Specifications />
        </div>
      )}
    </>
  );
};

export default DetailsSpecification;
