"use client";

import { articles } from "../data";
import Item from "./item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Sliders() {
  return (
    <Carousel className="">
      <CarouselContent>
        {articles.map((article, index) => (
          <CarouselItem key={index} className="mt-20">
            <Item
              title={article.title}
              description={article.description}
              image={article.image}
              slug={article.link}
            />
          </CarouselItem>
        ))}
      <CarouselPrevious />
      <CarouselNext />
      </CarouselContent>
    </Carousel>
  );
}

export default Sliders;
