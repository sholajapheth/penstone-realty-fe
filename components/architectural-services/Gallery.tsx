import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[85%]">
          <div className="bg-white flex  justify-center pt-[3em] lg:pt-[5em] pb-[2em] ">
            <div className="w-full">
              <div className="flex flex-col lg:flex-row items-start justify-start pga-[30px] lg:gap-[65px] ">
                <p className="text-[#212226] font-semibold text-[40px] ">
                  Featured Projects
                </p>
                <p className="text-[20px] text-[#5A5A5A] pt-[10px] lg:pt-0">
                  Every project and every client&apos;s circumstances are
                  unique.
                  <br /> We take the time to understand needs and requirements.
                </p>
              </div>

              <div className="mt-[4em] w-full flex items-center gap-[10px] lg:gap-[20px] justify-between flex-wrap">
                <div className="flex justify-between gap-[10px] lg:gap-[20px] h-full w-[100%]">
                  <div className="w-[70%] h-[250px] lg:h-[500px]">
                    <Image
                      width={200}
                      height={200}
                      src="/img/img1.png"
                      className="h-[100%] w-[100%] object-cover rounded-[10px]"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between flex-col gap-[10px] lg:gap-[20px] h-[250px] lg:h-[500px] w-[30%]">
                    <div className="h-[50%] w-full">
                      <Image
                        width={200}
                        height={200}
                        src="/img/img2.png"
                        className="h-[100%] w-[100%] object-cover rounded-[10px]"
                        alt=""
                      />
                    </div>
                    <div className="h-[50%] w-full">
                      <Image
                        width={200}
                        height={200}
                        src="/img/img3.png"
                        className="rounded-[10px] h-[100%] w-[100%] object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between gap-[10px] lg:gap-[20px] h-[140px] lg:h-[220px] w-full ">
                  <div className="h-[100%] w-[40%]">
                    <Image
                      width={200}
                      height={200}
                      src="/img/img4.png"
                      className="h-[100%] rounded-[10px] w-[100%] object-cover "
                      alt=""
                    />
                  </div>
                  <div className="h-[100%] w-[60%]">
                    <Image
                      width={200}
                      height={200}
                      src="/img/img5.png"
                      className="rounded-[10px] object-cover h-[100%] w-[100%]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
