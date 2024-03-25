import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const TakeFirstStep = () => {
  return (
    <div className="bg-[#E8F9F733] p-[1em] md:p-[6em] ">
      <p className="font-semibold text-[25px] md:text-[40px] text-secondary">
        Take the first step
      </p>

      <div className="mt-[4em] text-secondary grid grid-cols-1 md:grid-cols-3 gap-[5em]">
        <div className="col-span-2">
          <div className="grid grid-cols-2 border-b py-[2em]">
            <div>
              <p className="text-primary text-[18px] font-semibold">
                Consultancy
              </p>
              <p className="text-secondary  text-[28px] font-semibold">
                Architectural Design
              </p>
            </div>

            <div>
              <p className="font-semibold">
                We specialize in creating unique architectural designs that
                cater to your specific requirements and aspirations.
              </p>
              <p className="text-primary flex gap-4 items-center font-semibold mt-3">
                Make Enquiry <BsArrowRight />
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b py-[2em]">
            <div>
              <p className="text-primary text-[18px] font-semibold">
                Construction
              </p>
              <p className="text-secondary  text-[28px] font-semibold">
                Design, Renovation & Remodelling
              </p>
            </div>

            <div>
              <p className="font-semibold">
                We provide exceptional design, renovation, and remodelling
                services for homes and offices, which increase property yield.
              </p>
              <p className="text-primary flex gap-4 items-center font-semibold mt-3">
                Make Enquiry <BsArrowRight />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-b py-[2em]">
            <div>
              <p className="text-primary text-[18px] font-semibold">
                Managament
              </p>
              <p className="text-secondary  text-[28px] font-semibold">
                Apartment Space Management
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Maximize the full potential of your property and apartment
                spaces with our transparent and efficient management services to
                maximize functionality and tenant satisfaction.
              </p>
              <p className="text-primary flex gap-4 items-center font-semibold mt-3">
                Make Enquiry <BsArrowRight />
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:inline-block">
          <Image
            src={"/img/firststep.png"}
            height={200}
            width={100}
            alt="firststep"
            className="w-full aspect-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TakeFirstStep;
