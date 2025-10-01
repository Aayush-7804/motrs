import React from "react";

const FormInput: React.FC<{
  name: string;
  formName: string;
  type?: string;
}> = ({ name, formName, type }) => {
  if (type === "textarea") {
    return (
      <div>
        <label htmlFor={formName} className="text-xs font-normal">
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
    <div>
      <label htmlFor={formName} className="text-xs font-normal">
        {name}
      </label>
      <input
        id={formName}
        name={formName}
        type={type || "text"}
        className="w-full px-3.75 py-3.25 text-sm bg-[var(--other-White)] text-black outline-0"
      />
    </div>
  );
};

export default FormInput;
