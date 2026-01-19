import React from "react";
import TopCategory from "./TopCategory";

// Import local images
import lipsImg from "../../assets/images/lips.png";
import eyesImg from "../../assets/images/eyes.png";
import faceImg from "../../assets/images/face.png";
import nailsImg from "../../assets/images/nails.png";
import skinImg from "../../assets/images/skin.png";
import offersImg from "../../assets/images/offers.png";
import giftingImg from "../../assets/images/gifting.png";
import newArrivalsImg from "../../assets/images/new-arrival.png";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "Lips",
      path: "/lips",
      image: lipsImg,
    },
    {
      id: 2,
      name: "Eyes",
      path: "/eyes",
      image: eyesImg,
    },
    {
      id: 3,
      name: "Face",
      path: "/face",
      image: faceImg,
    },
    {
      id: 4,
      name: "Nails",
      path: "/nails",
      image: nailsImg,
    },
    {
      id: 5,
      name: "Skin",
      path: "/skin",
      image: skinImg,
    },
    {
      id: 6,
      name: "Offers",
      path: "/offers",
      image: offersImg,
    },
    {
      id: 7,
      name: "Gifting",
      path: "/gifting",
      image: giftingImg,
    },
    {
      id: 8,
      name: "New Arrivals",
      path: "/offers",
      image: newArrivalsImg,
    },
  ];

  return <TopCategory title="Top Categories" categories={categories} />;
};

export default Category;
