"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Container from "../Container";

interface StoryCard {
  id: number;
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  overlay?: {
    circles?: Array<{
      x: number;
      y: number;
      size: number;
      color: string;
    }>;
    text?: string;
  };
}

const stories: StoryCard[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
    title: "Acquiring a multi-million dollar SaaS business",
    description:
      "15 years after finishing middle school, I received this Tweet 🔑 The 15 minutes coffee turned into a 3 hours meeting where we discussed all the opportunitie...",
    author: "Guillaume Moubeche",
    date: "Jan 16, 2023",
    overlay: {
      circles: [
        { x: 75, y: 50, size: 60, color: "rgba(255, 0, 100, 0.5)" },
        { x: 180, y: 100, size: 80, color: "rgba(0, 150, 255, 0.4)" },
      ],
      text: "Tibo",
    },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
    title: "$0 to $10,000,000 in ARR bootstrapped - how to achieve the ...",
    description:
      "In January 2018 my two technical co-founders and I decided to start our company with $1,000. At that time, everyone was telling us that reaching ...",
    author: "Guillaume Moubeche",
    date: "Sep 26, 2021",
    overlay: {
      text: "$1000000",
    },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=350&fit=crop",
    title:
      "$6m ARR in 3 years bootstrapped - 6 things we shouldn't have done that...",
    description:
      "In the last 3 years, we went from $0 to $6,000,000 ARR with $0 in external funding and only $1000 in our bank account. During our journey, we receive...",
    author: "Guillaume Moubeche",
    date: "Apr 12, 2021",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
    title: "Building the future of SaaS",
    description:
      "A journey through innovation and entrepreneurship. Learn how we scaled from zero to millions...",
    author: "Guillaume Moubeche",
    date: "Jan 10, 2023",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
    title: "Building the future of SaaS",
    description:
      "A journey through innovation and entrepreneurship. Learn how we scaled from zero to millions...",
    author: "Guillaume Moubeche",
    date: "Jan 10, 2023",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
    title: "Building the future of SaaS",
    description:
      "A journey through innovation and entrepreneurship. Learn how we scaled from zero to millions...",
    author: "Guillaume Moubeche",
    date: "Jan 10, 2023",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
    title: "Building the future of SaaS",
    description:
      "A journey through innovation and entrepreneurship. Learn how we scaled from zero to millions...",
    author: "Guillaume Moubeche",
    date: "Jan 10, 2023",
  },
];

const Story = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cardsPerView based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalStories = stories.length;
  // We can go up to totalStories - cardsPerView if we don't want empty space at the end
  const maxIndex = Math.max(0, totalStories - cardsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlay(false);
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setIsAutoPlay(false);
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, maxIndex]);

  return (
    <Container
      type="internal"
      className="bg-[#121116] py-8 sm:py-12 md:py-16 mt-12 md:mt-24"
    >
      <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Discover the jethings story
      </h2>

      <div className="relative overflow-hidden">
        {/* Slider Track */}
        <motion.div
          animate={{
            x: `calc(-${currentIndex * (100 / cardsPerView)}% - ${currentIndex * (24 / cardsPerView)}px)`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex gap-4 sm:gap-6"
        >
          {stories.map((story) => (
            <div
              key={story.id}
              style={{
                minWidth: `calc((100% - ${(cardsPerView - 1) * 24}px) / ${cardsPerView})`,
              }}
              className="group overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay circles and text */}
                {story.overlay && (
                  <div className="absolute inset-0">
                    {story.overlay.circles?.map((circle, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          left: `${circle.x}px`,
                          top: `${circle.y}px`,
                          width: `${circle.size}px`,
                          height: `${circle.size}px`,
                          backgroundColor: circle.color,
                        }}
                      />
                    ))}
                    {story.overlay.text && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-yellow-400 opacity-50">
                          {story.overlay.text}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                  {story.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {story.description}
                </p>

                {/* Author Info */}
                <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="h-8 w-8 rounded-full bg-linear-to-br from-amber-400 to-orange-600" />
                  <span className="text-sm text-slate-600">
                    {story.author} | {story.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Controls */}
        <div className="mt-12 flex items-center justify-between">
          {/* Pagination Dots */}
          <div className="flex gap-2">
            {Array.from({ length: stories.length - cardsPerView + 1 }).map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlay(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-white"
                      : "w-2 bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ),
            )}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-all duration-200 hover:border-white hover:text-white hover:bg-gray-900"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-all duration-200 hover:border-white hover:text-white hover:bg-gray-900"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Story;
