"use client";

import React, { useState } from "react";
import Button from "../../common/Button";
import Specifications from "./Specifications";

const INITIAL = false;

const DetailsSpecification = () => {
  const [showSpecifications, setShowSpecifications] = useState(INITIAL);

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
          <Specifications initialCondition={INITIAL} />
        </div>
      )}
    </>
  );
};

export default DetailsSpecification;
