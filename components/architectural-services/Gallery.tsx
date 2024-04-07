const Gallery = () => {
    return (
      <>
        <div className=" px-[1em] md:px-[5em]">
          <div className="bg-white  flex justify-center py-[4em] ">
            <div className="w-full">
              <div className="flex items-start justify-start gap-[65px] ">
                <p className="text-[#212226] font-semibold text-[40px] ">
                  Featured Projects
                </p>
                <p className="text-[20px] text-[#5A5A5A]">
                  Every project and every client&apos;s circumstances are
                  unique.
                  <br /> We take the time to understand needs and requirements.
                </p>
              </div>

              <div className="mt-[4em] w-full flex items-center gap-[20px] justify-between flex-wrap">
                <div className="flex justify-between gap-[20px] h-full w-[100%]">
                  <div className="w-[70%] h-[500px]">
                    <img
                      src="/img/img1.png"
                      className="h-[100%] w-[100%] object-cover rounded-[10px]"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between flex-col gap-[20px] h-[500px] w-[30%]">
                    <div className="h-[50%] w-full">
                      <img
                        src="/img/img2.png"
                        className="h-[100%] w-[100%] object-cover rounded-[10px]"
                        alt=""
                      />
                    </div>
                    <div className="h-[50%] w-full">
                      <img
                        src="/img/img3.png"
                        className="rounded-[10px] h-[100%] w-[100%] object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between gap-[20px] h-[220px] w-full ">
                  <div className="h-[100%] w-[40%]">
                    <img
                      src="/img/img4.png"
                      className="h-[100%] w-[100%] object-cover "
                      alt=""
                    />
                  </div>
                  <div className="h-[100%] w-[60%]">
                    <img
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
      </>
    );
}
 
export default Gallery;