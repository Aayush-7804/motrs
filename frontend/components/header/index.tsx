import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import { Magnifying, RegHeart } from "../svg";

const navItems: string[] = [
  "Buy Cars",
  "Sell Your Car",
  "Specials",
  "Finance",
  "Find a Dealer",
  "Book a Service",
  "Fleet",
];

const Header = () => {
  return (
    <header className="bg-[var(--Primary-Midnight-Blue)] text-[var(--other-White)]">
      <div className="max-w-360 h-25 px-10 py-4.75 mx-auto flex justify-between items-center">
        <div className="min-[769px]:hidden px-14.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="13"
            viewBox="0 0 17 13"
            fill="none"
          >
            <rect
              width="17"
              height="2.19512"
              rx="1.09756"
              transform="matrix(1 0 0 -1 0 12.7195)"
              fill="#E2003C"
            />
            <rect
              width="17"
              height="2.19512"
              rx="1.09756"
              transform="matrix(1 0 0 -1 0 7.59741)"
              fill="#E2003C"
            />
            <rect
              width="17"
              height="2.19512"
              rx="1.09756"
              transform="matrix(1 0 0 -1 0 2.47559)"
              fill="#E2003C"
            />
          </svg>
        </div>
        <div className="w-58.5 h-9 overflow-hidden">
          <Image src="/Logo.png" alt="logo" width={224} height={36} priority />
        </div>
        <nav className="max-[769px]:hidden">
          <ul className="flex">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="max-[1025px]:text-[10px] max-[1025px]:px-3.5 px-5.5 py-3.5 text-sm leading-5.5 cursor-pointer hover:bg-[var(--Primary-Muted-Blue)] first:font-bold first:bg-[var(--Primary-Muted-Blue)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-9.75">
          <div className="max-[1025px]:hidden flex items-center gap-6 text-[var(--other-offWhite)]">
            <Magnifying />
            <RegHeart />
          </div>
          <Button className="bg-[var(--Primary-Cheery-Red)]">
            sign Up/ Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
