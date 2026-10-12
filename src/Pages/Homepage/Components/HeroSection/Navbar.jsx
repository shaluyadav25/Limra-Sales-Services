import { useState } from "react";
import logo from "../../../../assets/image.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "Our Story",
    "Services",
    "Products",
    "Blog",
    "Contact us",
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg">
      <div className="flex min-h-20 w-full items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <img
          src={logo}
          alt="Limra Sales and Services"
          className="w-36 shrink-0 sm:w-48 lg:w-56 xl:w-64"
        />

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-5 font-medium lg:flex xl:gap-7">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer whitespace-nowrap hover:text-[#0776A3]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          className="hidden shrink-0 rounded-xl bg-[#0776A3] px-4 py-2 font-bold text-white lg:block"
          type="button"
        >
          Enquiry Now
        </button>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="block shrink-0 cursor-pointer border-0 bg-white p-2 text-4xl leading-none text-[#124158] lg:hidden"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-200 bg-white p-5 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-5 font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#0776A3]"
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-5 w-full rounded-xl bg-[#0776A3] p-3 font-bold text-white"
          >
            Enquiry Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
