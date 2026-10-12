import { useState } from "react";
import logo from "../../../../assets/image.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full ">
        <div className="flex items-center justify-between shadow-2xl bg-white min-h-20 w-full p-3 ">

          {/* Logo */}
          <div>
            <img src={logo} alt="logo" className="w-65" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex gap-7 font-medium">
              <li>Home</li>
              <li>Our Story</li>
              <li>Services</li>
              <li>Products</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            &#9776;
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg p-5 lg:hidden z-50">
              <ul className="flex flex-col gap-5 font-medium">
                <li>Home</li>
                <li>Our Story</li>
                <li>Services</li>
                <li>Products</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>

              <button className="bg-[#0776A3] rounded-2xl w-full mt-5 p-2 text-white font-bold">
                Enquiry Now
              </button>
            </div>
          )}

          {/* Desktop Enquiry Button */}
          <div className="hidden lg:block bg-[#0776A3] rounded-2xl px-4 py-2 text-white font-bold">
            <button type="button">Enquiry Now</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;