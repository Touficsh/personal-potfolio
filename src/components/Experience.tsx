import Anywr from "../assets/images/anywr.webp";
import Digisol from '../assets/images/digisol.png'
import Delta from '../assets/images/Delta.png'
import Areeba from '../assets/images/Areeba.jpg'
import { Element } from 'react-scroll';

const experience = [
    {
        image: Areeba,
        Position: 'Implementation Team - Ecom Officer',
        Details: [
            'Collaborated with schemes to implement new features, validating DCF and TC33 files to ensure compliance throughout the e-commerce lifecycle.',
            'Provided 24/7 technical support for more than 500 clients over MPGS, CyberSource, APAYA, Visa Direct, and regional payment systems across Lebanon, Iraq, Egypt, and Jordan, such as Toters, Checkout, Talabat, Touch, Alfa.',
            'Delivered technical and business solutions for processors and aggregators, optimizing transaction workflows.',
            'Partnered with cross-functional teams (BA, PM, QA) to deliver secure, high-quality payment solutions.',
            'Developed fraud prevention and compliance rules (e.g., Brighterion, Decision Manager) to enhance risk management.',
            'Drafted request/response specifications for the in-house certified Switch, ensuring data integrity and accuracy.',
            'Conducted project evaluations and streamlined workflows for improved execution efficiency.',
            'Supported partners with merchant onboarding, compliance, and transaction flow optimization.',
            'Worked on API-to-ISO8583 translation for the in-house switch.',
            'Managed technical communications related to integration and processes with clients technical teams.',
            'Ensured compliance with mandates and data integrity standards, including EDPQ.',
            'Developed an e-commerce simulator to cover key client integrations, including Secure Acceptance, Unified Checkout, Click-to-Pay tokenization, 3D Secure, AFT/OCT, EDCC, CIT/MIT, aggregator setups, batch processing, webhooks, microforms, recurring payments, and invoicing.',
        ],
        Date: 'June 2024 - Present'
    },
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
        image: Digisol,
        Position: 'Development Freelancing',
        Details: [
            'Executed concurrent project management, showcasing proficiency in Express, Node.js, TypeScript, and other languages. Applied full-stack expertise to consistently deliver scalable and efficient solutions across diverse tech stacks.',
            'Effectively collaborated with fellow developers to streamline project workflows, fostering a cohesive team environment. Played a pivotal role in meeting project timelines through open communication, task coordination, and collective problem-solving.',
        ],
        Date: 'June 2022 - Present'
    },
    {
        image: Delta,
        Position: 'Project Coordinator',
        Details: [
            'Designed a Flutter-based application that optimizes technician workflows by transitioning from paper to tablet-based form submissions. The app directly emails submissions to clients, aiding in quotation creation and identifying necessary items for future visits.',
            'Collaborated with project managers and facility management companies to ensure timely project submissions, aligning effectively with consultant requirements for successful project delivery.',
            'Commissioned different types of diesel engines , Perkins , Cummins , Volvo and troubleshooted engines with different controllers such as ComAp, DSE, Power Wizard. In addition to controlling the AVR and Governor by the controllers to reach a stable result for synchronization. Maintenance follow up and troubleshooting electric and mechanical faults at prime location such as Rive Gauche (4 MW-Corniche Al-Naher) and Beirut Tower (5 MW- Solidaire).',
            'The installation of Deep-Sea Electronics 8610MKII and 8810 modules instead of SDMO controller at Park Clemenceau (0.7 MW) and GenPart 6000 controllers at Nour Gardens (1 MW). In addition to programming them from scratch and synchronizing the generators.',
            'Programmed several controllers such as the Easy modules and Modicon schneider PLC’s using the ladder diagram. In addition to installing load shedding and sharing programs to ensure load schemes demand are met in Saifi Village II (1.75MW). Established communication between Shneider Magelis HMI and Modicon using SoMachine Basic and Vijeo Designer softwares. In addition to knowledge in TIA Portal 15 Siemens software , Simatic PLC’s, and HMI’s.',
            'Designed different control circuits diagrams for Automatic transfer switch electrical panels and synchronization panels using AutoCad.',
            'Handled the implementation of the DSE890 gateway communication module that allows to supervise the generator remotely through the DSE WebNet platform. In addition to generating report to notify the company and the customer in the case of an event.',

        ],
        Date: 'June 2020 - Feb 2023'
    },
]

export default function Experience() {
  return (
    <Element name='experience'>
        <div className="bg-[#FAFAFB] dark:bg-[#212121]">
          <div className="py-20 flex flex-col items-center">
            <p className=" px-4 py-1 bg-[#E6E8EB] dark:bg-[#1A1A1A] dark:text-white text-sm rounded-full font-semibold w-fit mx-auto">
              Experience
            </p>
            <p className="mobile:mx-6 tablet:mx-0 mt-4 font-semibold dark:text-white">
              Here is a quick summary of my most recent experiences:
            </p>
            <div className="mt-8 mobile:mx-4">
                {
                    experience.map((item, index) => 
                        (
                            <div key={index} className="flex mobile:flex-col tablet:flex-row justify-between my-12 p-4 rounded-xl experience-div bg-white dark:bg-[#171717] dark:text-white shadow-lg">
                            <img src={item.image} className="mobile:w-[100px] w-[100px] h-[50px] self-center" />
                            <p className="mobile:inline tablet:hidden mobile:text-sm tablet:text-md desktop:text-lg text-[#767D88] font-semibold ">{item.Date}</p>
                            <div className=" tablet:mx-10  mobile:w-fit w-[500px]">
                              <p className="mobile:mt-2 tablet:mt-0 font-bold mobile:text-md tablet:text-lg desktop:text-xl">{item.Position}</p>
                              <ul className=" mt-4 list-disc text-sm">
                                { item.Details.map((item, index) => (
                                    <li className="mobile:mx-4 tablet:mx-0 mobile:text-sm tablet:text-base desktop:text-base" key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <p className="mobile:hidden tablet:inline tablet:text-md desktop:text-lg text-[#767D88] font-semibold">{item.Date}</p>
                          </div>
                    ))
                }

            </div>
          </div>
        </div>
    </Element>
  );
}
