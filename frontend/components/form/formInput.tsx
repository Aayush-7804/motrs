import React from "react";

const FormInput: React.FC<{
  name: string;
  formName: string;
  type?: string;
  children?: React.ReactNode;
  className?: string;
}> = ({ name, formName, type, className, children }) => {
  if (type === "textarea") {
    return (
      <div className={className}>
        <label htmlFor={formName} className="text-xs leading-4.5 font-normal">
          {name}
        </label>
        <textarea
          id={formName}
          name={formName}
          rows={3}
          className="w-full px-3.75 py-3.25 text-sm bg-[var(--Other-White)] text-black outline-0"
        ></textarea>
      </div>
    );
  }

  return (
    <div className={className}>
      {type === "checkbox" || type === "radio" ? (
        <>
          <p className="text-sm leading-5.5">{name}</p>
        </>
      ) : (
        <label htmlFor={formName} className="text-xs leading-4.5 font-normal">
          {name}
        </label>
      )}
      <input
        id={formName}
        name={formName}
        type={type || "text"}
        className={`${
          type === "checkbox" || type === "radio"
            ? "peer appearance-none w-6 h-6 border border-[var(--Other-Grey)] rounded-[5px] checked:bg-[var(--Secondary-Teal)] checked:border-[var(--Secondary-Teal)] relative"
            : "w-full px-3.75 py-3.25"
        } text-sm bg-[var(--Other-White)] text-black outline-0`}
      />
      {type === "checkbox" && (
        <span className="absolute left-1 top-1/2 -translate-y-1/2 pointer-events-none text-white text-sm opacity-0 peer-checked:opacity-100">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20 6L9 17l-5-5"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

export default FormInput;
