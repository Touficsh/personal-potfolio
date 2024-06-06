
export default function NavBar() {
  return (
    <div className="mt-4 flex justify-between">
        <div className="ml-8">LOGO</div>
        <div className="mr-8 ">
            <a className="text-[#757D87] mx-4 font-semibold">About</a>
            <a className="text-[#757D87] mx-4 font-semibold">Experience</a>
            <a className="text-[#757D87] mx-4 font-semibold">Projects</a>
            <a className="text-[#757D87] mx-4 font-semibold">Contacts</a>
            <div className="inline-block h-[14px] w-[2px] bg-[#F6F7F7]"></div>
            <button className="text-[#757D87] ml-4 dark:hidden">
            <i className="fa-solid fa-sun "></i>
            </button>
            <button className="text-[#757D87] ml-4 hidden dark:inline">
            <i className="fa-solid fa-moon "></i>
            </button>
            <button className="mx-4 px-4 py-1 rounded-xl bg-[#101727] dark:bg-white text-white dark:text-[#101727] font-semibold">
                Download CV
            </button>
        </div>
    </div>
  )
}
