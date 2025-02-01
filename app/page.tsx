import { Category } from "@/components/home/category";
import Hero from "@/components/home/hero";
import CampagnesSection from "@/components/home/campagnes";
import ProjectByCategory from "@/components/home/projectCategory/projectByCategory";

export default function Home() {
  return (
    <>
      <Hero />
      <CampagnesSection />
      <Category />
      <ProjectByCategory />
    </>
  );
}
