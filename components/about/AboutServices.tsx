import AgentCard from "./AgentCard";

const AboutServices = () => {
    return (
      <>
        <div className="flex  justify-center pt-[3em] lg:pt-[5em] px-[1em] bg-white">
          <div className=" w-[90%] lg:w-[85%]">
            <div className=" flex flex-wrap items-center gap-10 justify-center">
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