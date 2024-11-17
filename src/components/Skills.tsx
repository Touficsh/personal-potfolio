import { Element } from 'react-scroll';

import JS from "../assets/images/js.png";
import TS from "../assets/images/ts.png";
import Express from "../assets/images/expressjs.webp";
import Mongo from "../assets/images/mongo.png";
import NodeJs from "../assets/images/nodejs.png";
import React from "../assets/images/React.webp";
import Redux from "../assets/images/redux.png";
import scss from "../assets/images/scss.png";
import tailwind from "../assets/images/tailwind.png";
import Vue from "../assets/images/Vue.png";
import MPGS from "../assets/images/mpgs.png";
import Cybersource from "../assets/images/cybersource.png";
import APAYA from "../assets/images/apaya.jfif";
import IXOPAY from "../assets/images/ixopay.png";
import VisaDirect from "../assets/images/visa.webp";


const images = [
  {
    title: "Javascript",
    image: JS,
  },
  {
    title: "Typescript",
    image: TS,
  },
  {
    title: "React",
    image: React,
  },
  {
    title: "Vue",
    image: Vue,
  },
  {
    title: "Node.js",
    image: NodeJs,
  },
  {
    title: "Express.js",
    image: Express,
  },
  {
    title: "MongoDB",
    image: Mongo,
  },
  {
    title: "Redux",
    image: Redux,
  },
  {
    title: "Scss",
    image: scss,
  },
  {
    title: "Tailwindcss",
    image: tailwind,
  },
  {
    title: "MPGS",
    image: MPGS,
  },
  {
    title: "Cybersource",
    image: Cybersource,
  },
  {
    title: "APAYA",
    image: APAYA,
  },
  {
    title: "IXOPAY",
    image: IXOPAY,
  },
  {
    title: "Visa",
    image: VisaDirect,
  },
];

export default function Skills() {
  return (
    <Element name='skills'>
        <div className='dark:bg-[#171717]'>
          <div className="py-14 flex flex-col items-center">
            <p className="px-4 py-1 bg-[#E6E8EB] dark:bg-[#212121] dark:text-white  text-sm rounded-full font-semibold w-fit">
              Skills
            </p>
            <p className="mt-6 mobile:mx-[30px] mobile:text-md tablet:text-lg desktop:text-xl font-semibold dark:text-white">
              The skills, tools, and technologies I am good at:
            </p>
            <div className="flex flex-wrap mb-8 mt-8 justify-center dark:text-white">
                {images.map((item, index) => (
                  <div key={index} className="items-center flex flex-col my-6 mobile:mx-6 mobile:w-[55px] mobile:h-[55px] tablet:w-[100px] tablet:h-[100px] tablet:mx-6 desktop:mx-20">
                    <img src={item.image} className="mobile:h-[50px] tablet:w-[70px] tablet:h-[70px]" alt={item.title} />
                    <p className="mt-2 font-semibold mobile:text-md  tablet:text-lg">{item.title}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
    </Element>
  );
}
