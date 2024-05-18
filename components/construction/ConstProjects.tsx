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

            <div className="mt-[4em] w-full flex items-start gap-10 justify-center flex-wrap">
              <ProjectCard
                imgSrc="/img/fea1.png"
                para="Our expert team ensures your building project is handled meticulously from start to finish, guaranteeing quality, safety, and satisfaction."
                heading="Comprehensive Solution"
              />
              <ProjectCard
                imgSrc="/img/fea2.png"
                para="Trust in our skilled professionals to bring your vision to life with precision, expertise, and attention to detail."
                heading="Construction Management"
              />
              <ProjectCard
                imgSrc="/img/fea3.png"
                para="We prioritize efficient project management to deliver your construction project on time, within budget, and to your specifications."
                heading="Timely Delivery"
              />
              <ProjectCard
                imgSrc="/img/fea4.png"
                para="Utilizing the finest materials, we ensure durability, longevity, and functionality in every aspect of your construction project."
                heading="Quality Material"
              />
              <ProjectCard
                imgSrc="/img/fea5.png"
                para="With a focus on safety protocols and standards, we prioritize the well-being of our team and clients throughout the construction process."
                heading="Safety Assurance"
              />
              <ProjectCard
                imgSrc="/img/fea6.png"
                para="With meticulous financial oversight, we handle all financial aspects of your building project, maximizing profitability and minimizing expenses."
                heading="Financial Management"
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

export default ConstProjects;
