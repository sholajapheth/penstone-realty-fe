"use client";

import ProjectCard from "./ProjectCard";
import { useRouter } from "next/navigation";

const ConstProjects = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="w-[90%] lg:w-[85%]">
        <div className="bg-white flex  justify-center pt-[3em] lg:pt-[4em] pb-[2em] ">
          <div className="w-full">
            <div className="flex items-start justify-between  ">
              <p className="text-[#212226] font-semibold text-[40px] ">
                Project Features
              </p>
            </div>

            <div className="mt-[4em] w-full flex items-center gap-10 justify-center flex-wrap">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>

            <div className="flex justify-center items-center pt-[50px]">
              <button
                className="bg-primary px-8  font-semibold py-3 rounded-xl text-white mt-8"
                onClick={() => router.push("/request_form")}
              >
                Click to get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstProjects;
