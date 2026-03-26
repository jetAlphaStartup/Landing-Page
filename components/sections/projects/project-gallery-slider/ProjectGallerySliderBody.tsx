import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Counter } from "@/components/ui/animated-counter";

import { Mail, Star } from "lucide-react";
import { Project } from "@/interfaces";
import { AnimatePresence, motion } from "motion/react";
import { fadeVariants } from "@/lib/animations";
import Rating from "@/components/Rating";
type Props = {
  project: Project;
  step: number;
};

const ProjectGallerySliderBody = ({ project, step }: Props) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#1E1D22] space-y-3">
      <div className="flex justify-between flex-col sm:flex-row gap-4">
        <div className="flex flex-col items-center sm:items-start justify-center">
          <div className="flex items-center text-2xl sm:text-3xl font-bold text-white">
            +
            <Counter
              end={project.usersCount}
              duration={1}
              className="text-2xl sm:text-3xl font-bold text-white"
            />
            K
          </div>
          <p className="text-xs sm:text-sm font-bold">users</p>
        </div>
        <AvatarGroup>
          {project.users.map((user, index) => (
            <Avatar
              key={index}
              className="rounded-sm border-none border-0 w-8 sm:w-8 md:w-10 h-8 sm:h-8 md:h-10"
            >
              <AvatarImage src={user.profilePicture} alt={user.name} />
              <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      </div>
      <div className="bg-[#2B2E3D] p-3 sm:p-4 flex flex-col sm:flex-row gap-4 rounded-2xl">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.5,
              }}
            >
              <Avatar
                size="lg"
                className="rounded-sm border-none border-0 w-10 h-10 sm:w-12 sm:h-12 overflow-visible"
              >
                <AvatarImage
                  src={project.steps[step].testimonial.profilePicture}
                  alt={project.steps[step].testimonial.name}
                  className="rounded-sm"
                />
                <AvatarFallback className="rounded-sm">
                  {project.steps[step].testimonial.name
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="absolute -right-1 -bottom-1"
                >
                  <AvatarBadge
                    style={{
                      color: "white",
                      backgroundColor: project.color,
                    }}
                  >
                    <Mail size={12} />
                  </AvatarBadge>
                </motion.div>
              </Avatar>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="space-y-2 flex-1">
          <div className="flex justify-between flex-col sm:flex-row gap-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={`${project.id}-${step}-testimonial-name`}
                className="font-bold text-sm sm:text-base"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {project.steps[step].testimonial.name}
              </motion.p>
            </AnimatePresence>
            <Rating
              id={`${project.id}-${step}-testimonial-rating`}
              color={project.color}
              rating={project.steps[step].testimonial.rate}
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={`${project.id}-${step}-testimonial`}
              className="text-gray-300 text-xs sm:text-sm min-h-20 sm:min-h-25 md:h-30"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {project.steps[step].testimonial.text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallerySliderBody;
