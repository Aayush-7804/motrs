import React from "react";

const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  type?: string;
  disable?: boolean;
  onClick?: () => void;
}> = ({ children, className, type, disable, onClick }) => {
  if (type === "button") {
    return (
      <button
        type="button"
        disabled={disable}
        onClick={onClick}
        className={`max-[1025px]:text-xs leading-4.5 px-6.25 py-4 text-sm font-semibold ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`max-[1025px]:text-xs leading-4.5 px-6.25 py-4 text-sm font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
