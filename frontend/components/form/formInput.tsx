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
          className="w-full px-3.75 py-3.25 text-sm bg-[var(--other-White)] text-black outline-0"
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
            ? "checked:bg-[var(--Secondary-Teal)] appearance-none w-6 h-6 outline-0 border border-[var(--other-Grey)] rounded-[5px]"
            : "w-full px-3.75 py-3.25"
        }  text-sm bg-[var(--other-White)] text-black outline-0`}
      />
    </div>
  );
};

export default FormInput;
