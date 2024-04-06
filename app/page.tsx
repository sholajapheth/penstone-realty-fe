import { AgentPageBanner } from "@/components/agent-listing";
import { BlogTop } from "@/components/blog";
import { NewsLetter } from "@/components/common";
import {
  ContactPageBanner,
  FreqAskedQues,
  GetIntouch,
} from "@/components/contact-us";
import OurAgents from "@/components/contact-us/OurAgents";
import {
  FrequentlyPicked,
  HelpFullArticles,
  ServicesPageBanner,
  TakeFirstStep,
} from "@/components/find-services";
import {
  HotListings,
  Landing,
  Offers,
  Services,
  Showcase,
} from "@/components/home";
import { HeroSection, Search } from "@/components/properties";
import PropertyDetails from "@/components/properties/PropertyDetails";
import TopDetails from "@/components/properties/TopDetails";

export default function Home() {
  return (
    <main>
      {/* home */}
      {/* <Landing />
      <Showcase />
      <HotListings />
      <Services />
      <Offers />
      <NewsLetter /> */}

      {/* search */}
      {/* <Search />
      <HeroSection />
      <NewsLetter /> */}

      {/* property details */}
      {/* <TopDetails />
      <PropertyDetails /> */}

      {/* blog */}
      {/* <BlogTop /> */}

      {/* find services */}
      {/* <ServicesPageBanner />
      <FrequentlyPicked />
      <TakeFirstStep />
      <HelpFullArticles />
      <NewsLetter /> */}

      {/* contact us  */}
      {/* <ContactPageBanner />
      <OurAgents />
      <FreqAskedQues />
      <GetIntouch />
      <NewsLetter /> */}

      {/* agent listing */}
      <AgentPageBanner />
    </main>
  );
}
