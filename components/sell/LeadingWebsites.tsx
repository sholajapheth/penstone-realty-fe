const LeadingWebsites = () => {
    return (
      <>
        <div className=" px-[1em] md:px-[5em]">
          <div className="bg-white flex  justify-center pb-[5em] ">
            <div className="w-full">
              <div className="flex justify-center items-center  ">
                <p className="text-[#212226] font-semibold text-[36px] text-center">
                  Get your property featured on market leading websites:
                </p>
              </div>

              <div className="mt-[4em] flex items-center gap-[32px] justify-between flex-wrap ">
                <img src="/img/leading1.png" alt="" />
                <img src="/img/leading2.png" alt="" />
                <img src="/img/leading3.png" alt="" />
                <img src="/img/leading4.png" alt="" />
              </div>

              <div className="flex justify-center items-center pt-[50px]">
                <button className="bg-primary px-8 font-semibold py-3 rounded-xl text-white mt-8">
                  Click to get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default LeadingWebsites;