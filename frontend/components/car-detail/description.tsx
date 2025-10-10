"use client";

import React, { useState } from "react";

const Description = () => {
  const [read, setRead] = useState<boolean>(false);
  return (
    <>
      <p
        className={`w-full h-fit mb-0.75 text-[var(--Secondary-Font)] leading-6 text-ellipsis overflow-hidden ${
          read ? "" : "line-clamp-3"
        }`}
      >
        &ldquo;Experience the power and versatility of the 2013 Nissan Juke 1.6
        Acenta! With a fuel-efficient 1598cc engine and 158nm torque, this SUV
        offers a top speed of 178km/h and an impressive 767km range. Equipped
        with standard features like air conditioning, ABS, Bluetooth
        connectivity, and more, don&lsquo;t miss out on this used gem. Drive
        home in style today!&ldquo;
      </p>
      <p
        onClick={() => setRead((prevRead) => !prevRead)}
        className="text-sm font-semibold text-[var(--Secondary-Teal)] leading-4.5"
      >
        Read {read ? "Less" : "More"}
      </p>
    </>
  );
};

export default Description;
