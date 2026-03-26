"use client";
import React from "react";
import Slider from "@/components/Slider";
import { partnerBrands } from "@/lib/data";
import Image from "next/image";

type Props = {};

const Companies = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex space-x-4 md:space-x-8 flex-col md:flex-row">
        <div className="text-white space-y-1">
          <p className="text-lg sm:text-2xl md:text-3xl font-bold">+127,000</p>
          <p className="text-gray-500 whitespace-nowrap text-xs sm:text-sm md:text-base">
            ambitious businesses helped
          </p>
        </div>
        <div className="w-px h-full bg-gray-500 hidden md:block" />
      </div>
      <div className="flex-1 min-w-0">
        <Slider
          duration={20}
          pausable
          elements={partnerBrands.map((brand) => (
            <div key={brand}>
              <Image
                src={brand}
                alt={brand}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto block"
                priority
              />
            </div>
          ))}
        />
      </div>
    </div>
  );
};

export default Companies;

const El = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="opacity-70 hover:opacity-100 transition-opacity">
      {children}
    </div>
  );
};
