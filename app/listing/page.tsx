"use client"

import { Suspense } from 'react'
import {
  AgentPageBanner,
  AgentPortfolio,
  FindPage,
} from "@/components/agent-listing";
import { NewsLetter } from "@/components/common";
import {useAPI} from "@/app/lib/useApi";
import {useSearchParams} from "next/navigation";
import {getAgent} from "@/app/api/UseUser";

const PageComp = () => {
    const {useQuery} = useAPI();
    const params = useSearchParams();
    const agentEmail = params.get("agentEmail")?.replace("%40", "@")

    const {data: agent} = useQuery({
        queryKey: ["agents", agentEmail],
        queryFn: () => getAgent(agentEmail!),
        enabled: !!agentEmail
    });

  return (
    <>
      <AgentPageBanner data={agent?.agent} />
      <AgentPortfolio data={agent?.agent?.properties} />
      <FindPage />
      <NewsLetter />
    </>
  );
};

export default function Page() {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense  >
            <PageComp />
        </Suspense>
    )
}
