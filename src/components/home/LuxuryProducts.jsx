import React, { useRef } from "react";

const LuxuryProducts = ({ title = "Our Luxury Products", products = [] }) => {
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

  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <div
        className="rounded-2xl p-8 transition-all duration-300 relative"
        style={{ backgroundColor: "#735240" }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {title}
          </h2>

          {/* Scroll Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#735240] flex items-center justify-center transition-all duration-300 border border-white/20 active:scale-95 group"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#735240] flex items-center justify-center transition-all duration-300 border border-white/20 active:scale-95 group"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none w-64 snap-start group">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-white/10 mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                {/* Discount Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10 bg-white text-[#735240] text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-tight">
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-medium text-white truncate w-full">
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Fallback if no products */}
          {products.length === 0 && (
            <div className="w-full py-12 text-center text-white/50 border-2 border-dashed border-white/20 rounded-xl">
              No products found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LuxuryProducts;
