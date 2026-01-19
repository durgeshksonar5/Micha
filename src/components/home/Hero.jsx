import HeroBanner from "./HeroBanner";
import hero1 from "../../assets/images/hero-banner.jpeg";
import hero2 from "../../assets/images/hero-banner-2.jpeg";
import hero3 from "../../assets/images/hero-3.jpeg";
import hero4 from "../../assets/images/hero-4.jpeg";

const Hero = () => {
  const slides = [
    { id: 1, image: hero1, alt: "Hero 1" },
    { id: 2, image: hero2, alt: "Hero 2" },
    { id: 3, image: hero3, alt: "Hero 3" },
    { id: 4, image: hero4, alt: "Hero 4" },
  ];

  return <HeroBanner slides={slides} />;
};

export default Hero;
