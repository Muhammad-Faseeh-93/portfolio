import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen justify-between bg-black  text-white pt-40 md:pt-0  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About me
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a frontend web developer who excels at: <br /> Crafting clean and
          efficient frontend Development, achieving a 92% react code efficiency
          rate in my latest project. Mastering JavaScript, reducing page load
          times by 20% through optimized code. Proficiently using React to
          streamline development, ensuring responsive design and improve code
          maintainability.
        </p>
        <br />
        <p className="text-xl">
          I'm also skilled in Git for version control and collaboration,
          maintaining a 99% code repository hygiene rating.In addition to my
          core skills, I'm well-versed in frontend frameworks like Bootstrap for
          rapid and responsive web development, and I'm also proficient in
          utilizing Tailwind CSS to create highly customizable and efficient
          user interfaces. These tools have allowed me to deliver exceptional
          web experiences efficiently and effectively.I thrive in fast-paced
          environments, solving complex challenges, and creating web experiences
          that impress.
        </p>
      </div>
    </div>
  );
};

export default About;
