import React from "react";
import AnimatedPath from "./AnimatedPath";
import MiddleTitle from "./MiddleTitle";
import Image from "next/image";
import Container from "@/components/Container";
import Companies from "./Companies";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <Container
        type="internal"
        className="bg-[#121116] pt-16 sm:pt-24 md:pt-32"
      >
        <div className="relative flex justify-center min-h-100 sm:min-h-125 md:min-h-150 lg:h-100">
          <div className="absolute inset-0">
            <AnimatedPath />
          </div>
          <div className="relative z-10 mt-6">
            <MiddleTitle />
          </div>
        </div>
        <Companies />
      </Container>

      <Image
        src="/hero-curve.png"
        alt="hero-curve"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto block"
        priority
      />
    </div>
  );
};

export default Hero;
