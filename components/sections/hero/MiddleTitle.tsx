import React from "react";

type Props = {};

const MiddleTitle = (props: Props) => {
  return (
    <div className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white flex flex-col items-center justify-center">
      <p>Let your business</p>

      <div className="inline-block mt-4 px-2 py-0 rounded-lg text-black lowercase bg-[linear-gradient(to_right,#FEFF92,#B4FF6C)] leading-[1.1]">
        <span className="relative -top-1">jet away</span>
      </div>

      <div className="mt-4">
        with 
        <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#FEFF92,#B4FF6C)]">
          {" "}
          Jethings
        </span>
      </div>
    </div>
  );
};

export default MiddleTitle;
