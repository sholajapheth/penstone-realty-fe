const ConstructionBannerPage = () => {
    return (
      <>
        <div className="text-white">
          <div className="bg-secondary relative p-4 py-[3em] md:py-[6em] col-span-2 flex items-center justify-center text-center">
            <div>
              <button className="bg-secondary px-8   py-2 rounded-full text-white ">
                <p className="bg-opac px-4 py-1 rounded-full text-[14px] font-medium">
                  Top Rated
                </p>
              </button>
              <p className="text-[30px] md:text-[68px] font-bold">
                Your construction projects
                <br className="hidden md:inline-block" />
                in safe, reliable hands
              </p>
              <p>
                We provide developers and homeowners with smart, buildable, and
                cost-effective
                <br className="hidden md:inline-block" /> enduring value
                architectural design for planning permission and building
                regulations approval.
              </p>

              <div className="flex justify-center items-center gap-[15px]">
                <button className="bg-primary px-8  font-semibold py-3 rounded-xl text-white mt-8">
                  Get Started
                </button>
                <button className="border border-white px-8  font-semibold py-3 rounded-xl text-white mt-8 flex justify-center items-center gap-[8px]">
                  Download Service Guide
                  <img src="/img/arw.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default ConstructionBannerPage;