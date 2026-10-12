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
    <div className="fixed top-0 left-0 z-50 w-full">
      <nav className="relative flex min-h-20 w-full items-center justify-between gap-4 bg-white px-4 py-3 shadow-2xl sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="Limra Sales and Services"
            className="w-36 sm:w-44 lg:w-56 xl:w-64"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-4 xl:gap-7 font-medium text-sm xl:text-base">
            {menuItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer whitespace-nowrap hover:text-[#0776A3]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Enquiry Button */}
        <button
          type="button"
          className="hidden shrink-0 rounded-xl bg-[#0776A3] px-3 py-2 text-sm font-bold text-white hover:bg-[#124158] xl:block"
        >
          Enquiry Now
        </button>

        {/* Hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="shrink-0 text-3xl text-[#124158] lg:hidden"
        >
          &#9776;
        </button>

        {/* Mobile and Tablet Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full z-50 w-full border-t bg-white p-5 shadow-lg lg:hidden">
            <ul className="flex flex-col gap-4 font-medium">
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer py-1 hover:text-[#0776A3]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-5 w-full rounded-xl bg-[#0776A3] p-3 font-bold text-white hover:bg-[#124158]"
            >
              Enquiry Now
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
