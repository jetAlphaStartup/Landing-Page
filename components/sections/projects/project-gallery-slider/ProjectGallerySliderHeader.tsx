import React from "react";
import { Project } from "@/interfaces";
import { HandleStep } from "../ProjectDetails";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { fadeVariants } from "@/lib/animations";

type Props = { project: Project; step: number; handleStep: HandleStep };

const ProjectGallerySliderHeader = ({ project, step, handleStep }: Props) => {
  const steps = [0, 1, 2];

  return (
    <div className="bg-[#16151E] p-4 sm:p-6 md:p-8 space-y-3">
      <div className="flex items-center flex-wrap gap-2">
        {steps.map((s, idx) => (
          <React.Fragment key={idx}>
            <motion.span
              transition={{ duration: 0.5 }}
              initial={{
                backgroundColor: step === s ? project.color : "#6a7282",
              }}
              animate={{
                backgroundColor: step === s ? project.color : "#6a7282",
              }}
              exit={{
                backgroundColor: step === s ? project.color : "#6a7282",
              }}
              onClick={() => handleStep.set(s)}
              className={cn(
                "w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-xl flex items-center justify-center text-lg sm:text-2xl cursor-pointer",
                step === s ? "text-white" : "text-gray-300",
              )}
            >
              {s + 1}
            </motion.span>
            {idx < steps.length - 1 && (
              <hr className="border-dashed border border-gray-500 flex-1 hidden sm:block" />
            )}
          </React.Fragment>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={`${project.id}-${step}-subtitle`}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="font-bold text-base sm:text-lg md:text-xl"
        >
          {project.steps[step].subtitle}
        </motion.p>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.p
          key={`${project.id}-${step}-description`}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-gray-300 text-sm sm:text-base min-h-15 sm:min-h-25 md:h-25"
        >
          {project.steps[step].description}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallerySliderHeader;
