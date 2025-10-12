import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import { HEADERBar, HEADERMagnifying, HEADERSearchBar, RegHeart } from "../svg";

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
    <header className="sticky top-0 bg-[var(--Primary-Midnight-Blue)] text-[var(--Other-White)] z-100">
      <div className="max-w-360 h-25 px-10 py-5 max-[769px]:p-0 max-[769px]:h-20 mx-auto flex justify-between items-center max-[769px]:justify-around">
        <div className="min-[769px]:hidden">
          <HEADERBar />
        </div>
        <div className="w-58.5 h-9.5 overflow-hidden">
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
        <div className="flex items-center gap-9.75 max-[1025px]:gap-2.5">
          <div className="min-[769px]:hidden">
            <HEADERSearchBar />
          </div>
          <div className="max-[769px]:hidden flex items-center gap-6 text-[var(--Other-offWhite)]">
            <HEADERMagnifying />
            <RegHeart color="#F5F7F2" />
          </div>
          <Button className="max-[769px]:hidden bg-[var(--Primary-Cherry-Red)] max-[1025px]:px-2.5">
            sign Up/ Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
