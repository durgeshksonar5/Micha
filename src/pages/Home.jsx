import React from "react";
import Countsection from "../components/common/Countsection";
import Hero from "../components/home/Hero";
import Category from "../components/home/Category";
import Cards from "../components/home/Cards";
import SplitSection from "../components/home/SplitSection";
import LuxuryProducts from "../components/home/LuxuryProducts";
import FeatureBanner from "../components/home/FeatureBanner";

// Import images
import product1 from "../assets/images/laxury-1.jpg";
import product2 from "../assets/images/laxury-2.jpg";
import product3 from "../assets/images/laxury-3.jpg";
import product4 from "../assets/images/laxury-4.jpg";
import product5 from "../assets/images/laxury-5.jpg";
import product6 from "../assets/images/laxury-6.jpg";

const Home = () => {
  const luxuryProducts = [
    {
      id: 1,
      name: "Velvet Matte Lipstick",
      image: product1,
      badge: "Flat 15% OFF",
    },
    {
      id: 2,
      name: "Crystal Shine Gloss",
      image: product2,
      badge: "Flat 10% OFF",
    },
    {
      id: 3,
      name: "Luxury Face Serum",
      image: product3,
      badge: "Flat 12% OFF",
    },
    {
      id: 4,
      name: "Golden Glow Highlighter",
      image: product4,
      badge: "Flat 20% OFF",
    },
    {
      id: 5,
      name: "Nourishing Night Cream",
      image: product5,
      badge: "Flat 20% OFF",
    },
    {
      id: 6,
      name: "Elegance Eye Palette",
      image: product6,
      badge: "Flat 13% OFF",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mt-1">
        <div className="flex items-center justify-center flex-wrap bg-red-600 h-[30px] rounded-sm">
          <p className="mr-2 text-white">Sale going live in</p>
          <Countsection className="text-white" />
        </div>
      </div>

      {/* hero banner */}
      <div className="max-w-7xl mx-auto px-4 mt-1">
        <Hero />
      </div>

      {/* top categories */}
      <Category />

      {/* trending products */}
      <Cards />

      {/* split section grid */}
      <SplitSection />

      {/* Luxury Products Section */}
      <LuxuryProducts title="Our Luxury Products" products={luxuryProducts} />

      {/* Features Banner */}
      <FeatureBanner />
    </>
  );
};

export default Home;
