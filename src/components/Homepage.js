import React from "react";
import Features from "./Features";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Play from "./Play";
import Review from "../components/Review"
const HomePage = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="aboutus">
        <Aboutus />
      </section>
     <section id="features">
        <Features />
      </section>
     <section id="Play">
        <Play />
      </section>
      <Review/>
    </div>
  );
};

export default HomePage;
