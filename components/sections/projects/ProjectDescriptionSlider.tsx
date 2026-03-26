import { motion, AnimatePresence } from "motion/react";
import { Project } from "@/interfaces";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  project: Project;
  step: number;
  inversed?: boolean;
};

const ProjectDescriptionSlider = ({ project, step, inversed }: Props) => {
  return (
    <div
      className="rounded-4xl h-64 sm:h-80 md:h-96 lg:h-full relative overflow-hidden"
      style={{ backgroundColor: project.color }}
    >
      <AnimatePresence>
        <motion.div
          key={step}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.32, 0.72, 0, 1],
          }}
          className={cn(
            "absolute inset-0 flex items-end justify-end top-8 sm:top-12 md:top-16",
            inversed
              ? "left-4 sm:left-8 md:left-16"
              : "right-4 sm:right-8 md:right-16",
          )}
        >
          <Image
            src={project.steps[step].image}
            alt={project.name}
            width={0}
            height={0}
            sizes="100vw"
            priority
            className={cn(
              "w-full h-full object-cover shadow-2xl",
              inversed ? "rounded-tl-4xl" : "rounded-tr-4xl",
            )}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectDescriptionSlider;
