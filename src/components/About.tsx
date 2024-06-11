import { Element } from "react-scroll";

import coverPhoto from "../assets/images/coverPhoto.JPG";

export default function About() {
  return (
    <Element name="about">
      <div className="bg-[#FAFAFB] dark:bg-[#111827] pt-[50px] pb-[100px]">
        <div className="pt-8 ">
          <p className="px-4 py-1 bg-[#E6E8EB] dark:bg-[#374151] dark:text-white text-sm rounded-full font-semibold w-fit mx-auto">
            About me
          </p>
        </div>
        <div className="flex mt-14 mx-[140px] dark:text-white">
          <div className="flex justify-center basis-1/2 ">
            <img
              src={coverPhoto}
              className="w-[300px] h-[400px] border-[7px] z-10 border-white dark:border-[#030712]"
              alt="Image"
            />
            <div className="mt-4 mr-10 bg-[#E6E8EB] w-[300px] h-[400px] absolute  dark:bg-[#374151]"></div>
          </div>
          <div className="flex flex-col align-middle basis-1/2">
            <p className="text-2xl font-bold">Title for about</p>
            <p className="mt-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}
