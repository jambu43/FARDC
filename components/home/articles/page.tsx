"use client";
import { articles } from "../hero/data";
import Card from "./card";
export default function Article() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold md:mb-12">
                    Actualités
                </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {articles.map((article, index) => (
          <Card
            title={article.title}
            description={article.description}
            image={article.image}
            slug={article.link}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
