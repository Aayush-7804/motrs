import React from 'react'
import FormInput from './formInput'
import Button from '../common/Button';

const Inputs: { name: string; formName: string; type?: string }[] = [
  { name: "Name", formName: "name" },
  { name: "Last Name", formName: "last-name" },
  { name: "Email", formName: "email", type: "email" },
  { name: "Number", formName: "mobile-number" },
  { name: "Message", formName: "message", type: "textarea" },
];

const DetailPageForm = () => {
  return (
    <form className="p-7.5 space-y-2.5 border-t border-b border-[#ffffff33]">
              <div className="mb-5 flex flex-col gap-5">
                <h4 className="text-xl font-medium">Enquire about this car</h4>
                <div className="px-3.75 leading-5.5 py-3.25 text-xs bg-[var(--other-White)] flex items-center justify-between">
                  <p></p>
                  <p className="font-bold text-[var(--Primary-Muted-Blue)] ">
                    Show Contect Number
                  </p>
                </div>
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
                <input type="checkbox"></input>
                <span>
                  I agree to receive general emails and product offers.
                </span>
              </div>
              <p className="text-xs leading-4.5">
                Read how we protect and process your personal information{" "}
                <span className="underline">here.</span>
              </p>
              <div className="flex flex-col gap-2.5">
                <Button className="bg-[var(--Primary-Cheery-Red)]">
                  Submit
                </Button>
                <Button
                  type="button"
                  className="bg-[var(--other-White)] text-black"
                >
                  Apply for finance
                </Button>
              </div>
            </form>
  )
}

export default DetailPageForm