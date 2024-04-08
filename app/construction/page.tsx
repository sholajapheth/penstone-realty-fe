import { Partners, GetIntouch, NewsLetter } from "@/components/common";
import { ConstructionBannerPage, Craftmanship, ConstProjects, ConstGallery } from "@/components/construction";

const page = () => {
    return (
      <>
        <ConstructionBannerPage />
        <Craftmanship />
        <ConstProjects />
        <ConstGallery />
        <Partners />
        <GetIntouch />
        <NewsLetter />
      </>
    );
}
 
export default page;