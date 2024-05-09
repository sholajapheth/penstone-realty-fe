import { GetIntouch, NewsLetter } from "@/components/common";
import { ContactPageBanner, FreqAskedQues } from "@/components/contact-us";
import OurAgents from "@/components/contact-us/OurAgents";

const page = () => {
  return (
    <>
      <ContactPageBanner />
      <OurAgents />
      <FreqAskedQues />
      <GetIntouch />
      <NewsLetter />
    </>
  );
};

export default page;
