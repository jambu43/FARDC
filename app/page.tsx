import { Category } from "@/components/home/category";
import Hero from "@/components/home/hero";
import { Header } from "@/components/home/projectCategory/header";
import { Project } from "@/components/home/projectCategory/project";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <Header />
      <Project />
    </>
  );
}
