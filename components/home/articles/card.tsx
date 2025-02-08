import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";

type ItemProps = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

function Card({ title, description, image, slug }: ItemProps) {
  return (
    <article className="group">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
        <Image
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          fill
        />
        <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
          Soutien
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 text-sm md:text-base">
        {description}
      </p>

      <button className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors">
        Lire la suite
        <svg
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14m-7-7l7 7-7 7" />
        </svg>
      </button>
    </article>
  );
}

export default Card;
