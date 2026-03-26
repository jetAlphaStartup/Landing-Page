import React from "react";

type SliderProps = {
  elements: React.ReactNode[];
  duration?: number;
  inverse?: boolean;
  pausable?: boolean;
  gap?: number;
};

const Slider = ({
  elements,
  duration = 40,
  inverse = false,
  pausable = false,
  gap = 4,
}: SliderProps) => {
  return (
    <>
      <div className={`slider-container ${pausable ? "pausable" : ""}`}>
        <div
          className={`slider-track ${inverse ? "inverse" : ""}`}
          style={{ animationDuration: `${duration}s` }}
        >
          {[...elements, ...elements, ...elements].map((element, i) => (
            <div className="slide" key={i}>
              {element}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider-container {
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          position: relative;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        .slider-container.pausable:hover .slider-track {
          animation-play-state: paused;
        }

        .slider-track {
          display: flex;
          width: max-content;
          animation: scroll linear infinite;
        }

        .slider-track.inverse {
          animation-name: scroll-inverse;
        }

        .slide {
          flex-shrink: 0;
          padding: 0 ${gap}rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 150px;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-inverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Slider;
