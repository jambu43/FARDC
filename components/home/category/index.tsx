"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


interface Category {
  id: string
  name: string
}

interface Channel {
  id: string
  title: string
  selectedBy: string
  image: string
  link: string
}

const categories: Category[] = [
  { id: "education", name: "Enfance & Éduc." },
  { id: "heritage", name: "Patrimoine" },
  { id: "health", name: "Santé & Bien-être" },
  { id: "cuisine", name: "Artisanat & Cuisine" },
  { id: "tech", name: "Technologie" },
  { id: "solidarity", name: "Solidaire & Citoyen" },
  { id: "media", name: "Édition & Média" },
]

const channels: Channel[] = [
  {
    id: "engie",
    title: "Soutenir les FARDC",
    selectedBy: "Soutien",
    image:
      "/soutenir.jpeg",
    link: "#",
  },
  {
    id: "environment",
    title: "Soutenir les Familles des FARDC",
    selectedBy: "Sélectionné par Pamoja ",
    image: "/famille.jpeg",
    link: "#",
  },
  {
    id: "sport",
    title: "Soutenir les Déplacés de la FARDC",
    selectedBy: "Sélectionné par Pamoja ",
    image: "/deplaces.jpeg",
    link: "#",
  },
]

export function Category() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Categories Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Parcourir par catégorie</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              href={`/category/${category.id}`}
              key={category.id}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
              className={`
                px-4 py-2 rounded-full border border-gray-200 
                transition-colors duration-200 hover:bg-gray-50
                flex items-center gap-2
                ${selectedCategory === category.id ? "bg-gray-100 border-gray-300" : "bg-white"}
              `}
            >
              <span className="w-2 h-2 rounded-full bg-gray-400" />
              <span className="text-sm">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        {/* <h2 className="text-2xl font-bold mb-6">Chaînes thématiques</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel) => (
            <Link
              key={channel.id}
              href={channel.link}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={channel.image || "/placeholder.svg"}
                alt={channel.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white text-xl font-bold mb-2">{channel.title}</h3>
                <p className="text-white/90 text-sm">{channel.selectedBy}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/chaines"
            className="bg-primary text-white px-6 py-3 rounded-lg transition-colors duration-200 text-sm font-medium uppercase"
          >
            Voir toutes les categories
          </Link>
        </div>
      </div>
    </section>
  )
}

