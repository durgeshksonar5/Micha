import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return null;
};

// Pages
const Home = lazy(() => import("./pages/Home"));
const Lips = lazy(() => import("./pages/Lips"));
const Eyes = lazy(() => import("./pages/Eyes"));
const Face = lazy(() => import("./pages/Face"));
const Nails = lazy(() => import("./pages/Nails"));
const Skin = lazy(() => import("./pages/Skin"));
const Gifting = lazy(() => import("./pages/Gifting"));
const Offers = lazy(() => import("./pages/Offers"));
const Cart = lazy(() => import("./pages/Cart"));
const Account = lazy(() => import("./pages/Account"));
const Search = lazy(() => import("./pages/Search"));

// Loading Placeholder
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white font-sans">
    <div className="w-12 h-12 border-4 border-gray-100 border-t-black rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lips" element={<Lips />} />
          <Route path="/eyes" element={<Eyes />} />
          <Route path="/face" element={<Face />} />
          <Route path="/nails" element={<Nails />} />
          <Route path="/skin" element={<Skin />} />
          <Route path="/gifting" element={<Gifting />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
