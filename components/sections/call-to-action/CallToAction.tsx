"use client";

import Image from "next/image";
import React from "react";
import CtaBg from "./CtaBg";
import ApplyButton from "./ApplyButton";
import Container from "@/components/Container";
import { CursorGroup } from "@/components/CursorGroup";
import {
  SpringOptions,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "motion/react";

const CallToAction: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springOptions: SpringOptions = { damping: 20, stiffness: 100 };
  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  const moveImgX = useTransform(springX, (val) => val / 25);
  const moveImgY = useTransform(springY, (val) => val / 25);

  const rotateImg = useTransform(springX, (val) => val / 100);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  return (
    <Container
      type="internal"
      className="bg-[#2B2E3D] relative overflow-hidden"
    >
      <CtaBg />
      <motion.div
        style={{ x: moveImgX, y: moveImgY, rotate: rotateImg }}
        className="absolute top-1/3 left-1/3 hidden md:block"
      >
        <CursorGroup
          badgeSrc="/you-badge.svg"
          cursorSrc="/blue-cursor.svg"
          cursorClassName="top-full -translate-y-1/2 right-0 -rotate-90"
        />{" "}
      </motion.div>

      <div
        onMouseMove={handleMouseMove}
        className="absolute top-0 left-0 w-full h-full space-y-4 sm:space-y-6 pt-16 sm:pt-24 md:pt-36 flex flex-col items-center justify-center px-4"
      >
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center leading-tight">
          Join the adventure
        </p>
        <p className="text-[#95959d] text-sm sm:text-base md:text-lg lg:text-2xl max-w-160 text-center mx-auto">
          Become part of the jethings journey and work alongside passionate
          people who love to get things done.
        </p>
        <div className="z-100">
          <ApplyButton />
        </div>
      </div>
      <Image
        src="/footer-curve.png"
        alt="footer-curve"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto block absolute left-0 bottom-0"
        priority
      />
    </Container>
  );
};

export default CallToAction;
