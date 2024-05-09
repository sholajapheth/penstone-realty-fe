import { Partners, GetIntouch, NewsLetter } from "@/components/common";
import {
  SpecializedPageBanner,
  SpecializedServices,
} from "@/components/specialized-services";

const page = () => {
  return (
    <>
      <SpecializedPageBanner />
      <SpecializedServices />
      <Partners />
      <GetIntouch />
      <NewsLetter />
    </>
  );
};

export default page;
