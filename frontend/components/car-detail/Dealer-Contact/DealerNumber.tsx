"use client";
import React, { useState } from "react";

const DealerNumber: React.FC<{ contact: string }> = ({ contact }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="px-3.75 leading-5.5 py-3.25 text-xs bg-[var(--Other-White)] flex items-center justify-between">
      <p className="text-[var(--Primary-Font)]">{show && contact}</p>
      <button
        type="button"
        onClick={() => setShow((prevShow: boolean) => (prevShow = !prevShow))}
        className="font-bold text-[var(--Primary-Muted-Blue)] "
      >
        Show Contect Number
      </button>
    </div>
  );
};

export default DealerNumber;
