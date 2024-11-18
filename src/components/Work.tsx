import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import orenda from '../assets/images/orenda.png'
import elite from '../assets/images/elitesupplements.png'
import digisol from '../assets/images/digisol-work.png'


export default function Work() {
  const projects = [
    {
      projectName: "Orenda Clinic",
      projectDescription:
        "Orenda Clinic is an informative website showcasing psychomotor therapy services, workshops, and activities. It provides detailed insights into therapeutic techniques that improve both mental and physical health. Visitors can explore available services and participate in workshops to enhance their motor skills and emotional well-being.",
      projectLanguages: ["React", "NodeJs", "MongoDB", "Tailwind", "Vite"],
      redirectWebsite: "https://www.orenda-clinic.com",
      image: orenda
    },
    {
      projectName: "Elite Supplements",
      projectDescription:
        "Elite Supplements is an e-commerce platform selling a variety of nutritional supplements. The site offers products like vitamins, proteins, and minerals, catering to fitness enthusiasts and health-conscious individuals. It provides easy navigation, detailed product descriptions, and customer reviews for informed purchasing decisions.",
      projectLanguages: ["Wordpress", "Woocommerce", "Monster insights", "CSS"],
      redirectWebsite: "https://elitesupplementslb.com/",
      image: elite
    },
    {
      projectName: "Digisol Innovations",
      projectDescription:
        "Digisol Innovations is a dynamic website offering web development, hosting, and digital services. It provides tailored solutions to help businesses improve their online presence. The site also highlights a portfolio of successful projects, demonstrating the company’s expertise in delivering high-quality digital services.",
      projectLanguages: ["Vue", "Vite", "Tailwind", "CSS", 'ExpressJs', 'Vue Router', 'EmailJs'],
      redirectWebsite: "https://digisol-innovations.com/",
      image: digisol
    },
  ];

  return (
    <Element name="work">
      <div>
        <div className="py-20 flex flex-col items-center dark:bg-[#171717]">
          <p className="px-4 py-1 bg-[#E6E8EB] dark:bg-[#212121] dark:text-white text-sm rounded-full font-semibold w-fit">
            Work
          </p>
          <p className="mt-4 font-semibold work-borderbox dark:text-white">
            Here is a quick summary of my most recent experiences:
          </p>

          <div className="mt-10 w-full max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              className="swiper-container"
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`mt-16 mobile:px-4 tablet:px-20 flex mobile:flex-col tablet:flex-row`}
                  >
                    <div className="flex basis-1/2 work-image bg-[#F9F9FB] dark:bg-[#212121] items-center justify-center">
                      <div className="p-8">
                        <img
                          src={item.image}
                          className="rounded-lg shadow-lg max-w-full object-contain"
                          alt={`${item.projectName} preview`}
                        />
                      </div>
                    </div>
                    <div
                      className={`basis-1/2 mobile:work-second-section-mobile tablet:work-second-section-tablet shadow-lg mobile:py-6 tablet:py-16 dark:bg-[#2A2A2A]`}
                    >
                      <p className="work-projectName">{item.projectName}</p>
                      <p className="work-projectDescription">
                        {item.projectDescription}
                      </p>
                      <div className="mobile:mt-4 tablet:mt-8 ml-4 flex flex-wrap">
                        {item.projectLanguages.map((language, i) => (
                          <p key={i} className="work-projectLanguages">
                            {language}
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Mobile Pagination Dots Only */}
      <style>{`
        /* Hide pagination dots on tablet and above */
        @media (min-width: 768px) {
          .swiper-pagination {
            display: none !important;
          }
        }

        /* Hide navigation arrows on mobile */
        @media (max-width: 767px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
            color: red !important;
          }
        }
      `}</style>
    </Element>
  );
}
