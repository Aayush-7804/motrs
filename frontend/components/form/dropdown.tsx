import React, { useState } from "react";

const Dropdown: React.FC<{
  name: string;
  formName: string;
  initialState: boolean;
}> = ({ name, formName, initialState }) => {
  const [open, setOpen] = useState(initialState);

  const show = () => {
    setOpen((prevShow) => !prevShow);
  };
  return (
    <div>
      <label htmlFor={formName} className="text-xs font-normal">
        {name}
      </label>
      <div onClick={show} className="relative">
        <button
          type="button"
          name={formName}
          id={formName}
          className={`w-full text-sm bg-[var(--other-White)] text-[var(--Disabled-Font)] outline-0 flex items-center justify-between ${
            open
              ? "border border-[var(--Secondary-Teal)] px-3.25 py-2.5"
              : "px-3.5 py-2.75"
          }`}
        >
          <span>select</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={open ? "rotate-180" : ""}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#2AA295"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {open && (
          <div className="absolute top-full left-0 z-10 w-full h-31 overflow-y-auto bg-[var(--other-White)] text-[var(--Primary-Midnight-Blue)]">
            <ul className="p-2 space-y-2">
              <li className="hover:text-[var(--Secondary-Teal)] cursor-pointer">
                4 month
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
