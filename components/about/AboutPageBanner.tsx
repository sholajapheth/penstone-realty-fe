import Image from "next/image";

const AboutPageBanner = () => {
  return (
    <>
      <div className="text-secondary ">
        <div className="bg-[#0B293F] relative col-span-2 flex items-center justify-center text-center">
          <div className="z-0 bg-[url('/img/about-bg.png')] absolute w-full h-full bottom-0 inset-0  bg-no-repeat bg-cover bg-right" />

          <div className="z-40 flex justify-center flex-col items-center">
            <div className=" rounded-full text-white/90 flex justify-center pb-[20px] items-center">
              <p className="bg-opac px-4 py-1 rounded-full text-[14px] font-medium">
                About Us
              </p>
            </div>
            <div className=" pb-[3em] md:pb-[6em]">
              <p className=" text-white text-[30px] md:text-[68px] lg:leading-[80px] font-bold lg:px-[280px]">
                Leading gateway to <br />{" "}
                <span className="text-[#FFF9D3]">
                  facilitating property <br /> transactions in Africa
                </span>
              </p>
              <p className="text-white/70 px-[1em] lg:px-[350px] pt-[10px]">
                More than just a real estate company, we&apos;re committed to
                creating lasting value, <br className="hidden lg:block" />{" "}
                improving living experiences, and reshaping the
                <br className="lg:hidden" /> traditional real estate scene.
              </p>
              <div className="flex  px-[1em] lg:px-[5em] justify-center items-center pt-[30px] lg:pt-[60px] relative">
                <Image
                  quality={100}
                  width={300}
                  height={300}
                  className="w-full h-full"
                  src="/img/about-hero.png"
                  alt=""
                />
                <div className="absolute left-[45%]">
                  <Image
                    unoptimized={true}
                    src="/img/play.png"
                    alt=""
                    width={100}
                    height={100}
                    className="w-1/2 lg:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPageBanner;
