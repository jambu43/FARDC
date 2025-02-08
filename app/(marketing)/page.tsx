import { Category } from "@/components/home/category";
import Hero from "@/components/home/hero";
import Campaign from "@/components/home/campagnes/campaign";
import { Newsletter } from "@/components/newsletter";
import Article from "@/components/home/articles/page";
import InfoSection from "@/components/home/infos/info-section";


export default function Home() {
  return (
    <>
      <Hero />
      <Campaign />
      <Article />
      <Category />
      <InfoSection />
      {/* <ProjectByCategory /> */}
      {/* <StatsSection /> */}
      <Newsletter />s
    </>
  );
}
