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
    <div className="fixed top-0 left-0 right-0 z-50 h-[64px] py-4 flex justify-between dark:bg-[#171717] bg-white">
      <div className="ml-8 dark:text-white">&nbsp;</div>
      <div className="hidden tablet:flex mr-8 items-center">
        <Link to="about" smooth={true} duration={1000} className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold hover:text-[#030712] dark:hover:text-purple-700">About</Link>
        <Link to="skills" smooth={true} duration={1000} className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold hover:text-[#030712] dark:hover:text-purple-700">Skills</Link>
        <Link to="experience" smooth={true} duration={1000} className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold hover:text-[#030712] dark:hover:text-purple-700">Experience</Link>
        <Link to="work" smooth={true} duration={1000} className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold hover:text-[#030712] dark:hover:text-purple-700">Projects</Link>
        <Link to="contact" smooth={true} duration={1000} className="mx-4 cursor-pointer text-[#757D87] dark:text-white font-semibold hover:text-[#030712] dark:hover:text-purple-700">Contacts</Link>
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
        {/* <button className="mx-4 px-4 py-1 rounded-xl bg-[#101727] dark:bg-white text-white dark:text-[#101727] font-semibold">
          Download CV
        </button> */}
      </div>
      <div className="tablet:hidden dark:text-white">
        <i className="fa-solid fa-bars mr-8 text-3xl"></i>
      </div>
    </div>
  );
}
