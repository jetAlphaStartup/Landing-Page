"use client";
import React, { useEffect, useMemo, useState } from "react";
import ProjectGallerySlider from "./project-gallery-slider/ProjectGallerySlider";
import ProjectDescriptionSlider from "./ProjectDescriptionSlider";
import { Project } from "@/interfaces";

type Props = {
  project: Project;
  inversed?: boolean;
};

export type HandleStep = {
  next: () => void;
  prev: () => void;
  set: (step: number) => void;
};

const ProjectDetails = ({ project, inversed }: Props) => {
  const [step, setStep] = useState<number>(0);

  const handleStep = useMemo(() => {
    return {
      next: () => {
        setStep((prev) => (prev < project.steps.length - 1 ? prev + 1 : 0));
      },
      prev: () => {
        setStep((prev) => (prev > 0 ? prev - 1 : project.steps.length - 1));
      },
      set: (step: number) => setStep(step),
    };
  }, [project.steps.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleStep.next();
    }, 4000);

    return () => clearInterval(timer);
  }, [step, handleStep]);

  return (
    <div
      className={`flex flex-col lg:flex-row justify-center items-stretch gap-4 md:gap-8 lg:gap-10 ${inversed ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="w-full lg:max-w-100">
        <ProjectGallerySlider
          project={project}
          step={step}
          handleStep={handleStep}
        />
      </div>

      <div className="flex-1">
        <ProjectDescriptionSlider
          project={project}
          step={step}
          inversed={inversed}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
