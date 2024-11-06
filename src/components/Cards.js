import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cardItems = [
    {
      id: 1,
      title: "Affordable Leagues",
      description:
        "Join global leagues starting from just Rs 1, with a wide range of exciting contests.",
    },
    {
      id: 2,
      title: "Real-Time Fantasy Gaming",
      description:
        "Play fantasy cricket during live matches, with opportunities to compete in five overs at a time.",
    },
    {
      id: 3,
      title: "Quick Cash Withdrawals",
      description:
        "Once your account is verified, you can instantly withdraw your earnings without delay.",
    },
    {
      id: 4,
      title: "Exclusive Offers & Discounts",
      description:
        "Enjoy amazing deals and use them to enhance your contest experience.",
    },
    {
      id: 5,
      title: "Batting Challenge",
      description:
        "Pick your top five batsmen and aim to rack up the highest score among them.",
    },
    {
      id: 6,
      title: "Bowling Challenge",
      description:
        "Select five bowlers and predict who will take the most wickets in the match.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 h-auto w-full">
      {cardItems.map((item) => (
        <a
          key={item.id}
          href="https://wa.link/ggnow"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          className="rounded-lg w-full md:max-w-[300px] h-[15vh] md:h-[20vh] p-4 md:p-6 backdrop-blur-3xl border border-gray-400 text-white bg-white/10 transition-transform transform hover:scale-105 cursor-pointer duration-300"
          style={{ transformOrigin: "center center" }}
        >
          <h2 className="text-lg font-bold mb-3">{item.title}</h2>
          <p className="text-md text-gray-100">{item.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Cards;
