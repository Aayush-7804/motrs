import Link from "next/link";
import React from "react";

const InfoLabels: React.FC<{
  items: string[];
  className: string;
  clickable?: boolean;
}> = ({ items, className, clickable }) => {
  return (
    <ul className="flex items-center gap-1.5">
      {items.map((item, index) => (
        <li
          key={index}
          className={`not-first:px-1.5 whitespace-nowrap border-r first:pr-1.5 last:border-0 ${className}`}
        >
          <Link href={item}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

export default InfoLabels;
