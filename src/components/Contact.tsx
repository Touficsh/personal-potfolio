import { Element } from 'react-scroll';

export default function Contact() {
  return (
    <Element name='contact'>
        <div className='bg-[#FAFAFB]'>
            <div className="flex flex-col py-16 items-center ">
              <p className="mt-8 px-4 py-1 bg-[#E6E8EB] text-sm rounded-full font-semibold w-fit">
                About me
              </p>
              <p className="mt-4 font-semibold">
                Here is a quick summary of my most recent experiences:
              </p>
              <div className="mt-8 flex text-2xl items-center font-bold">
                <i className="fa-solid fa-envelope"></i>
                <p className="mx-4">toufic.charafeddine@gmail.com</p>
                <i className="fa-solid fa-copy"></i>
              </div>
              <div className="mt-8 flex text-2xl items-center font-bold">
                <i className="fa-solid fa-phone"></i>{" "}
                <p className="mx-4">+961 76 010114</p>
                <i className="fa-solid fa-copy"></i>
              </div>
              <p className="mt-12 font-semibold">
                You may also find me on these platforms
              </p>
              <div className='mt-4'>
              <i className="fa-brands fa-github text-2xl"></i>
              <i className="fa-brands fa-linkedin text-2xl mx-4"></i>
              </div>
            </div>
        </div>
    </Element>
  );
}
