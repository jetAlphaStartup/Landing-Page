import { StickyNote } from "lucide-react";
import React from "react";
import ProjectGallerySlider from "./project-gallery-slider/ProjectGallerySlider";
import ProjectDescriptionSlider from "./ProjectDescriptionSlider";
import ProjectDetails from "./ProjectDetails";
import { Project } from "@/interfaces";
import { fakerEN as faker } from "@faker-js/faker";
import Image from "next/image";
import BackgroundEffect from "@/components/BackgroundEffect";

type ProjectsProps = {};


const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="pt-24 md:pt-36 lg:pt-65 space-y-24 md:space-y-36 lg:space-y-48">
      {projects.map((project, index) => (
        <div className="relative overflow-x-clip">
          <div className="space-y-4 md:space-y-8 z-10" key={project.id}>
            <div className="max-w-4xl mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
              {project.title} with{" "}
              <span className="mx-4 mt-4 py-1 px-1.5 bg-white text-black rounded-lg inline-block lowercase leading-[1.1] shadow-lg cursor-default">
                <span className="flex items-center font-medium">
                  <div
                    style={{
                      backgroundColor: project.color,
                    }}
                    className="mr-2 rounded-md flex items-center justify-center w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12"
                  >
                    <StickyNote className="text-white w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />{" "}
                  </div>
                  <span
                    style={{
                      color: project.color,
                    }}
                    className="text-lg sm:text-2xl md:text-3xl"
                  >
                    {project.name}
                  </span>
                </span>
              </span>
            </div>
            <div className="max-w-6xl mx-auto px-8">
              <ProjectDetails
                key={project.id}
                project={project}
                inversed={index % 2 === 1}
              />
            </div>
          </div>
          {project.background}
        </div>
      ))}
    </div>
  );
};

export default Projects;

const colors = ["#4E77DF", "#FFB866", "#FE4D4D", "#38A1D6", "#55778D"];

const backgrounds = [
  () => (
    <>
      <Image
        src="/dashed-rectangle.svg"
        alt="dashed-rectangle"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto absolute -z-100 scale-150 left-0 -translate-x-full top-1/2 -translate-y-1/4"
        priority
      />
      <Image
        src="/square-top-left.svg"
        alt="square-top-left"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto absolute -z-100 left-full -translate-y-1/6 scale-150"
        priority
      />
      <BackgroundEffect
        type="radial"
        top={"50%"}
        left={"100%"}
        translateY="-50%"
        translateX="-50%"
        background="#4E77DF"
        width={600}
        height={600}
        className="-z-100"
      />
    </>
  ),
  () => (
    <>
      <BackgroundEffect
        type="radial"
        top={"50%"}
        left={0}
        translateY="-50%"
        translateX="-50%"
        background="#FFB866"
        width={600}
        height={600}
        className="-z-100"
      />
    </>
  ),
  () => (
    <>
      <BackgroundEffect
        type="radial"
        top={"50%"}
        left={"100%"}
        translateY="-50%"
        translateX="-50%"
        background="#FE4D4D"
        width={600}
        height={600}
        className="-z-100"
      />
      <Image
        src="/square-top-right.svg"
        alt="square-top-right"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto absolute -z-100 right-full top-0 scale-150"
        priority
      />
    </>
  ),
  () => (
    <>
      <BackgroundEffect
        type="radial"
        top={"50%"}
        left={0}
        translateY="-50%"
        translateX="-50%"
        background="#38A1D6"
        width={600}
        height={600}
        className="-z-100"
      />
      <Image
        src="/square-bottom-left.svg"
        alt="square-bottom-left"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto absolute -z-100 left-full translate-y-1/10 top-0 scale-150"
        priority
      />
    </>
  ),
  () => (
    <>
      <BackgroundEffect
        type="radial"
        top={"50%"}
        left={"100%"}
        translateY="-50%"
        translateX="-50%"
        background="#55778D"
        width={600}
        height={600}
        className="-z-100"
      />
      <Image
        src="/square-top-right.svg"
        alt="square-top-right"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto absolute -z-100 right-full top-0 scale-150"
        priority
      />
    </>
  ),
];

const projects: Project[] = Array.from({ length: 5 }).map((_, index) => ({
  id: index.toString(),
  background: backgrounds[index] ? backgrounds[index]() : null,
  color: colors[index],
  title: faker.lorem.sentence({
    min: 5,
    max: 10,
  }),
  links: {
    url: faker.internet.url(),
    linkedIn: faker.internet.url(),
  },
  name: faker.company.name(),
  users: Array.from({ length: faker.number.int({ min: 3, max: 5 }) }).map(
    () => ({
      profilePicture: faker.image.avatar(),
      name: faker.person.middleName(),
    }),
  ),
  usersCount: faker.number.int({ min: 3, max: 75 }),
  steps: Array.from({ length: 3 }).map(() => ({
    subtitle: faker.lorem.sentence({
      min: 2,
      max: 3,
    }),
    description: faker.lorem.sentence({
      min: 5,
      max: 20,
    }),
    image: faker.image.url(),
    testimonial: {
      profilePicture: faker.image.avatar(),
      text: faker.lorem.sentence({
        min: 5,
        max: 20,
      }),
      rate: faker.number.int({ min: 0, max: 5 }),
      name: faker.person.middleName(),
    },
  })),
}));
