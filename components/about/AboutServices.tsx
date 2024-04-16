import AgentCard from "./AgentCard";

const AboutServices = () => {
    return (
      <>
        <div className="flex  justify-center pt-[3em] lg:pt-[5em] px-[1em] bg-white">
          <div className="  w-[85%]">
            <div className=" flex flex-wrap items-center gap-[28px] justify-between">
              <AgentCard />
              <AgentCard />
              <AgentCard />
            </div>
          </div>
        </div>
      </>
    );
}
 
export default AboutServices;