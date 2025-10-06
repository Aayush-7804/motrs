import React from "react";

const Description = () => {
  return (
    <div className="mb-9.25">
      <div className="flex flex-col gap-5.75">
        <h3 className="text-xl font-bold capitalize leading-5.5">
          description
        </h3>
        <p className="w-full h-19 text-[var(--Secondary-Font)] leading-6 text-ellipsis overflow-hidden line-clamp-3">
          &ldquo;Experience the power and versatility of the 2013 Nissan Juke
          1.6 Acenta! With a fuel-efficient 1598cc engine and 158nm torque, this
          SUV offers a top speed of 178km/h and an impressive 767km range.
          Equipped with standard features like air conditioning, ABS, Bluetooth
          connectivity, and more, don&lsquo;t miss out on this used gem. Drive
          home in style today!&ldquo;
        </p>
      </div>

      <p className="text-sm font-semibold text-[var(--Secondary-Teal)] leading-4.5">
        Read More
      </p>
    </div>
  );
};

export default Description;
