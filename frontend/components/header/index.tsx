
import Image from "next/image";
import React from "react";
import { FaMagnifyingGlass, FaRegHeart } from "react-icons/fa6";

const navItems: (string | { text: string; clicked: boolean })[] = [
  { text: "Buy Cars", clicked: true },
  "Sell Your Car",
  "Specials",
  "Finance",
  "Find a Dealer",
  "Book a Service",
  "Fleet",
];

const NavItem: React.FC<{
  item: string | { text: string; clicked: boolean };
}> = ({ item }) => {
  if (typeof item === "object") {
    return (
      <li
        className={`px-5.5 py-3.5 text-sm cursor-pointer hover:bg-[var(--Primary-Muted-Blue)] ${
          item.clicked && "font-bold bg-[var(--Primary-Muted-Blue)]"
        }`}
      >
        {item.text}
      </li>
    );
  }
  return (
    <li className="px-5.5 py-3.5 text-sm cursor-pointer hover:bg-[var(--Primary-Muted-Blue)]">
      {item}
    </li>
  );
};

const Header = () => {
  return (
    <header className="bg-[var(--Primary-Midnight-Blue)] text-[var(--other-White)] h-25 px-10 py-4.75 flex justify-between items-center">
      <div className="w-58.5 h-9 overflow-hidden">
        <Image src="/Logo.png" alt="logo" width={224} height={36} priority />
      </div>
      <nav>
        <ul className="flex">
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-9.75">
        <div className="flex items-center gap-6 text-[var(--other-offWhite)]">
          <FaMagnifyingGlass className="w-5 h-6" />
          <FaRegHeart className="w-5 h-6" />
        </div>
        <button className="px-6.25 py-4 bg-[var(--Primary-Cheery-Red)] font-semibold text-sm">
          sign Up/ Login
        </button>
      </div>
    </header>
  );
};

export default Header;
