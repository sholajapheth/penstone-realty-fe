import AgentCard from "./AgentCard";

const AboutServices = () => {
    return (
      <>
        <div className="bg-white flex  justify-center py-[3em] lg:py-[4em] px-[1em] md:px-[5em] ">
          <div className="mt-[5em] flex flex-wrap items-center gap-[32px] justify-between ">
            <AgentCard />
            <AgentCard />
            <AgentCard />
          </div>
        </div>
      </>
    );
}
 
export default AboutServices;