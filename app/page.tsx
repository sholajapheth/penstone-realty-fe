import {
  AboutMission,
  AboutPageBanner,
  AboutServices,
} from "@/components/about";
import {
  AgentPageBanner,
  AgentPortfolio,
  FindPage,
} from "@/components/agent-listing";
import { ArchitecturePageBanner, Gallery, Packages, Partners, Projects } from "@/components/architectural-services";
import { BlogTop } from "@/components/blog";
import { NewsLetter, GetIntouch
 } from "@/components/common";
import {
  ContactPageBanner,
  FreqAskedQues,
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
      {/* <AgentPageBanner />
      <AgentPortfolio/>
      <FindPage />
      <NewsLetter />  */}

      {/* about */}
      {/* <AboutPageBanner />
      <AboutServices />
      <AboutMission />
      <NewsLetter /> */}

      {/* architectural service */}
      <ArchitecturePageBanner />
      <Packages />
      <Projects />
      <Gallery />
      <Partners />
      <GetIntouch />
    </main>
  );
}
