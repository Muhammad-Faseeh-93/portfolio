import React from "react";
import Background from "../images/Background.mp4";
const Screen = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={Background} autoPlay loop muted ></video>
    </div>
  );
};

export default Screen;
