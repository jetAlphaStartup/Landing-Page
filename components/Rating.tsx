import { motion } from "motion/react";
import { Star } from "lucide-react";

const MotionStar = motion(Star);

type Props = {
  color: string;
  rating: number;
  id: string;
};
const Rating = ({ color, rating, id }: Props) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => {
        const isFilled = rating >= index + 1;

        return (
          <MotionStar
            key={`${id}-${index}`}
            className="w-4 h-4"
            style={{ color }}
            initial={false}
            animate={{
              fill: isFilled ? color : "rgba(0,0,0,0)",
              scale: isFilled ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
            }}
          />
        );
      })}
    </div>
  );
};

export default Rating;
