import React from "react";
import Navigation from "@/components/car-detail/navigation";
import ImageGrid from "@/components/car-detail/imageGrid";
import DetailsHeader from "@/components/car-detail/detailsHeader";
import FormInput from "@/components/form/formInput";
import Button from "@/components/common/Button";
import { Call, Clock, DownArrow, Location } from "@/components/svg";

const Inputs: { name: string; formName: string; type?: string }[] = [
  { name: "Name", formName: "name" },
  { name: "Last Name", formName: "last-name" },
  { name: "Email", formName: "email", type: "email" },
  { name: "Number", formName: "mobile-number" },
  { name: "Message", formName: "message", type: "textarea" },
];

const page = () => {
  return (
    <main>
      <Navigation />
      <DetailsHeader />
      <ImageGrid />
      <div className="grid grid-cols-3 gap-10 px-9.75">
        <div className="col-span-2">car details</div>
        <div className="bg-[var(--Primary-Midnight-Blue)] text-[var(--other-White)]">
          <h3 className="text-xl font-medium px-7.5 py-6.25">
            Motus Nissan, Renault, Kia, Hyundai and Select Menlyn
          </h3>
          <form className="p-7.5 space-y-2.5 border-t border-b border-[#ffffff33]">
            <div className="mb-5 flex flex-col gap-5">
              <h4 className="text-xl font-medium">Enquire about this car</h4>
              <div className="px-3.75 py-3.25 text-xs bg-[var(--other-White)] flex items-center justify-between">
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
              <span>I agree to receive general emails and product offers.</span>
            </div>
            <p className="text-xs">
              Read how we protect and process your personal information{" "}
              <span className="underline">here.</span>
            </p>
            <div className="flex flex-col gap-2.5">
              <Button className="bg-[var(--Primary-Cheery-Red)]">Submit</Button>
              <Button
                type="button"
                className="bg-[var(--other-White)] text-black"
              >
                Apply for finance
              </Button>
            </div>
          </form>
          <div className="px-7.5 py-6.25 flex flex-col gap-3">
            <h4 className="text-xl font-medium">Dealership Details</h4>
            <div className="flex gap-2.5">
              <Call />
              <span>021 5516 5435</span>
            </div>
            <div className="flex gap-2.5">
              <Location />
              <p>
                Cnr Blaauberg &, Koeberg Rd, Table View, Cape Town, 7441
                <p className="font-bold underline text-[var(--Secondary-Teal)] ">Directions</p>
              </p>
            </div>
            <div className="flex gap-2.5">
              <Clock />
              <span>Open</span>
              <span>Close 5pm</span>
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
      <div>finance calculator</div>
    </main>
  );
};

export default page;
