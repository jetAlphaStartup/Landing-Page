"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ApplyButton() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="cursor-pointer group relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold text-[#2B2E3D] overflow-hidden"
    >
      <motion.div
        variants={{
          rest: {
            background: "linear-gradient(90deg, #B5F37A 0%, #E6F58A 100%)",
          },
          hover: {
            background: "linear-gradient(90deg, #E6F58A 0%, #B5F37A 100%)",
          },
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 -z-10"
      />

      <span className="text-sm sm:text-base md:text-lg lg:text-xl">
        Apply to Jetthings
      </span>

      <motion.div
        variants={{
          rest: { x: 0 },
          hover: { x: 6 },
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white/40 backdrop-blur-sm p-1.5 sm:p-2 rounded-full"
      >
        <ChevronRight size={16} className="sm:w-4.5 sm:h-4.5" />
      </motion.div>
    </motion.button>
  );
}
