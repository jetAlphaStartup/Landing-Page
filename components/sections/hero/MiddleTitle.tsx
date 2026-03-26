import React from "react";

type Props = {};

const MiddleTitle = (props: Props) => {
  return (
    <div className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white flex flex-col items-center justify-center">
      <p>The only SaaS</p>
      <p>tools you need to</p>

      <div className="inline-block mt-4 px-2 py-0 rounded-lg text-black lowercase bg-[linear-gradient(to_right,#FEFF92,#B4FF6C)] leading-[1.1]">
        <span className="relative -top-1">turn your business</span>
      </div>

      <div className="mt-4">
        into a
        <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#FEFF92,#B4FF6C)]">
          {" "}
          BIG NAME
        </span>
      </div>
    </div>
  );
};

export default MiddleTitle;
