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
        <div className="flex mobile:flex-col tablet:flex-row  mt-14 mobile:mx-[0px] tablet:mx-[40px] desktop:mx-[140px] dark:text-white">
          <div className="flex justify-center tablet:basis-1/2 ">
            <img
              src={coverPhoto}
              className="mobile:w-[280px] mobile:h-[350px] tablet:w-[300px] tablet:h-[400px] border-[7px] z-10 border-white dark:border-[#030712]"
              alt="Image"
            />
            <div className="tablet:mr-10 mt-10 bg-[#E6E8EB] mobile:w-[300px] mobile:h-[330px]  tablet:w-[300px] tablet:h-[400px] absolute  dark:bg-[#374151]"></div>
          </div>
          <div className="mobile:mt-16 mobile:mx-8 tablet:mx-0 tablet:mt-0 flex flex-col align-middle basis-1/2">
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
