import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import lipsImg from "../assets/images/lips.png";
import hero1 from "../assets/images/hero-banner.jpeg";
import hero2 from "../assets/images/hero-banner-2.jpeg";

const Lips = () => {
  const slides = [
    { id: 1, image: lipsImg, alt: "Lips Collection" },
    { id: 2, image: hero1, alt: "Beauty Sale" },
    { id: 3, image: hero2, alt: "New Arrivals" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-1">
      <HeroBanner slides={slides} />
    </div>
  );
};

export default Lips;
