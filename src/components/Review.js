import React from "react";
import { useState } from "react";

const Review = () => {
  // Array of reviews
  const [review, setreview] = useState([
    {
      id: 1,
      text: "This platform has completely elevated my fantasy cricket journey. The seamless gameplay and fairness are top-notch!",
      name: "Ananya Sharma",
      ratingImage: "/—Pngtree—gaming 5 star rating vector_15723976.png",
    },
    {
      id: 2,
      text: "I’m hooked! The app is so intuitive and the experience is smooth and enjoyable. Highly recommend!",
      name: "Vikram Singh",
      ratingImage: "/—Pngtree—gaming 5 star rating vector_15723976.png",
    },
    {
      id: 3,
      text: "A must-have app for fantasy cricket fans. The user interface is sleek, and it's packed with great features!",
      name: "Priya Desai",
      ratingImage: "/—Pngtree—gaming 5 star rating vector_15723976.png",
    },
    {
      id: 4,
      text: "Amazing app! The contests are exciting, and the rewards are really motivating. It's a fantastic experience overall.",
      name: "Ravi Kumar",
      ratingImage: "/—Pngtree—gaming 5 star rating vector_15723976.png",
    },
  ]);

  return (
    <div className="h-auto p-10 bg-gradient-to-br mb-32 from-teal-500 to-indigo-600">
      <h1 className="text-4xl uppercase grid place-items-center font-bold text-white mb-6">
        What Our Users Say
      </h1>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {review.map((review) => (
          <a
            key={review.id}
            href="https://wa.link/ggnow"
            className="relative backdrop-blur bg-white/30 p-6 md:p-10 text-white bg-opacity-50 rounded-lg"
          >
            <img
              className="absolute -top-3 left-7 w-20 h-12 md:w-20 md:h-16"
              src={review.ratingImage}
              alt="Review Stars"
            />
            <p className="text-md md:text-lg mb-2">{review.text}</p>
            <h1 className="text-lg font-semibold">{review.name}</h1>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Review;
