import Anywr from "../assets/images/Anywr.png";
import { Element } from 'react-scroll';

const experience = [
    {
        image: Anywr,
        Position: 'Frontend Developer',
        Details: [
            'Integrated design systems (Vuetify and company’s) into projects,',
            'Implemented unit testing for front-end code to enhance resilience and quality while leveraging a SOLID coding foundation for innovation and efficiency.',
            'Coordinated closely with Backend developers and QA engineers, ensuring seamless API integration and alignment of front-end components with business requirements to guarantee a unified, error-free product.',
            'Collaborated with UX/UI designers, POs, and PMs using Jira, ensuring seamless communication, meticulous ticket management, and agile sprint planning for timely project delivery.',
            'Successfully contributed to three interconnected Vue js projects, managing complex dependencies for a cohesive and integrated software ecosystem.',
        ],
        Date: 'Feb 2023 - Mar 2024'
    },
    {
        image: Anywr,
        Position: 'Development Freelancing',
        Details: [
            'Executed concurrent project management, showcasing proficiency in Express, Node.js, TypeScript, and other languages. Applied full-stack expertise to consistently deliver scalable and efficient solutions across diverse tech stacks.',
            'Effectively collaborated with fellow developers to streamline project workflows, fostering a cohesive team environment. Played a pivotal role in meeting project timelines through open communication, task coordination, and collective problem-solving.',
        ],
        Date: 'June 2022 - Present'
    },
    {
        image: Anywr,
        Position: 'Project Coordinator',
        Details: [
            'Designed a Flutter-based application that optimizes technician workflows by transitioning from paper to tablet-based form submissions. The app directly emails submissions to clients, aiding in quotation creation and identifying necessary items for future visits.',
            'Collaborated with project managers and facility management companies to ensure timely project submissions, aligning effectively with consultant requirements for successful project delivery.'
        ],
        Date: 'June 2020 - Feb 2023'
    },
]

export default function Experience() {
  return (
    <Element name='experience'>
        <div className="bg-[#FAFAFB]">
          <div className="py-20 flex flex-col items-center">
            <p className=" px-4 py-1 bg-[#E6E8EB] text-sm rounded-full font-semibold w-fit mx-auto">
              About me
            </p>
            <p className="mt-4 font-semibold">
              Here is a quick summary of my most recent experiences:
            </p>
            <div className="mt-8">
                {
                    experience.map((item, index) => 
                        (
                            <div key={index} className="flex justify-between my-12 p-4 rounded-xl bg-white shadow-lg">
                            <img src={item.image} className="w-[100px] h-[50px]" />
                            <div className="mx-20 w-[500px]">
                              <p className="font-bold text-lg">{item.Position}</p>
                              <ul className="mt-4 list-disc text-sm">
                                { item.Details.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <p className="text-[#767D88] font-semibold">{item.Date}</p>
                          </div>
                    ))
                }

            </div>
          </div>
        </div>
    </Element>
  );
}
