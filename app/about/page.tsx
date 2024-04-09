import { AboutPageBanner, AboutServices, AboutMission } from "@/components/about";
import { NewsLetter } from "@/components/common";

const page = () => {
    return (
      <>
        <AboutPageBanner />
        <AboutServices />
        <AboutMission />
        <NewsLetter />
      </>
    );
}
 
export default page;