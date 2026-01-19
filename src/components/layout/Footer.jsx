import { Link } from "react-router-dom";
import logo from "../../assets/images/micha-logo.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Micha Logo"
                loading="lazy"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Experience the best in beauty with Micha. We provide high-quality
              makeup and skincare products tailored for your unique needs.
            </p>
            <div className="flex gap-4 text-gray-500">
              <a href="#" className="hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-black transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">
              Shop Now
            </h3>
            <ul className="flex flex-col gap-2 text-gray-600 text-sm">
              <li>
                <Link to="/lips" className="hover:text-black">
                  Lips
                </Link>
              </li>
              <li>
                <Link to="/eyes" className="hover:text-black">
                  Eyes
                </Link>
              </li>
              <li>
                <Link to="/face" className="hover:text-black">
                  Face
                </Link>
              </li>
              <li>
                <Link to="/nails" className="hover:text-black">
                  Nails
                </Link>
              </li>
              <li>
                <Link to="/skin" className="hover:text-black">
                  Skin
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-black">
                  Specials & Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">
              Support
            </h3>
            <ul className="flex flex-col gap-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-black">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4 text-gray-600 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:support@micha.com" className="hover:text-black">
                  support@micha.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:+1234567890" className="hover:text-black">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="mt-2 font-medium text-black">
                Subscribe to our newsletter
              </li>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border px-3 py-2 text-sm focus:outline-none focus:border-black rounded-l-sm"
                />
                <button className="bg-black text-white px-4 py-2 text-xs uppercase font-bold rounded-r-sm hover:bg-gray-800 transition-colors">
                  Join
                </button>
              </div>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Micha Beauty. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-black underline underline-offset-4"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-black underline underline-offset-4"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-black underline underline-offset-4"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
