import AgentCard from "./AgentCard";

const AboutServices = () => {
    return (
      <>
        <div className="bg-white flex  justify-center py-[5em] px-[1em] md:px-[5em] ">
          <div className="mt-[5em] flex items-center gap-[32px] justify-between ">
            <AgentCard />
            <AgentCard />
            <AgentCard />
          </div>
        </div>
      </>
    );
}
 
export default AboutServices;