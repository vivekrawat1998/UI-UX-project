import React from "react";
import Cards from "./Cards";

const Features = () => {
  return (
    <div
      className="relative w-full h-[155vh]  md:h-[130vh] bg-gradient-to-r from-green-400 via-white to-[yellow] flex justify-center items-center"
    >
      <img className="absolute bottom-0 md:-bottom-32 left-0 z-10" src="/rb_15769.png" alt=""/>
      <div className="absolute px-10 md:px-0 z-20 inset-0 flex justify-center items-start pt-24 bg-black bg-opacity-50">
        <div className="w-full max-w-screen-lg">
          <div className="grid place-items-center pb-10">
            <h1 className="text-4xl font-bold text-white mb-4 grid place-items-center">
              WHY IS CRICKET FAN THE MOST LOVED?
            </h1>
            <p className="text-white">Cricket enthusiasts prefer CRICKET FAN over other platforms for a variety of compelling reasons.</p>
          </div>
         <div className="w-full h-auto">
         <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
