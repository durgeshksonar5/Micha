import { useState, useEffect } from "react";
import logo from "../../assets/images/micha-logo.png";
import { Search, ShoppingBag, User, Menu, X, ChevronRight } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Lips", path: "/lips" },
    { name: "Eyes", path: "/eyes" },
    { name: "Face", path: "/face" },
    { name: "Nails", path: "/nails" },
    { name: "Skin", path: "/skin" },
    { name: "Gifting", path: "/gifting" },
    { name: "Offers", path: "/offers" },
  ];

  return (
    <>
      {/* Top Utility Bar (Desktop Only) */}
      <div className="hidden md:flex justify-end gap-6 px-6 py-2 text-[10px] font-medium tracking-wider text-gray-500 border-b bg-gray-50/50 uppercase">
        <a href="#" className="hover:text-black transition-colors">
          Track Order
        </a>
        <span className="text-gray-300">|</span>
        <a href="#" className="hover:text-black transition-colors">
          Help Centre
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo Container */}
            <div className="shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Micha Logo"
                  className="h-14 md:h-18 w-auto object-contain transition-transform hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-gray-700 font-sans font-medium uppercase text-[11px] tracking-[0.15em]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`hover:text-black transition-all relative group ${location.pathname === link.path ? "text-black" : ""}`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full ${location.pathname === link.path ? "w-full" : ""}`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Icons & Actions */}
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
              {/* Desktop Search */}
              <form
                onSubmit={handleSearch}
                className="hidden md:block relative"
              >
                <input
                  type="text"
                  placeholder="Search beauty products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[180px] xl:w-[240px] rounded-full bg-gray-100 border-transparent px-4 py-2 pr-10 text-sm transition-all focus:bg-white focus:border-black/20 focus:outline-none focus:ring-4 focus:ring-black/5"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  <Search size={16} />
                </button>
              </form>

              {/* Utility Icons */}
              <div className="flex items-center md:gap-4">
                <Link
                  to="/account"
                  className="hidden md:flex p-2 text-gray-700 hover:text-black transition-colors"
                >
                  <User size={22} strokeWidth={1.5} />
                </Link>
                <Link
                  to="/cart"
                  className="relative p-2 text-gray-700 hover:text-black transition-colors"
                >
                  <ShoppingBag size={22} strokeWidth={1.5} />
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-bold">
                    0
                  </span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 ml-1 text-gray-700 hover:text-black transition-colors"
                  aria-label="Toggle Menu"
                >
                  {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ height: "100vh", top: 0 }}
        >
          <div className="flex flex-col h-full bg-white">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <img src={logo} alt="Micha" className="h-10 w-auto" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="px-6 py-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl bg-gray-50 border-none px-4 py-3 pr-12 text-base focus:ring-2 focus:ring-black/5"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center justify-between py-4 text-lg font-medium text-gray-900 border-b border-gray-50 last:border-0"
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={18} className="text-gray-300" />
                  </Link>
                ))}
              </div>

              {/* Secondary Links */}
              <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
                <Link
                  to="/account"
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 text-gray-600"
                >
                  <User size={20} />
                  <span className="text-sm font-medium">Profile</span>
                </Link>
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 text-gray-600"
                >
                  <ShoppingBag size={20} />
                  <span className="text-sm font-medium">Orders</span>
                </a>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t bg-gray-50/50">
              <p className="text-xs text-center text-gray-400 uppercase tracking-widest font-medium">
                Micha Beauty &copy; 2024
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
