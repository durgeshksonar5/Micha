import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TopCategory = ({ title = "Top Categories", categories = [] }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  if (!categories || categories.length === 0) return null;

  return (
    <section className="py-12 bg-white relative group">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8 px-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-widest font-serif">
            {title}
          </h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Manual Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-2"
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group flex-none w-[140px] md:w-[200px] snap-start"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-sm transition-all duration-300 shadow-sm group-hover:shadow-md">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <p className="mt-4 text-center font-medium text-gray-800 group-hover:text-black uppercase text-[10px] md:text-xs tracking-widest transition-colors">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </section>
  );
};

export default TopCategory;
