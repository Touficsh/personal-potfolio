import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[64px] py-4 flex justify-end items-center dark:bg-[#171717] bg-white">
      {/* Logo (Commented for now) */}
      {/* <div className="ml-8 dark:text-white font-semibold text-lg">
        My Logo
      </div> */}

      {/* Desktop Navigation */}
      <div className="hidden tablet:flex mr-8 items-center">
        <Link
          to="pageheader"
          smooth={true}
          duration={1000}
          className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold hover:text-[#030712] dark:hover:text-gray-400"
        >
          Home
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={1000}
          className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold hover:text-[#030712] dark:hover:text-gray-400"
        >
          Skills
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={1000}
          className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold hover:text-[#030712] dark:hover:text-gray-400"
        >
          Experience
        </Link>
        <Link
          to="work"
          smooth={true}
          duration={1000}
          className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold hover:text-[#030712] dark:hover:text-gray-400"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold hover:text-[#030712] dark:hover:text-gray-400"
        >
          Contacts
        </Link>
        <div className="inline-block h-[18px] w-[2px] bg-[#757D87] dark:bg-white"></div>
        <button
          onClick={() => setDark(!dark)}
          className="ml-4 text-xl text-[#757D87] dark:text-white"
        >
          {dark ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="tablet:hidden flex items-center mr-4">
        <button
          onClick={() => setDark(!dark)}
          className="mr-4 text-xl text-[#757D87] dark:text-white"
        >
          {dark ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars text-3xl dark:text-white"></i>
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-[#171717] z-40 flex flex-col items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-3xl dark:text-white"
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <nav className="flex flex-col items-center gap-6">
            <Link
              to="pageheader"
              smooth={true}
              duration={1000}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-[#757D87] dark:text-white hover:text-[#030712] dark:hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-[#757D87] dark:text-white hover:text-[#030712] dark:hover:text-gray-400"
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={1000}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-[#757D87] dark:text-white hover:text-[#030712] dark:hover:text-gray-400"
            >
              Experience
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={1000}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-[#757D87] dark:text-white hover:text-[#030712] dark:hover:text-gray-400"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-[#757D87] dark:text-white hover:text-[#030712] dark:hover:text-gray-400"
            >
              Contacts
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
