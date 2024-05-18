"use client";

import ProjectCard from "./ProjectCard";
import { useRouter } from "next/navigation";

const AgentPortfolio = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="w-[90%] lg:w-[85%]">
        <div className="bg-white flex  justify-center pt-[3em] lg:pt-[4em] pb-[2em] ">
          <div className="w-full">
            <div className="flex items-start justify-between">
              <p className="text-[#212226] font-semibold text-[40px] ">
                Project Features
              </p>
            </div>

            <div className="mt-[4em] flex items-center gap-10 justify-center flex-wrap ">
              <ProjectCard
                imgSrc="/img/archh1.png"
                heading="Quick Turnaround Time"
                para="From concept to completion, we craft with care, focusing on the fine details. Our efficient process ensures your project materializes quickly, avoiding any unnecessary delays."
              />
              <ProjectCard
                imgSrc="/img/archh2.png"
                heading="Compliance Assurance"
                para="Our experts ensures that every aspect of your design follows all necessary regulations and permissions, minimizing delays and ensuring a smooth development process. "
              />
              <ProjectCard
                imgSrc="/img/archh3.png"
                heading="Personalized Attention"
                para="From our first interaction to the final design, we strive to understand your unique requirements and preferences, ensuring that your vision is brought to life with excellence."
              />
              <ProjectCard
                imgSrc="/img/archh4.png"
                heading="Professional Visualizations"
                para="We partner with you to bring your dreams into reality, providing visual representations of how your property will look upon completion using mockups and interactive 3D designs."
              />
              <ProjectCard
                imgSrc="/img/archh5.png"
                heading="Value Maximization"
                para="Unlock the full potential of your property and get the most out of your investment through innovative space utilization, aesthetic enhancements, or sustainable features."
              />
              <ProjectCard
                imgSrc="/img/archh6.png"
                heading="Comprehensive Design"
                para="Using advanced tools like CAD and BIM, we craft comprehensive plans, considering materials, spatial flow, and sustainability for both interior layouts and exterior aesthetics."
              />
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

export default AgentPortfolio;
