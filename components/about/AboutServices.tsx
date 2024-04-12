import AgentCard from "./AgentCard";

const AboutServices = () => {
    return (
      <>
        <div className="bg-white flex  justify-center w-full lg:justify-between pt-[3em] lg:pt-[5em] px-[1em] md:px-[5em] ">
          <div className=" flex flex-wrap items-center gap-[32px] justify-between w-full">
            <AgentCard />
            <AgentCard />
            <AgentCard />
          </div>
        </div>
      </>
    );
}
 
export default AboutServices;