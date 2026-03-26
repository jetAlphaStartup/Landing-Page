import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/interfaces";
import { HandleStep } from "../ProjectDetails";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  step: number;
  handleStep: HandleStep;
};

const ProjectGallerySliderFooter = ({ project, step, handleStep }: Props) => {
  return (
    <div className="p-3 sm:p-4 bg-[#16151E] flex justify-between items-center flex-wrap gap-4">
      <div className="flex gap-2">
        <div
          onClick={() => handleStep.set(0)}
          className={cn(
            "h-2 w-2 rounded-full cursor-pointer",
            step === 0 ? "bg-white" : "bg-gray-500",
          )}
        />
        <div
          onClick={() => handleStep.set(1)}
          className={cn(
            "h-2 w-2 rounded-full cursor-pointer",
            step === 1 ? "bg-white" : "bg-gray-500",
          )}
        />
        <div
          onClick={() => handleStep.set(2)}
          className={cn(
            "h-2 w-2 rounded-full cursor-pointer",
            step === 2 ? "bg-white" : "bg-gray-500",
          )}
        />
      </div>
      <div className="flex gap-2 sm:gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="border border-white rounded-full bg-transparent cursor-pointer w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12"
          onClick={() => handleStep.prev()}
        >
          <ArrowLeft className="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="border border-white rounded-full bg-transparent cursor-pointer w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12"
          onClick={() => handleStep.next()}
        >
          <ArrowRight className="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectGallerySliderFooter;
