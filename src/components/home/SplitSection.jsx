import React from "react";
import SplitSectionCards from "./SplitSectionCards";

// Import local images
import lipsImg from "../../assets/images/1.png";
import eyesImg from "../../assets/images/2.png";
import skinImg from "../../assets/images/4.png";
import nailsImg from "../../assets/images/3.png";
import heroBanner from "../../assets/images/model-face.jpg";
const SplitSection = () => {
  const leftFeatured = {
    title: "The Edit",
    subtitle: "New season arrivals and beauty essentials curated just for you.",
    image: heroBanner,
    path: "/offers",
    buttonText: "Explore The Edit",
  };

  const rightGridItems = [
    {
      id: 1,
      title: "Lip Care",
      image: lipsImg,
      path: "/lips",
    },
    {
      id: 2,
      title: "Eye Magic",
      image: eyesImg,
      path: "/eyes",
    },
    {
      id: 3,
      title: "Skin Zen",
      image: skinImg,
      path: "/skin",
    },
    {
      id: 4,
      title: "Nail Art",
      image: nailsImg,
      path: "/nails",
    },
  ];

  return (
    <SplitSectionCards leftItem={leftFeatured} rightItems={rightGridItems} />
  );
};

export default SplitSection;
