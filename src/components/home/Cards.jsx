import React from "react";
import ProductCards from "./ProductCards";

// Using some existing images for demonstration
import lipsImg from "../../assets/images/lips.png";
import eyesImg from "../../assets/images/eyes.png";
import faceImg from "../../assets/images/face.png";
import skinImg from "../../assets/images/skin.png";

const Cards = () => {
  const trendingProducts = [
    {
      id: 101,
      title: "Matte Liquid Lipstick - Classic Red",
      brand: "Micha Beauty",
      price: "899",
      originalPrice: "1299",
      discount: "30",
      image: lipsImg,
      rating: 4.8,
      reviews: "1.2k",
    },
    {
      id: 102,
      title: "Volume Mascara - Midnight Black",
      brand: "Micha Eyes",
      price: "549",
      originalPrice: "799",
      discount: "25",
      image: eyesImg,
      rating: 4.5,
      reviews: "850",
    },
    {
      id: 103,
      title: "Full Coverage Foundation",
      brand: "Micha Face",
      price: "1299",
      originalPrice: "1599",
      discount: "18",
      image: faceImg,
      rating: 4.7,
      reviews: "2.1k",
    },
    {
      id: 104,
      title: "Vitamin C Radiance Serum",
      brand: "Micha Skin",
      price: "1050",
      originalPrice: "1350",
      discount: "22",
      image: skinImg,
      rating: 4.9,
      reviews: "3.4k",
    },
  ];

  return (
    <div className="bg-white">
      <ProductCards title="Trending Now" products={trendingProducts} />
    </div>
  );
};

export default Cards;
