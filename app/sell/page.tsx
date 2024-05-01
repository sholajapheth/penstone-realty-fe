import { Partners, GetIntouch, NewsLetter } from "@/components/common";
import {
  SellBannerPage,
  SellOffers,
  LeadingWebsites,
  ConcludedListings,
} from "@/components/sell";

const page = () => {
  return (
    <>
      <SellBannerPage />
      <SellOffers />
      <LeadingWebsites />
      <ConcludedListings />
      <Partners />
      <GetIntouch />
      <NewsLetter />
    </>
  );
};

export default page;
