import { useState, useEffect } from "react";

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
    <div className="py-4 flex justify-between dark:bg-[#030712]">
      <div className="ml-8 dark:text-white">LOGO</div>
      <div className="mr-8 ">
        <a className="mx-4 text-[#757D87] dark:text-white font-semibold">About</a>
        <a className="mx-4 text-[#757D87] dark:text-white font-semibold">Experience</a>
        <a className="mx-4 text-[#757D87] dark:text-white font-semibold">Projects</a>
        <a className="mx-4 text-[#757D87] dark:text-white font-semibold">Contacts</a>
        <div className="inline-block h-[14px] w-[2px] bg-[#F6F7F7]"></div>
        <button
          className="text-[#757D87] ml-3 dark:hidden"
          onClick={() => setDark(true)}
        >
          <i className="fa-solid fa-sun "></i>
        </button>
        <button
          className="text-white ml-4 hidden dark:inline"
          onClick={() => setDark(false)}
        >
          <i className="fa-solid fa-moon "></i>
        </button>
        <button className="mx-4 px-4 py-1 rounded-xl bg-[#101727] dark:bg-white text-white dark:text-[#101727] font-semibold">
          Download CV
        </button>
      </div>
    </div>
  );
}
