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
import { ApplicationForm, TopDetail } from "@/components/apply";
import {
  ArchitecturePageBanner,
  Gallery,
  Packages,
  Projects,
} from "@/components/architectural-services";
import { BlogTop } from "@/components/blog";
import { NewsLetter, Partners, GetIntouch } from "@/components/common";
import { ConstGallery, ConstProjects, ConstructionBannerPage, Craftmanship } from "@/components/construction";
import { ContactPageBanner, FreqAskedQues } from "@/components/contact-us";
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
import { Form } from "@/components/request";
import { ConcludedListings } from "@/components/sell";
import { SellPropertyForm } from "@/components/sell-property";
import LeadingWebsites from "@/components/sell/LeadingWebsites";
import SellBannerPage from "@/components/sell/SellBannerPage";
import SellOffers from "@/components/sell/SellOffers";
import { SpecializedPageBanner, SpecializedServices } from "@/components/specialized-services";

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
      {/* <ArchitecturePageBanner />
      <Packages />
      <Projects />
      <Gallery />
      <Partners />
      <GetIntouch />
      <NewsLetter /> */}

      {/* sell */}
      {/* <SellBannerPage />
      <SellOffers />
      <LeadingWebsites />
      <ConcludedListings />
      <Partners />
      <GetIntouch />
      <NewsLetter /> */}

      {/* construction */}
      {/* <ConstructionBannerPage />
      <Craftmanship />
      <ConstProjects />
      <ConstGallery />
      <Partners />
      <GetIntouch />
      <NewsLetter /> */}

      {/* specialized service */}
      {/* <SpecializedPageBanner />
      <SpecializedServices />
      <Partners />
      <GetIntouch />
      <NewsLetter /> */}

      {/* request form */}
      {/* <Form />
      <NewsLetter /> */}

      {/* sell property form */}
      {/* <SellPropertyForm />
      <NewsLetter /> */}

      {/* apply */}
      {/* <TopDetail />
      <ApplicationForm />
      <NewsLetter /> */}
    </main>
  );
}
