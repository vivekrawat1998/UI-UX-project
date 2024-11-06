import React from "react";

const Play = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-5 md:p-10 lg:p-20 w-full h-screeen mt-0">
      <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
        <div className="w-full h-full mt-20 text-gray-800 rounded-xl  p-5 md:p-8 lg:p-10 ">
          <div className="px-5 md:px-10 space-y-5 md:space-y-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-purple-600 font-bold text-left">
              how To Play
            </h1>
            <ul className="">
              <li>
                <span className="text-gray-800 font-semibold text-lg">STEP 1: SELECT A MATCH</span>
                <br/>
                Choose your favourite upcoming match.
              </li>
              <br/>
              <li>
                <span className="text-gray-800 font-semibold text-lg">STEP 2: CREATE YOUR TEAM</span>
                <br/>
                Make your fantasy team with your sport knowledge.
              </li>
              <br/>
              <li>
                <span className="text-gray-800 font-semibold text-lg">STEP 3: CHOOSE CAPTAIN & VC</span>
                <br/>
                After creating your fantasy team, choose a captain & vice captain.
              </li>
              <br/>
              <li>
                <span className="text-gray-800 font-semibold text-lg">
                STEP 4: JOIN THE CONTEST</span>
                <br/>
                CricketFan offers paid and practice contests where you can win real money.
              </li>
            </ul>
          </div>
     
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 pt-0">
        <div className="w-full h-[40vh]  md:h-[80vh]  rounded-xl  grid place-items-center overflow-hidden">
          <img
            src="/bat.png"
            className="w-full h-full object-contain rounded-xl"
            alt="Cricket Players"
          />
        </div>
      </div>
    </div>
  );
};

export default Play;
