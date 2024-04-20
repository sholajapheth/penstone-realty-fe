import AgentHeader from "@/components/agent_component/components/AgentHeader";
import {  ChartAnalysis, ActivitySection } from "@/components/agent_component/dashboard";
import { LoginPage } from "@/components/agent_component/login";

export default function Agent() {
  return (
    <>
      <main>
        {/* dashboard */}
        <AgentHeader title="Dashboard" />
        <ChartAnalysis />
        <ActivitySection />

        {/* login */}
        {/* <LoginPage /> */}
      </main>
    </>
  );
}
