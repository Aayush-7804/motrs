"use client";
import React, { useState } from "react";
import FormInput from "../form/formInput";
import Button from "../common/Button";
import Dropdown from "../form/dropdown";

const INITIAL = false;

const FinanceCalculator = () => {
  const [showCalcu, setShowCalcu] = useState(INITIAL);

  const show = () => {
    setShowCalcu((pervShow) => !pervShow);
  };
  return (
    <div className="px-10 py-15 text-[var(--other-White)] bg-[var(--Primary-Midnight-Blue)]">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-bold capitalize">finance calculator</h2>
        <svg
          onClick={show}
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          className={showCalcu ? "rotate-180" : ""}
        >
          <path
            d="M13.5 20.25L27 33.75L40.5 20.25"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showCalcu && (
        <div>
          <p className="w-[454px] h-17.25 mt-3.75 mb-4.25">
            Calculate your estimated monthly repayment as well as total interest
            based on the vehicle retail price.
          </p>
          <div className="flex gap-18">
            <form className="space-y-10">
              <div className="grid grid-cols-2 gap-x-9.5 gap-y-4">
                <FormInput formName="purchase-price" name="Purchase Price" />
                <Dropdown formName="repayment-period" name="Repayment period" initialState={INITIAL} />
                <FormInput formName="deposit" name="Deposit/Trade in Value" />
                <FormInput formName="residual" name="Residual/Balloon Value" />
                <FormInput
                  formName="anticipated-interest-rate"
                  name="Anticipated Interest Rate"
                />
              </div>
              <div className="flex gap-5.75">
                <Button
                  disable
                  className="bg-[var(--Primary-Cheery-Red)] disabled:opacity-30"
                >
                  Calculate
                </Button>
                <Button type="button" className="flex items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_13279_887)">
                      <path
                        d="M19.1667 3.33334V8.33334H14.1667"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.075 12.5C16.5333 14.0333 15.508 15.3489 14.1535 16.2488C12.799 17.1486 11.1887 17.5838 9.56535 17.4888C7.94199 17.3939 6.39346 16.7738 5.15313 15.7222C3.9128 14.6706 3.04785 13.2443 2.68864 11.6584C2.32942 10.0724 2.4954 8.41266 3.16155 6.92923C3.82771 5.44579 4.95795 4.21905 6.38196 3.43387C7.80598 2.64868 9.44661 2.34759 11.0566 2.57595C12.6667 2.80432 14.1588 3.54978 15.3083 4.7L19.1667 8.33333"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13279_887">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Clear Inputs</span>
                </Button>
              </div>
            </form>
            <div className="space-y-9">
              <div className="grid grid-cols-2 gap-x-11.75 gap-y-8.25">
                <div className="space-y-2.75">
                  <h4 className="font-medium ">Loan Amount</h4>
                  <p className="text-3xl font-bold text-[var(--Secondary-Teal)] ">
                    R422 202
                  </p>
                </div>
                <div className="space-y-2.75">
                  <h4 className="font-medium ">Monthly Interest Rate</h4>
                  <p className="text-3xl font-bold text-[var(--Secondary-Teal)] ">
                    R422 202
                  </p>
                </div>
                <div className="space-y-2.75">
                  <h4 className="font-medium ">
                    Estimated Monthly Installments
                  </h4>
                  <p className="text-3xl font-bold text-[var(--Secondary-Teal)] ">
                    R422 202
                  </p>
                </div>
                <div className="space-y-2.75">
                  <h4 className="font-medium ">Total Repayment Amount</h4>
                  <p className="text-3xl font-bold text-[var(--Secondary-Teal)] ">
                    R422 202
                  </p>
                </div>
                <div className="space-y-2.75">
                  <h4 className="font-medium ">Total Interest</h4>
                  <p className="text-3xl font-bold text-[var(--Secondary-Teal)] ">
                    R422 202
                  </p>
                </div>
                <div className="space-y-2.75">
                  <h4 className="font-medium ">Total Cost</h4>
                  <p className="text-3xl font-bold text-[var(--Secondary-Teal)] ">
                    R422 202
                  </p>
                </div>
              </div>
              <Button className="bg-[var(--Primary-Cheery-Red)]">
                Apply for finance
              </Button>
              <p className="text-xs w-[559px] leading-4.5 opacity-70 text-justify">
                <span className="inline-block w-full">Disclaimer</span> While we
                strive to provide the best tools and information, Motus Select,
                its agents, employees, and accredited financiers accept no
                responsibility for any losses or errors that may occur. All
                calculations made with this tool are guidelines based on the
                information you provided and do not consider monthly expenses or
                other factors involved in purchasing a vehicle. The amounts
                displayed should not be solely relied upon for your purchase
                decisions. By default, this calculator uses the prime interest
                rate plus 2%, a 10% deposit, and a 72-month loan term to
                estimate monthly repayments.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinanceCalculator;
