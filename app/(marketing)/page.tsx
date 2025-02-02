import { Category } from "@/components/home/category";
import Hero from "@/components/home/hero";
import CampagnesSection from "@/components/home/campagnes";
import ProjectByCategory from "@/components/home/projectCategory/projectByCategory";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <CampagnesSection />
      <Category />
      <ProjectByCategory />
      <Newsletter />
    </>
  );
}
