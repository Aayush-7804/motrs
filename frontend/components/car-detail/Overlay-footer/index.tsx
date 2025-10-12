import React from "react";
import { Contact, Enquiry, Finance, Whatsapp } from "./overlaySvgs";

const items: { name: string; icon: React.ReactNode }[] = [
  { name: "WhatsApp", icon: <Whatsapp /> },
  { name: "Phone", icon: <Contact /> },
  { name: "Enquiry", icon: <Enquiry /> },
  { name: "Finance", icon: <Finance /> },
];
const OverlFooter = () => {
  return (
    <div className="min-[1025px]:hidden sticky z-50 bottom-0 w-full flex items-center bg-[var(--Other-White)] border-t border-[var(--Other-Grey)]">
      {items.map((item) => (
        <div key={item.name} className="w-full h-15 flex flex-col items-center justify-center gap-0.5 border-r border-[var(--Other-Grey)] last:border-0">
          <i>{item.icon}</i>
          <p className="text-{var(--Primary-Font)] text-xs leading-4.5">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default OverlFooter;
