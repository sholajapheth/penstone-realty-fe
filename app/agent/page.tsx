import { Dashboard, ChartAnalysis } from "@/components/agent_component/dashboard";
import { LoginPage } from "@/components/agent_component/login";

export default function Agent() {
  return (
    <>
      <main>
        {/* dashboard */}
        <Dashboard />
        <ChartAnalysis />
        
        {/* login */}
        {/* <LoginPage /> */}
      </main>
    </>
  );
}
