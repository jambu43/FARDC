"use client";
import Link from "next/link";
import { articles } from "../hero/data";
import Card from "./card";
export default function Article() {
  return (
    <section className=" bg-[#f3f9f3] py-12 md:py-32 px-4 ">
      <div className="container">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold md:mb-12">Actualités</h2>
          <Link href="/actualites" className="inline-flex items-center px-4 py-2 hover:text-black transition-colors text-sm text-primary">
            Voir plus
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {articles.slice(0, 2).map((article, index) => (
            <Card
              title={article.title}
              description={article.description}
              image={article.image}
              slug={article.link}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
