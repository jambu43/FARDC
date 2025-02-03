import { Category } from "@/components/home/category";
import Hero from "@/components/home/hero";
import Campaign from "@/components/home/campagnes/campaign";
import ProjectByCategory from "@/components/home/projectCategory/projectByCategory";
import { Newsletter } from "@/components/newsletter";


export default function Home() {
  return (
    <>
      <Hero />
      <Campaign />
      <Category />
      <ProjectByCategory />
      <Newsletter />
    </>
  );
}
