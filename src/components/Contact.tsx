import { Element } from 'react-scroll';

export default function Contact() {
  // Function to copy text to clipboard
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
    });
  };

  return (
    <Element name='contact'>
      <div className='bg-[#FAFAFB] dark:bg-[#212121]'>
        <div className="flex flex-col py-16 items-center ">
          <p className="mt-8 px-4 py-1 bg-[#E6E8EB] dark:bg-[#1A1A1A] dark:text-white text-sm rounded-full font-semibold w-fit">
            Contact me
          </p>
          <p className="mt-4 mobile:mx-6 mobile:text-base tablet:text-lg font-semibold dark:text-white">
            Here is my email:
          </p>
          <div className="tablet:mt-8 mobile:mt-4 flex mobile:text-sm tablet:text-2xl items-center font-bold dark:text-white">
            <i className="fa-solid fa-envelope"></i>
            <p className="mx-4">toufic.charafeddine@gmail.com</p>
            <i className="fa-solid fa-copy cursor-pointer" onClick={() => handleCopy("toufic.charafeddine@gmail.com")}></i>
          </div>
          {/* <div className="tablet:mt-8 mobile:mt-4 flex mobile:text-sm tablet:text-2xl items-center font-bold dark:text-white">
            <i className="fa-solid fa-phone"></i>
            <p className="mx-4">+961 76 010114</p>
            <i className="fa-solid fa-copy cursor-pointer" onClick={() => handleCopy("+961 76 010114")}></i>
          </div> */}
          <p className="tablet:mt-12 mobile:mt-4 mobile:text-sm tablet:text-lg font-semibold dark:text-white">
            You may also find me on these platforms
          </p>
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
      </div>
    </Element>
  );
}
