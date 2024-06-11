import { Element } from 'react-scroll';

import orenda from "../assets/images/orenda.png";

export default function Work() {
  return (
    <Element name='work'>
        <div>
          <div className="py-20 flex flex-col items-center dark:bg-[#030712]">
            <p className="px-4 py-1 bg-[#E6E8EB] dark:bg-[#374151] dark:text-white text-sm rounded-full font-semibold w-fit">
              Work
            </p>
            <p className="mt-4 font-semibold dark:text-white">
              Here is a quick summary of my most recent experiences:
            </p>
            <div className="mt-16 px-20 flex">
              <div className="flex basis-1/2 rounded-l-lg bg-[#F9F9FB] dark:bg-[#374151] items-center justify-center shadow-lg">
                <div className="p-8">
                  <img src={orenda} className=" rounded-lg shadow-lg" />
                </div>
              </div>
              <div className=" basis-1/2 rounded-r-lg shadow-lg py-16 dark:bg-[#1F2937]">
                <p className="font-bold  ml-8 dark:text-white">Orenda Clinic</p>
                <p className="mt-8 ml-8 pr-16 dark:text-white">
                  Simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled
                  it to make a type specimen book. It has survived not only five
                </p>
                <div className="mt-8 ml-4 flex flex-wrap">
                  <p className="mx-2 my-1 px-4 py-1 bg-[#E6E8EB] dark:bg-[#374151] dark:text-white text-sm rounded-full font-semibold w-fit">
                    React
                  </p>
                  <p className="mx-2 my-1 px-4 py-1 bg-[#E6E8EB] dark:bg-[#374151] dark:text-white text-sm rounded-full font-semibold w-fit">
                    NodeJs
                  </p>
                  <p className="mx-2 my-1 px-4 py-1 bg-[#E6E8EB] dark:bg-[#374151] dark:text-white text-sm rounded-full font-semibold w-fit">
                    MongoDB
                  </p>
                  <p className="mx-2 my-1 px-4 py-1 bg-[#E6E8EB] dark:bg-[#374151] dark:text-white text-sm rounded-full font-semibold w-fit">
                    Tailwind
                  </p>
                  <p className="mx-2 my-1 px-4 py-1 bg-[#E6E8EB] dark:bg-[#374151] dark:text-white text-sm rounded-full font-semibold w-fit">
                    Vite
                  </p>
                </div>
                <button
                  className="ml-10 mt-8 dark:text-white"
                  onClick={() =>
                    window.open("https://www.orenda-clinic.com", "_blank")
                  }
                >
                  <i className="fa-solid fa-share-from-square"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
    </Element>
  );
}
