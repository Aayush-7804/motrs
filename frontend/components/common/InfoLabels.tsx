import React from "react";

const InfoLabels: React.FC<{ items: string[]; className: string }> = ({
  items,
  className,
}) => {
  return (
    <ul className="flex items-center gap-1.5">
      {items.map((item, index) => (
        <li
          key={index}
          className={`not-first:px-1.5 whitespace-nowrap border-r first:pr-1.5 last:border-0 ${className}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default InfoLabels;
