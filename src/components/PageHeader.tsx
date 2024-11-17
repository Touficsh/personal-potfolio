import { Element } from "react-scroll";
import coverPhoto from "../assets/images/coverPhoto.JPG";

export default function PageHeader() {
  return (
    <Element name="pageheader">
      <div className="mt-[64px] dark:bg-[#171717]">
        <div className="intro-div">
          <div className="basis-2/3 mx-8 mt-10 tablet:mt-0">
            <p className="intro-title">Hi, I'm Toufic👋</p>
            <p className="intro-description">
              I am a versatile professional with a strong foundation in
              Mechatronics Engineering, specializing in crafting innovative
              solutions across multiple domains. My expertise spans engineering,
              frontend development and payment systems implementation, where I
              excel in delivering seamless integrations and user-focused
              designs. With a proven ability to collaborate with
              cross-functional teams and adapt to dynamic challenges, I am
              committed to driving technical excellence and achieving impactful
              results.{" "}
            </p>
            <p className="mt-8 ml-2 text-md dark:text-white">
              <i className="fa-solid fa-location-dot mr-4"></i>
              Beirut, Lebanon
            </p>
            <div className="mt-4 ml-2 flex items-center dark:text-white">
              <div className="w-[10px] h-[10px] bg-green-400 rounded-full">
                {" "}
              </div>
              <p className="ml-5">Available for new projects</p>
            </div>
            <div className="mt-8 ml-4 dark:text-white">
              <a
                href="https://github.com/Touficsh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/toufic-charafeddine/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 hover:text-blue-500"
              >
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="basis-1/3 flex justify-center ">
            <img
              src={coverPhoto}
              className="w-[150px] h-[200px] z-10 border-[7px] border-white dark:border-[#171717]"
              alt="Image"
            />
            <div className="bg-[#E6E8EB] w-[170px] h-[180px] mt-7 tablet:w-[150px] tablet:h-[200px] absolute tablet:mt-5 tablet:ml-10 dark:bg-[#1A1A1A]"></div>
          </div>
        </div>
      </div>
    </Element>
  );
}
