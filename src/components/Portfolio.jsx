import React from "react";
import netflixClone from "../images/netflixdemo.png";
import restaurantDemo from "../images/restaurantsite.png";
import dataAnalytic from "../images/dataanalytic.png";
import dashboard from "../images/dashboarddemo.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: netflixClone,
    },
    {
      id: 2,
      src: restaurantDemo,
    },
    {
      id: 3,
      src: dashboard,
    },
    {
      id: 4,
      src: dataAnalytic,
    },
  ];
  return (
    <div name="portfolio" className="bg-black w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-col-2 md:grid-col-3 gap-8 px-12 sm:px-0 "></div>
        {portfolios.map(({ id, src }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
            <img
              className="rounded-md duration-200 w-40 h-36 hover:scale-105 "
              src={src}
              alt=""
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
