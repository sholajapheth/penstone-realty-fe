import { NewsLetter } from "@/components/common";
import {
  ServicesPageBanner,
  FrequentlyPicked,
  TakeFirstStep,
  HelpFullArticles,
} from "@/components/find-services";

const page = () => {
  return (
    <>
      <ServicesPageBanner />
      <FrequentlyPicked />
      <TakeFirstStep />
      <HelpFullArticles />
      <NewsLetter />
    </>
  );
};

export default page;
