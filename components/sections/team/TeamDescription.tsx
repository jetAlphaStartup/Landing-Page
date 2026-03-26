"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  SpringOptions,
} from "motion/react";
import { Crown } from "lucide-react";
import { CursorGroup } from "@/components/CursorGroup";

type Props = {};

const TeamDescription = (props: Props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springOptions: SpringOptions = { damping: 20, stiffness: 100 };
  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  const moveTextX = useTransform(springX, (val) => val / 40);
  const moveTextY = useTransform(springY, (val) => val / 40);

  const moveImg1X = useTransform(springX, (val) => val / 25);
  const moveImg1Y = useTransform(springY, (val) => val / 25);

  const moveImg2X = useTransform(springX, (val) => val / -30);
  const moveImg2Y = useTransform(springY, (val) => val / -30);

  const moveImg3X = useTransform(springX, (val) => val / 20);
  const moveImg3Y = useTransform(springY, (val) => val / 20);

  const moveImg4X = useTransform(springX, (val) => val / -25);
  const moveImg4Y = useTransform(springY, (val) => val / -25);

  const rotateText = useTransform(springX, (val) => val / 200);
  const rotateImg1 = useTransform(springX, (val) => val / 100);
  const rotateImg2 = useTransform(springX, (val) => val / -100);
  const rotateImg3 = useTransform(springX, (val) => val / 100);
  const rotateImg4 = useTransform(springX, (val) => val / -100);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  return (
    <div
      className="relative w-full flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(90deg,#2b2e3d00,#2b2e3d 22.49% 76.76%,#2b2e3d00)",
        }}
        className="inset-0 w-full p-4 sm:p-6 min-h-[50vh] relative font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white flex flex-col items-center justify-center text-center"
      >
        <div>
          Discover{" "}
          <motion.span
            style={{ x: moveTextX, y: moveTextY, rotate: rotateText }}
            className="mx-4 mt-4 py-1 px-1.5 bg-white text-black rounded-lg inline-block lowercase leading-[1.1] shadow-lg cursor-default"
          >
            <span className="flex relative top-0.5">
              <div className="mr-2 bg-black rounded-md flex items-center justify-center w-12 h-12">
                <Crown className="text-white" />{" "}
              </div>
              jethings
            </span>
          </motion.span>{" "}
          a suite of SaaS
        </div>
        <div className="mt-4">
          products made by{" "}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#FEFF92,#B4FF6C)]">
            90 passionate
          </span>
        </div>

        <div className="mt-4">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#FEFF92,#B4FF6C)]">
            people{" "}
          </span>
          for .......... sales team
        </div>
      </div>

      <motion.div
        style={{ x: moveImg1X, y: moveImg1Y, rotate: rotateImg1 }}
        className="absolute top-[15%] left-[10%] w-12 sm:w-16 md:w-26 opacity-90 hidden sm:block"
      >
        <CursorGroup
          badgeSrc="/devs-badge.svg"
          cursorSrc="/red-cursor.svg"
          cursorClassName="top-full -translate-y-1/2 right-0"
        />{" "}
      </motion.div>

      <motion.div
        style={{ x: moveImg2X, y: moveImg2Y, rotate: rotateImg2 }}
        className="absolute top-[20%] right-[10%] w-12 sm:w-16 md:w-26 opacity-90 hidden sm:block"
      >
        <CursorGroup
          badgeSrc="/product-badge.svg"
          cursorSrc="/blue-cursor.svg"
          cursorClassName="top-full -translate-y-1/2 left-0 -translate-x-1/2"
        />
      </motion.div>

      <motion.div
        style={{ x: moveImg3X, y: moveImg3Y, rotate: rotateImg3 }}
        className="absolute bottom-[20%] left-[15%] w-16 sm:w-20 md:w-30 opacity-90 hidden sm:block"
      >
        <CursorGroup
          badgeSrc="/designers-badge.svg"
          cursorSrc="/yellow-cursor.svg"
          cursorClassName="top-0 -translate-y-full right-0"
        />
      </motion.div>

      <motion.div
        style={{ x: moveImg4X, y: moveImg4Y, rotate: rotateImg4 }}
        className="absolute bottom-[15%] right-[15%] w-16 sm:w-20 md:w-30 opacity-90 hidden sm:block"
      >
        <CursorGroup
          badgeSrc="/marketers-badge.svg"
          cursorSrc="/cyan-cursor.svg"
          cursorClassName="top-0 -translate-y-1/2 left-0 -translate-x-full"
        />
      </motion.div>
    </div>
  );
};

export default TeamDescription;
