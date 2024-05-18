import AgentCard from "./AgentCard";

const AboutServices = () => {
    return (
      <>
        <div className="flex  justify-center pt-[3em] lg:pt-[5em] px-[1em] bg-white">
          <div className=" w-[90%] lg:w-[85%]">
            <div className=" flex flex-wrap items-center gap-10 justify-center">
              <AgentCard
                imgSrc="/img/icons/svgg.svg"
                heading="Verified listing"
                para="Find your perfect property hassle-free with our vetted listings. Every seller we represent is reputable, ensuring you can trust the details and make informed decisions confidently."
                service="Property"
                link="/search"
              />
              <AgentCard
                imgSrc="/img/aboutt1.png"
                heading="Transparent service"
                para="Enjoy open communication, clear processes, and honest assistance throughout your real estate journey. You will know exactly what to expect, no surprises."
                service="Service"
                link="/specialized_service"
              />
              <AgentCard
                imgSrc="/img/aboutt2.png"
                heading="Expert guidance"
                para="Let our experienced experts lead the way, providing you with personalized assistance tailored to your specific requirements, helping you effortlessly achieve your property goals."
                service="Agent"
                link="/contact"
              />
            </div>
          </div>
        </div>
      </>
    );
}
 
export default AboutServices;