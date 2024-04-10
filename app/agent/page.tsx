import { Dashboard, ChartAnalysis, ActivitySection } from "@/components/agent_component/dashboard";
import { LoginPage } from "@/components/agent_component/login";

export default function Agent() {
  return (
    <>
      <main>
        {/* dashboard */}
        <Dashboard />
        <ChartAnalysis />
        <ActivitySection />
        
        {/* login */}
        {/* <LoginPage /> */}
      </main>
    </>
  );
}
