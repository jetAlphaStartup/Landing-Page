"use client";
import heroPathAnimation from "@/assets/hero-path.json";
import Lottie from "lottie-react";

type Props = {};

const AnimatedPath = (props: Props) => {
  return <Lottie animationData={heroPathAnimation} loop={true} />;
};

export default AnimatedPath;
