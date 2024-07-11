import { PaginationNav } from "../common";
import ServiceCard from "./ServiceCard";

const SpecializedServices = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[85%] max-w-[1200px]">
          <div className="bg-white flex  justify-center pt-[3em] lg:pt-[5em] pb-[2em] ">
            <div className="w-full">
              <div className="flex items-start justify-between  ">
                <p className="text-[#212226] font-semibold text-[40px] ">
                  Select a Service{" "}
                </p>
              </div>

              <div className="my-[3em] flex items-start gap-5 justify-between flex-wrap ">
                <ServiceCard
                  imgSrc="/img/service1.png"
                  heading="Tenant Verification"
                  para="Trust our meticulous screening to secure reliable tenants, ensuring long-term occupancy with trustworthy individuals and minimizing risks for your property investment."
                />
                <ServiceCard
                  imgSrc="/img/service2.png"
                  heading="Manage my Property"
                  para="Let us handle property hassles, from rent collection to maintenance coordination, ensuring smooth operations and maximizing your investment's potential"
                />
                <ServiceCard
                  imgSrc="/img/service3.png"
                  heading="Deal Sourcing "
                  para="Count on us to find lucrative property deals, leveraging our expertise and network to maximize returns aligned with your investment goals."
                />
                <ServiceCard
                  imgSrc="/img/service4.png"
                  heading="Property Management"
                  para="Let us handle the complexities, ensuring seamless operations and maximizing returns on your property investment effortlessly."
                />
                <ServiceCard
                  imgSrc="/img/service5.png"
                  heading="Smart Home Integration"
                  para="Elevate your property with cutting-edge smart home technologies, enhancing convenience, security, and energy efficiency for modern living."
                />
                <ServiceCard
                  imgSrc="/img/service6.png"
                  heading="Apartment Management"
                  para="Trust us to efficiently manage your space, handling tenant relations, maintenance, and financial management with professionalism."
                />
                <ServiceCard
                  imgSrc="/img/service7.png"
                  heading="Interior Remodelling"
                  para="Elevate your property's appeal with expert remodeling tailored to your preferences and budget, enhancing value and modernizing spaces effortlessly."
                />
                <ServiceCard
                  imgSrc="/img/service8.png"
                  heading="Property Valuation"
                  para="Get precise property valuations based on market trends and condition assessments, empowering informed decisions and strategic planning for your investments."
                />
                <ServiceCard
                  imgSrc="/img/service9.png"
                  heading="Contract Documentation"
                  para="Ensure legal compliance with clear, comprehensive contract documentation, safeguarding your interests and minimizing risks in property transactions."
                />
              </div>
              <PaginationNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecializedServices;
