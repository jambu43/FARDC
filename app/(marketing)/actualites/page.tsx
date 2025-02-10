"use client";
import Card from "@/components/home/articles/card";
import { articles } from "@/components/home/hero/data";

function Articles() {
  return (
    <div className="container section">
      <h1 className="text-center text-2xl md:text-3xl text-primary mb-8 font-bold">
        Découvrez les actualités 100%FARDC
      </h1>
      <p className="mb-8 text-center">
        Inspirez-vous des histoires qui font la différence — Explorez nos
        campagnes et rejoignez le mouvement !
      </p>

      <div className="py-12 md:py-32 px-4">
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
      </div>
    </div>
  );
}

export default Articles;
