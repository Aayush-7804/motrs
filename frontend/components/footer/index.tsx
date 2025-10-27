import Image from "next/image";
import React from "react";

const footerparts: string[] = [
  "Used Cars for Sale",
  "Demo Cars For Sale",
  "Shop used and demon cars by province",
  "Shop used and demon cars by body type",
];

const Footer = () => {
  return (
    <div className="bg-[var(--Primary-Midnight-Blue)] text-[var(--Other-White)] max-[1441px]:px-10 max-[376px]:px-5">
      <div className="max-w-360 mx-auto py-10.5 flex flex-col gap-6.5">
        <div className="flex max-[769px]:flex-col gap-8">
          <ul className="w-full text-lg font-semibold flex flex-col gap-4">
            {footerparts.map((item, index) => (
              <li key={index} className="flex items-center justify-between h-9">
                <p className="w-full">{item}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            ))}
          </ul>
          <div className="w-1/3 space-y-3  max-[769px]:w-full">
            <h3 className="text-lg font-semibold capitalize">our company</h3>
            <ul className="grid grid-cols-2 gap-y-2 capitalize">
              <li>about us</li>
              <li>contact us</li>
              <li>careers</li>
              <li>assurance</li>
              <li>car comparison</li>
              <li>price indicator</li>
              <li>news & reviews</li>
              <li>sitemap</li>
            </ul>
          </div>
        </div>
        <div className="flex max-[376px]:flex-col gap-9.25 max-[376px]:items-start justify-between items-center">
          <div className="flex flex-col gap-4">
            <div className="flex gap-5.5 max-[769px]:gap-3 text-xs max-[769px]:flex-col">
              <p>Copyright © 2024 Motus Select. All rights reserved.</p>
              <p>Legal Documents</p>
            </div>
            <div className="flex items-center gap-3.75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <g clipPath="url(#clip0_11859_9934)">
                  <path
                    d="M26 13.0003C26 20.1803 20.1797 26.0007 12.9997 26.0007C5.82031 26 0 20.1797 0 13.0003C0 5.82031 5.82031 0 13.0003 0C20.1803 0 26.0007 5.82031 26.0007 13.0003H26Z"
                    fill="white"
                  />
                  <path
                    d="M16.8517 11.9914L16.6351 13.7306C16.5985 14.0212 16.3525 14.2397 16.0606 14.2397H13.2437V21.5113C12.9467 21.5382 12.6457 21.5519 12.3414 21.5519C11.6609 21.5519 10.9967 21.4839 10.3548 21.3543V14.2397H8.18834C7.98942 14.2397 7.82715 14.0768 7.82715 13.8772V11.7009C7.82715 11.5013 7.98942 11.3384 8.18834 11.3384H10.3548V8.07457C10.3548 6.07165 11.9717 4.44824 13.9668 4.44824H16.4945C16.6934 4.44824 16.8557 4.61117 16.8557 4.81074V6.98706C16.8557 7.18663 16.6934 7.34956 16.4945 7.34956H14.6885C13.8909 7.34956 13.2444 7.99866 13.2444 8.80022V11.339H16.2779C16.626 11.339 16.8949 11.6453 16.8524 11.9921L16.8517 11.9914Z"
                    fill="#02253A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11859_9934">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <g clipPath="url(#clip0_11859_9937)">
                  <path
                    d="M26 13.0003C26 20.1803 20.1797 26.0007 12.9997 26.0007C5.82031 26 0 20.1797 0 13.0003C0 5.82031 5.82031 0 13.0003 0C20.1803 0 26.0007 5.82031 26.0007 13.0003H26Z"
                    fill="white"
                  />
                  <path
                    d="M15.5765 16.3499V9.9086C15.5765 9.9086 16.3028 11.1191 18.928 11.1931C19.068 11.197 19.1838 11.0818 19.1838 10.9418V9.12144C19.1838 8.98599 19.0758 8.87868 18.9404 8.87083C16.9041 8.75567 15.937 7.19377 15.8421 5.76143C15.8336 5.6286 15.7171 5.52783 15.5843 5.52783H13.5081C13.37 5.52783 13.2575 5.63972 13.2575 5.77844V16.0181C13.2575 17.1305 12.4075 18.0983 11.2965 18.1506C10.0264 18.2108 8.99386 17.1207 9.1509 15.8323C9.26214 14.9221 9.99237 14.1768 10.9006 14.0505C11.0812 14.0257 11.2572 14.0237 11.428 14.0427C11.5791 14.0597 11.712 13.9472 11.712 13.7954V11.9704C11.712 11.8409 11.6132 11.7283 11.4836 11.7205C11.2232 11.7034 10.9562 11.7093 10.6853 11.7401C8.68239 11.9671 7.06619 13.5879 6.84437 15.5915C6.55188 18.2344 8.61303 20.4715 11.197 20.4715C13.6161 20.4715 15.5771 18.5105 15.5771 16.0914"
                    fill="#02253A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11859_9937">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <g clipPath="url(#clip0_11859_9940)">
                  <path
                    d="M26 13.0003C26 20.1803 20.1797 26.0007 12.9997 26.0007C5.82031 26 0 20.1797 0 13.0003C0 5.82031 5.82031 0 13.0003 0C20.1803 0 26.0007 5.82031 26.0007 13.0003H26Z"
                    fill="white"
                  />
                  <path
                    d="M18.6028 7.49146H7.39795C6.29081 7.49146 5.39307 8.3892 5.39307 9.49568V16.5036C5.39307 17.6107 6.29081 18.5078 7.39795 18.5078H18.6028C19.7093 18.5078 20.607 17.6107 20.607 16.5036V9.49568C20.607 8.3892 19.7093 7.49146 18.6028 7.49146ZM14.7998 13.4839L11.6838 15.0412C11.324 15.2211 10.9013 14.96 10.9013 14.5583V11.4436C10.9013 11.0419 11.3246 10.7808 11.6838 10.9601L14.7998 12.5174C15.1976 12.7163 15.1976 13.2849 14.7998 13.4839Z"
                    fill="#02253A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11859_9940">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="w-58.5 h-9 overflow-hidden">
            <Image
              src="/Logo.png"
              alt="logo"
              width={224}
              height={36}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
