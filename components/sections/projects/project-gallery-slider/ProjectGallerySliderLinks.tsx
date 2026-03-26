import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, Link, Linkedin } from "lucide-react";
import { Project } from "@/interfaces";

type Props = {
  project: Project;
};

const ProjectGallerySliderLinks = ({ project }: Props) => {
  return (
    <div className="flex justify-between">
      <Button
        onClick={() => window.open(project.links.url, "_blank")}
        style={{ backgroundColor: project.color }}
        className="
          relative 
          h-14 px-8
          cursor-pointer 
          rounded-xl
          overflow-hidden 
          transition-all duration-200
          before:absolute 
          before:inset-0 
          before:bg-black/10 
          before:opacity-0 
          hover:before:opacity-100 
          before:transition-opacity"
      >
        <span className="relative z-10 flex items-center gap-2 text-lg">
          Sign-up for free <ArrowRightCircle className="w-8! h-8!" />
        </span>
      </Button>

      <div className="flex gap-4">
        <Button
          onClick={() => window.open(project.links.linkedIn, "_blank")}
          className="cursor-pointer h-14 w-14 rounded-xl"
          size="icon"
        >
          <Linkedin className="w-6! h-6!" />
        </Button>

        <Button
          onClick={() => window.open(project.links.url, "_blank")}
          className="cursor-pointer h-14 w-14 rounded-xl"
          size="icon"
        >
          <Link className="w-6! h-6!" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectGallerySliderLinks;
