"use client";

import React, { useState } from "react";

const Description: React.FC<{description: string}> = ({description}) => {
  const [read, setRead] = useState<boolean>(false);
  return (
    <>
      <p
        className={`w-full h-fit mb-0.75 text-[var(--Secondary-Font)] leading-6 text-ellipsis overflow-hidden ${
          read ? "" : "line-clamp-3"
        }`}
      >
        {description}
      </p>
      <p
        onClick={() => setRead((prevRead) => !prevRead)}
        className="text-sm font-semibold text-[var(--Secondary-Teal)] leading-4.5 cursor-pointer w-fit"
      >
        Read {read ? "Less" : "More"}
      </p>
    </>
  );
};

export default Description;
