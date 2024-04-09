import ProjectCard from "./ProjectCard";

const AgentPortfolio = () => {
    return (
      <div className=" px-[1em] md:px-[5em]">
        <div className="bg-white  flex justify-center py-[2em] lg:py-[4em] ">
          <div className="w-full">
            <div className="flex items-start justify-between  ">
              <p className="text-[#212226] font-semibold text-[40px] ">
                Project Features
              </p>
            </div>

            <div className="mt-[4em] w-full flex items-center gap-[32px] justify-between flex-wrap">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>

            <div className="flex justify-center items-center pt-[50px]">
              <button className="bg-primary px-8  font-semibold py-3 rounded-xl text-white mt-8">
               Click to get started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default AgentPortfolio;