import { Category } from "@/components/home/category";
import Hero from "@/components/home/hero";
import { Header } from "@/components/home/projectCategory/header";
import { Project } from "@/components/home/projectCategory/project";
import CampagnesSection from "@/components/home/campagnes";

export default function Home() {
  return (
    <>
      <Hero />
      <CampagnesSection />
      <Category />
      <Header />
      <Project />
    </>
  );
}
