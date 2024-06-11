import coverPhoto from "../assets/images/coverPhoto.JPG";

export default function PageHeader() {
  return (
    <div className="mt-[64px] dark:bg-[#030712]">
      <div className="intro-div">
        <div className="basis-2/3 mx-8 mt-10 tablet:mt-0">
          <p className="intro-title">
            Hi, I'm Toufic👋
          </p>
        <p className="intro-description">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.{" "}
          </p>
          <p className="mt-8 ml-2 text-md dark:text-white">
          <i className="fa-solid fa-location-dot mr-4"></i>
            Beirut, Lebanon
          </p>
          <div className="mt-4 ml-2 flex items-center dark:text-white">
            <div className="w-[10px] h-[10px] bg-green-400 rounded-full"> </div>
            <p className="ml-5">Available for new projects</p>
          </div>
          <div className="mt-8 ml-4 dark:text-white">
          <i className="fa-brands fa-github text-2xl"></i>
          <i className="fa-brands fa-linkedin text-2xl mx-4"></i>
          </div>
        </div>
        <div className="basis-1/3 flex justify-center ">
          <img src={coverPhoto} className="w-[150px] h-[200px] z-10 border-[7px] border-white dark:border-[#030712]" alt="Image" />
          <div className="bg-[#E6E8EB] w-[170px] h-[180px] mt-7 tablet:w-[150px] tablet:h-[200px] absolute tablet:mt-5 tablet:ml-10 dark:bg-[#374151]" ></div>
        </div>
      </div>
    </div>
  );
}
