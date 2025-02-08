"use client";
// import { Container, Section } from "lucide-react"
import Sliders from "./sliders";

function Hero() {
  return (
    <div className={"relative min-h-[500px] md:min-h-[700px] bg-blue"}>
      <div className="container">
        <Sliders />
      </div>
    </div>
  );
}

export default Hero;
