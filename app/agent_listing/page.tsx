import { AgentPageBanner, AgentPortfolio, FindPage } from "@/components/agent-listing";
import { NewsLetter } from "@/components/common";

const page = () => {
    return (
      <>
        <AgentPageBanner />
        <AgentPortfolio />
        <FindPage />
        <NewsLetter />
      </>
    );
}
 
export default page;