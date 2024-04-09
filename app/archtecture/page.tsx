import { ArchitecturePageBanner, Packages, Projects, Gallery } from "@/components/architectural-services";
import { Partners, GetIntouch, NewsLetter } from "@/components/common";

const page = () => {
    return (
      <>
        <ArchitecturePageBanner />
        <Packages />
        <Projects />
        <Gallery />
        <Partners />
        <GetIntouch />
        <NewsLetter />
      </>
    );
}
 
export default page;