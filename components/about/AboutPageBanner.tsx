const AboutPageBanner = () => {
  return (
    <>
      <div className="text-secondary">
        <div className="bg-secondary relative col-span-2 flex items-center justify-center text-center">
          <div className="z-0 bg-[url('/img/about-bg.png')] absolute w-full h-full bottom-0 inset-0  bg-no-repeat bg-cover bg-right" />

          <div className="z-40 flex justify-center flex-col items-center">
            <div className=" rounded-full text-white flex justify-center pb-[20px] items-center">
              <p className="bg-opac px-4 py-1 rounded-full text-[14px] font-medium">
                About Us
              </p>
            </div>
            <div className=" pb-[3em] md:pb-[6em]">
              <p className=" text-white text-[30px] md:text-[68px] leading-[80px] font-bold px-[280px]">
                Leading gateway to facilitating property transactions in Africa
              </p>
              <p className="text-white  px-[350px]">
                More than just a real estate company, we're committed to
                creating lasting value, improving living experiences, and
                reshaping the traditional real estate scene.
              </p>
              <div className="flex justify-center items-center pt-[60px] relative">
                <img src="/img/about-hero.png" alt="" />
                <div className="absolute"><img src="/img/play.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPageBanner;
