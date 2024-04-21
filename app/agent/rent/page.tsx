import AgentHeader from "@/components/agent_component/components/AgentHeader";
import { Activities, Stats, TopSection } from "@/components/agent_component/rent";

const page = () => {
    return (
      <>
        <main>
          <AgentHeader title="Payment" />
          <TopSection />
          <Stats />
          <Activities />
        </main>
      </>
    );
}
 
export default page;