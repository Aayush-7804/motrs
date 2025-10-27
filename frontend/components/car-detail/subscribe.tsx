import React from "react";
import FormInput from "../form/formInput";
import Button from "../common/Button";

const Subscribe = () => {
  return (
    <div className="bg-[var(--Primary-Muted-Blue)] text-[var(--Other-White)] py-14 px-10 max-[376px]:flex-col gap-6 flex items-center justify-between">
      <div className="flex flex-col gap-2.75">
        <h2 className="text-[34px] leading-10.5 font-medium">Don&lsquo;t miss out on Great Deals</h2>
        <p className="leading-6">Sign up to our weekly Newsletter</p>
      </div>
      <form className="flex max-[769px]:flex-col max-[769px]:items-start max-[376px]:items-stretch items-end gap-4.5">
        <FormInput formName="user-email" name="Your Email" />
        <Button className="bg-[var(--Primary-Cherry-Red)]">Subscribe</Button>
      </form>
    </div>
  );
};

export default Subscribe;
