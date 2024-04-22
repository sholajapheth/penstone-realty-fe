import AgentHeader from "@/components/agent_component/components/AgentHeader";
import { Properties } from "@/components/agent_component/propertyList";

const page = () => {
    return ( <>
    <main>
        <AgentHeader title="Property List" />
        <Properties />
    </main>
    </> );
}
 
export default page;