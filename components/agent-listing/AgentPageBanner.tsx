import React from "react";
import { IoChevronForward } from "react-icons/io5";
import Image from "next/image";

const AgentPageBanner = () => {
  return (
    <div className="text-secondary">
      <div className="px-[1em] md:px-[5em]">
        <div>
          <Image src="/img/icons/arrow-right.svg" width={20} height={20} alt="" />
          <p className="font-semibold text-[25px] md:text-[40px] text-secondary">
            Back to Agent
          </p>
        </div>
        <Image
          src="/img/agent_1.png"
          alt="agent-img"
          height={200}
          width={200}
          className="group-hover:scale-110 pri-anim"
        />
      </div>
    </div>
  );
};

export default AgentPageBanner;
