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
        <div className="w-58.5 h-9 overflow-hidden">
        <Image src="/Logo.png" alt="logo" width={224} height={36} priority />
      </div>
      <nav>
        <ul className="flex">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="px-5.5 py-3.5 text-sm cursor-pointer hover:bg-[var(--Primary-Muted-Blue)] first:font-bold first:bg-[var(--Primary-Muted-Blue)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-9.75">
        <div className="flex items-center gap-6 text-[var(--other-offWhite)]">
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
