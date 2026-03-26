"use client";

import { containerVariants, letterVariants } from "@/lib/animations";
import { motion, AnimatePresence, Variants } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  const letters = "JETHINGS".split("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="initial-loader"
          key="loader"
          variants={containerVariants}
          initial={{ opacity: 1 }}
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#0d0c10]"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-64 w-64 rounded-full bg-blue-600 blur-[120px]"
          />

          <div className="relative flex overflow-hidden">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="text-6xl md:text-8xl font-black tracking-tighter text-white"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 h-[2px] w-48 overflow-hidden bg-white/10 rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
              className="h-full w-full bg-linear-to-r from-blue-500 via-purple-500 to-blue-500"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4 text-xs font-medium tracking-[0.3em] text-white/40 uppercase"
          >
            Digital Excellence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
