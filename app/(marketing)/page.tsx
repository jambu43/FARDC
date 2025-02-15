import { Category } from "@/components/home/category";
import Hero from "@/components/home/hero";
import Campaign from "@/components/home/campagnes/campaign";
import { Newsletter } from "@/components/newsletter";
import Article from "@/components/home/articles/page";
import InfoSection from "@/components/home/infos/info-section";
import HowItWorks from "@/components/home/video/how-it-works";
import FundraisingSteps from "@/components/home/infos/fundraising-steps";
import FundraisingStats from "@/components/home/infos/fundraising-stats";


export default function Home() {
  return (
    <>
      <Hero />
      <FundraisingSteps />
      <Campaign />
      <Article />
      <Category />
      <FundraisingStats />
      <InfoSection />
      <HowItWorks />
      {/* <ProjectByCategory /> */}
      {/* <StatsSection /> */}
      {/* <Newsletter /> */}
    </>
  );
}
