import { Element } from "react-scroll";

import orenda from "../assets/images/orenda.png";

export default function Work() {
  const projects = [
    {
      projectName: "Orenda Clinic",
      projectDescription:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      projectLanguages: ["React", "NodeJs", "MongoDB", "Tailwind", "Vite"],
      redirectWebsite: "www.orenda-clinic.com",
    },
  ];

  return (
    <Element name="work">
      <div>
        <div className="py-20 flex flex-col items-center dark:bg-[#030712]">
          <p className="px-4 py-1 bg-[#E6E8EB] dark:bg-[#374151] dark:text-white text-sm rounded-full font-semibold w-fit">
            Work
          </p>
          <p className="mt-4 font-semibold work-borderbox dark:text-white">
            Here is a quick summary of my most recent experiences:
          </p>
          {projects.map((item) => (
            <div className="mt-16 mobile:px-4 tablet:px-20 flex mobile:flex-col tablet:flex-row">
              <div className="flex basis-1/2 work-image bg-[#F9F9FB] dark:bg-[#374151] items-center justify-center">
                <div className="p-8">
                  <img src={orenda} className="rounded-lg shadow-lg" />
                </div>
              </div>
              <div className=" basis-1/2 mobile:work-second-section-mobile tablet:work-second-section-tablet desktop:rounded-r-lg shadow-lg mobile:py-6 tablet:py-16 dark:bg-[#1F2937]">
                <p className=" work-projectName  ">
                  {item.projectName}
                </p>
                <p className=" work-projectDescription ">
                  {item.projectDescription}
                </p>
                <div className="mobile:mt-4 tablet:mt-8 ml-4 flex flex-wrap">
                  {item.projectLanguages.map((item) => (
                    <p className="work-projectLanguages">
                      {item}
                    </p>
                  ))}
                </div>
                <button
                  className="mobile:ml-6 mobile:mb-4 tablet:mb-0 tablet:ml-10 mt-8 dark:text-white"
                  onClick={() =>
                    window.open(`${item.redirectWebsite}`, "_blank")
                  }
                >
                  <i className="fa-solid fa-share-from-square"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
