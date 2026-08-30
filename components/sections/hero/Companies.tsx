"use client";
import React from "react";
import Slider from "@/components/Slider";
import { partnerBrands } from "@/lib/data";
import Image from "next/image";

type Props = {};

const Companies = (props: Props) => {
  return (
    <div className="flex-1 min-w-0 -mt-45">
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
                className={`w-full h-auto block ${
                  brand === "/brands/optilens_logo.svg" ||
                  brand === "/brands/halfware_logo.svg" ||
                  brand === "/brands/novalis_ai_logo.svg"
                    ? "max-h-35"
                    : ""
                }`}
                priority
              />
            </div>
          ))}
        />
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
