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
      <div className="max-w-360 h-25 px-10 py-5 max-[769px]:p-0 max-[769px]:h-20 mx-auto flex justify-between items-center max-[769px]:justify-around">
        <div className="min-[769px]:hidden">
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
        <div className="flex items-center gap-9.75 max-[1025px]:gap-5">
          <div className="min-[769px]:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M17.7288 17.7292L20.1247 20.125M3.83301 5.75H19.1663M3.83301 11.5H7.66634M3.83301 17.25H7.66634M10.5413 14.375C10.5413 15.3917 10.9452 16.3667 11.6641 17.0856C12.383 17.8045 13.358 18.2083 14.3747 18.2083C15.3913 18.2083 16.3664 17.8045 17.0852 17.0856C17.8041 16.3667 18.208 15.3917 18.208 14.375C18.208 13.3583 17.8041 12.3833 17.0852 11.6644C16.3664 10.9455 15.3913 10.5417 14.3747 10.5417C13.358 10.5417 12.383 10.9455 11.6641 11.6644C10.9452 12.3833 10.5413 13.3583 10.5413 14.375Z"
                stroke="#E2003C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="max-[769px]:hidden flex items-center gap-6 text-[var(--other-offWhite)]">
            <Magnifying />
            <RegHeart />
          </div>
          <Button className="max-[769px]:hidden bg-[var(--Primary-Cheery-Red)] max-[1025px]:px-2.5">
            sign Up/ Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
