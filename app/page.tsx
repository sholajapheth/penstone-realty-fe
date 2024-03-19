import { NewsLetter } from "@/components/common";
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
      <TopDetails />
      <PropertyDetails />
    </main>
  );
}
