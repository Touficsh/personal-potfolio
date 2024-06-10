import { Element } from 'react-scroll';

import JS from "../assets/images/js.png";
import TS from "../assets/images/ts.png";
import Express from "../assets/images/expressjs.png";
import Mongo from "../assets/images/mongo.png";
import NodeJs from "../assets/images/nodejs.png";
import React from "../assets/images/React.webp";
import Redux from "../assets/images/redux.png";
import scss from "../assets/images/scss.png";
import tailwind from "../assets/images/tailwind.png";
import Vue from "../assets/images/Vue.png";

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
];

export default function Skills() {
  return (
    <Element name='skills'>
        <div>
          <div className="my-14 pt-8 flex flex-col items-center">
            <p className="px-4 py-1 bg-[#E6E8EB] text-sm rounded-full font-semibold w-fit">
              Skills
            </p>
            <p className="mt-6 text-xl font-semibold">
              The skills, tools, and technologies I am good at:
            </p>
            <div className="flex flex-wrap mb-8">
                {images.map((item, index) => (
                  <div key={index} className="items-center flex flex-col mt-12 mx-20">
                    <img src={item.image} className="w-[70px] h-[70px]" alt={item.title} />
                    <p className="mt-2 font-semibold text-lg">{item.title}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
    </Element>
  );
}
