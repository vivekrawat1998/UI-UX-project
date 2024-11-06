import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLock } from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";
import { Ri24HoursLine } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-black w-full h-auto flex flex-col justify-center items-center relative">
      <div className=" w-full h-screen inset-0 bg-gradient-to-r from-blue-300 via-white to-orange-800 rounded-lg bg-opacity-30 backdrop-blur-xl">
        <div className="text-center grid place-items-center  mt-32 ">
          <h1
            className="bg-gradient-to-r from-purple-800  font-bold grid place-items-center uppercase font-sans via-gray-800 to-blue-600 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl max-w-[90%] md:max-w-[800px]"
            data-aos="fade-up"
          >
            Download the Most Trusted Cricket Fantasy App in India Now!
          </h1>
          <p
            className="text-gray-800 text-lg md:text-xl pt-3"
            data-aos="fade-up"
          >
            Your ultimate destination for an exhilarating fantasy sports
            adventure!
          </p>
          <div className="flex justify-center  pt-10">
            <button
              onClick={() => window.location.assign("https://wa.link/ggnow")}
              className="bg-gradient-to-r from-blue-900 to-orange-600 rounded-md px-16 uppercase py-3 text-white font-semibold cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-lg animate-bounce z-50"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Container for the images */}
        <div className="relative w-full h-[90vh] -top-[10vh] md:-top-[20vh]">
          <img
            className="w-full h-full top-0 object-cover md:object-contain absolute z-30"
            src="/crickter players3.png"
            alt="Cricket Players"
          />
          <img
            className="w-full  object-contain top-52 md:top-60 h-[50vh]  md:h-[50vh] absolute z-20"
            src="/wicket.png"
            alt="Cricket Players"
          />
          <img
            src="/ground2.png"
            alt="Ground"
            className="absolute bottom-12 md:bottom-10 left-1/2 transform -translate-x-1/2 w-full h-[40vh] md:h-[30vh] z-10"
          />
        </div>
        <div className="bg-yellow-900 w-full p-6 md:p-10 h-auto absolute -bottom-40 md:-bottom-56 left-0 right-0">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 md:mt-10">
            <li className="flex items-center gap-2 md:gap-3 text-base sm:text-lg md:text-xl text-white">
              <FaLock className="text-white text-xl sm:text-2xl" />
              3M+ Registered Users
            </li>
            <li className="flex items-center gap-2 md:gap-3 text-base sm:text-lg md:text-xl text-white">
              <SiCoffeescript className="text-white text-xl sm:text-2xl" />
              No Platform Fees
            </li>
            <li className="flex items-center gap-2 md:gap-3 text-base sm:text-lg md:text-xl text-white">
              <Ri24HoursLine className="text-white text-xl sm:text-2xl" />
              24/7 Support
            </li>
            <li className="flex items-center gap-2 md:gap-3 text-base sm:text-lg md:text-xl text-white">
              <AiFillSafetyCertificate className="text-white text-xl sm:text-2xl" />
              100% Safe & Secure
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
