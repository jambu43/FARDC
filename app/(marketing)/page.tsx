import { Category } from "@/components/home/category";
import Hero from "@/components/home/hero";
import Campaign from "@/components/home/campagnes/campaign";
import ProjectByCategory from "@/components/home/projectCategory/projectByCategory";
import { Newsletter } from "@/components/newsletter";
import { StatsSection } from "@/components/home/stats/stats-section";
import Article from "@/components/home/articles/page";


export default function Home() {
  return (
    <>
      <Hero />
      <Campaign />
      <Article />
      <Category />
      <ProjectByCategory />
      <StatsSection />
      <Newsletter />s
    </>
  );
}
