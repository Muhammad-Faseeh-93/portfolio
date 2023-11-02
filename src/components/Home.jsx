import React from "react";
import img1 from "../images/mypic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="h-screen w-full   ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:7xl font-bold text-white ">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I currently have front-end development experience. Using tools like
            React, Tailwind, and Bootstrap, I love coding on online web
            applications.
          </p>
          <div>
            <Link to='experience' smooth duration={500}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
                PortFolio
                <span group hover-rotate-90 duration-300>
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            className="rounded-2xl mx-auto w-3/5 md:w-48 md:ml-4 "
            src={img1}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
