import { useState, useEffect } from "react";
import { Link } from 'react-scroll';

export default function NavBar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-4 flex justify-between dark:bg-[#030712] bg-white">
      <div className="ml-8 dark:text-white">LOGO</div>
      <div className="mr-8 flex items-center">
        <Link to="about" smooth={true} duration={1000} className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold">About</Link>
        <Link to="skills" smooth={true} duration={1000} className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold">Skills</Link>
        <Link to="experience" smooth={true} duration={1000} className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold">Experience</Link>
        <Link to="projects" smooth={true} duration={1000} className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold">Projects</Link>
        <Link to="contacts" smooth={true} duration={1000} className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold">Contacts</Link>
        <div className="inline-block h-[14px] w-[2px] bg-[#F6F7F7]"></div>
        <button
          className="text-[#757D87] ml-3 dark:hidden"
          onClick={() => setDark(true)}
        >
          <i className="fa-solid fa-sun"></i>
        </button>
        <button
          className="text-white ml-4 hidden dark:inline"
          onClick={() => setDark(false)}
        >
          <i className="fa-solid fa-moon"></i>
        </button>
        <button className="mx-4 px-4 py-1 rounded-xl bg-[#101727] dark:bg-white text-white dark:text-[#101727] font-semibold">
          Download CV
        </button>
      </div>
    </div>
  );
}
