import Image from "next/image";
import React from "react";

const CtaBg: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center flex-col">
        <hr className="border-dashed border border-gray-500 w-0.5 h-40" />

        <div className="border-dashed border-t border-l border-r border-gray-500 w-full max-w-[320px] sm:max-w-[480px] md:max-w-[640px] h-100 rounded-t-xl rounded-l-xl rounded-r-xl rounded-b-none" />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[150%]">
        <div className="bg-black flex p-4 space-x-2 w-fit rounded-xl relative">
          {logos.map((logo) => (
            <Image
              key={logo}
              src={logo}
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-12 h-12 hover:scale-110 cursor-pointer transition-all duration-300"
              priority
            />
          ))}
          <Image
            src="/arrow.svg"
            alt="Up Arrow"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute w-3 h-3 rotate-90 left-1/2 -translate-x-1/2 bottom-full"
            priority
          />
          <Image
            src="/arrow.svg"
            alt="Left Arrow"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute w-3 h-3 left-0 top-1/2 -translate-y-1/2 -translate-x-full"
            priority
          />
          <Image
            src="/arrow.svg"
            alt="Right Arrow"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute w-3 h-3 rotate-180 left-full top-1/2 -translate-y-1/2"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default CtaBg;

const logos = [
  "/products (1).svg",
  "/products (2).svg",
  "/products (3).svg",
  "/products (4).svg",
  "/products (5).svg",
];
