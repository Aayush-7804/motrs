import React from "react";

const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  type?: string;
  disable?: boolean;
}> = ({ children, className, type, disable }) => {
  if (type === "button") {
    return (
      <button
        type="button"
        className={`px-6.25 py-4 text-sm font-semibold ${className}`}
        disabled={disable}
      >
        {children}
      </button>
    );
  }
  return (
    <button disabled={disable} className={`px-6.25 py-4 text-sm font-semibold ${className}`}>
      {children}
    </button>
  );
};

export default Button;
