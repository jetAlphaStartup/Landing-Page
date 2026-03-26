import ProjectGallerySliderHeader from "./ProjectGallerySliderHeader";
import ProjectGallerySliderFooter from "./ProjectGallerySliderFooter";
import ProjectGallerySliderBody from "./ProjectGallerySliderBody";
import ProjectGallerySliderLinks from "./ProjectGallerySliderLinks";
import { Project } from "@/interfaces";
import { HandleStep } from "../ProjectDetails";

type Props = {
  project: Project;
  step: number;
  handleStep: HandleStep;
};

const ProjectGallerySlider = ({ project, step, handleStep }: Props) => {
  return (
    <div className="space-y-8">
      <div className="text-white rounded-4xl overflow-hidden">
        <ProjectGallerySliderHeader
          project={project}
          step={step}
          handleStep={handleStep}
        />
        <ProjectGallerySliderBody project={project} step={step} />
        <ProjectGallerySliderFooter
          project={project}
          step={step}
          handleStep={handleStep}
        />
      </div>

      <ProjectGallerySliderLinks project={project} />
    </div>
  );
};

export default ProjectGallerySlider;
