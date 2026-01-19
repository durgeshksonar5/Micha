import { Link } from "react-router-dom";

const SplitSectionCards = ({ leftItem, rightItems = [] }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Large Section */}
          <div className="lg:w-1/2 relative overflow-hidden group rounded-sm shadow-sm aspect-4/5 lg:aspect-auto">
            <img
              src={leftItem.image}
              alt={leftItem.title}
              loading="lazy"
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-2 font-serif">
                {leftItem.title}
              </h3>
              <p className="text-sm mb-6 max-w-xs font-light">
                {leftItem.subtitle}
              </p>
              <Link
                to={leftItem.path}
                className="inline-block bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
              >
                {leftItem.buttonText || "Discover More"}
              </Link>
            </div>
          </div>

          {/* Right 2x2 Grid Section */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {rightItems.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="relative overflow-hidden group rounded-sm shadow-sm aspect-square"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors flex items-center justify-center p-4">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-lg font-bold uppercase tracking-widest font-serif">
                      {item.title}
                    </h4>
                    <p className="text-[10px] uppercase tracking-wider mt-1">
                      Shop Now
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSectionCards;
