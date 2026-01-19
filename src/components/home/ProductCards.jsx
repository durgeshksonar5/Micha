import React from "react";
import { Star, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCards = ({ title, products = [] }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-widest font-serif">
            {title}
          </h2>
          <Link
            to="/shop"
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors underline underline-offset-4"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* Product Image */}
              <div className="relative aspect-3/4 overflow-hidden rounded-sm bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge (Sale/New) */}
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase">
                    -{product.discount}% Off
                  </span>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-2 right-2 p-1.5 bg-white/80 hover:bg-white rounded-full transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                  <Heart
                    size={18}
                    className="text-gray-600 hover:text-red-500"
                  />
                </button>

                {/* Quick Add Button */}
                <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <ShoppingBag size={14} />
                  Add to Cart
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-4 text-center">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-medium">
                  {product.brand}
                </p>
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors line-clamp-1 px-2">
                  <Link to={`/product/${product.id}`}>{product.title}</Link>
                </h3>

                {/* Rating */}
                <div className="flex items-center justify-center mt-2 gap-1 text-gray-400">
                  <div className="flex bg-gray-100 px-1.5 py-0.5 rounded-sm items-center gap-1">
                    <span className="text-[10px] font-bold text-gray-900">
                      {product.rating}
                    </span>
                    <Star size={10} className="fill-black text-black" />
                  </div>
                  <span className="text-[10px]">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="mt-2 flex items-center justify-center gap-3">
                  <span className="text-sm font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
