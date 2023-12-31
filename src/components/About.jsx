import React from "react";

const About = () => {
  return (
    <div name="about"  className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm M.Faseeh, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              Making top-notch websites that enhance the lives of those around
              me is something I am passionate about. For clients ranging from
              individuals and small enterprises to huge corporations, I
              specialize in developing websites. If a frontend developer was at
              your disposal, how would you respond?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
