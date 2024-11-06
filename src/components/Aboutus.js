import React from "react";

const Aboutus = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-5 md:p-10 lg:p-20 bg-gray-200 w-full h-screeen mt-40">
      <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
        <div className="w-full h-full mt-32 text-gray-800 rounded-xl border-2 p-5 md:p-8 lg:p-10 ">
          <div className="px-5 md:px-10 space-y-5 md:space-y-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-green-900 font-bold text-left">
              Play Fantasy Cricket
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-start text-gray-600 tracking-wide">
              Welcome to PitchMasters  Fantasy App, a secure online platform for
              fantasy sports that provides users with a variety of exciting and
              rewarding games. Explore a broad range of interactive gaming
              options. Cricket Fan Fantasy is one of the app's top games,
              offering attractive deals with a minimal platform fee. It ensures
              an exceptional gaming experience. Join our community, immerse
              yourself in real fantasy gameplay, and start earning daily cash
              rewards!
            </p>
          </div>
          <div className=" flex justify-start pl-10 items-start mt-10">
            <a href="https://wa.link/ggnow">
              <button className="bg-gradient-to-r from-[#89CC11] to-[#FFFF02]  px-10 py-3 md:px-20 md:py-5 rounded-full text-white font-semibold cursor-pointer transition duration-300 transform myapp/public/cricketbackground.pnghover:scale-105 hover:shadow-lg animate-bounce">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 pt-10">
        <div className="w-full h-[40vh]  md:h-[80vh]  rounded-xl border-2 grid place-items-center overflow-hidden">
          <img
            src="/cricketbackground.png"
            className="w-full h-full object-contain rounded-xl"
            alt="Cricket Players"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
