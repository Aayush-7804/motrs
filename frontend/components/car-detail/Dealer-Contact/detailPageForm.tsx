import React from "react";
import FormInput from "../../form/formInput";
import Button from "../../common/Button";
import DealerNumber from "./DealerNumber";
import { submitForm } from "@/helper/fetch";

const Inputs: { name: string; formName: string; type?: string }[] = [
  { name: "Name", formName: "name" },
  { name: "Last Name", formName: "last-name" },
  { name: "Email", formName: "email", type: "email" },
  { name: "Number", formName: "mobile-number", type: "number" },
  { name: "Message", formName: "message", type: "textarea" },
];

const DetailPageForm: React.FC<{ contact: string }> = ({ contact }) => {
  return (
    <form
      className="p-7.5 space-y-2.5 border-t border-b border-[#ffffff33]"
      action={submitForm}
    >
      <div className="mb-5 flex flex-col gap-5">
        <h4 className="text-xl font-medium">Enquire about this car</h4>
        <DealerNumber contact={contact} />
        <Button type="button" className="bg-[#45CF78]">
          WhatsApp the Dealer
        </Button>
      </div>
      {Inputs.map((input, index) => (
        <FormInput
          key={index}
          name={input.name}
          formName={input.formName}
          type={input.type}
        />
      ))}
      <div className="text-sm flex items-center gap-3.25">
        <FormInput
          type="checkbox"
          className="relative flex flex-row-reverse items-center gap-3.25"
          formName="teams-condition"
          name="I agree to receive general emails and product offers."
        />
      </div>
      <p className="text-xs leading-4.5">
        Read how we protect and process your personal information{" "}
        <span className="underline">here.</span>
      </p>
      <div className="flex flex-col gap-2.5">
        <Button className="bg-[var(--Primary-Cherry-Red)]">Submit</Button>
        <Button type="button" className="bg-[var(--Other-White)] text-black">
          Apply for finance
        </Button>
      </div>
    </form>
  );
};

export default DetailPageForm;
