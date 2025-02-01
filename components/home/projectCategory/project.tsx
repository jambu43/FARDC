import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "./projectCard"

const projects = [
  {
    image:
      "/projet1.png.jpg",
    title: "Sorociné, la revue cinéma féministe",
    creator: "Sorociné",
    stats: {
      contributions: 512,
      endDate: "02/25/22",
      raised: 16277,
      goal: 15000,
      percentage: 90,
    },
  },
  {
    image: "/projet2.jpg.jpg",
    title: "BLOODSTAR, le chef-d'œuvre de fantasy de Richard CORBEN d'après Robert E. HOWARD",
    creator: "Editions DELIRIUM",
    stats: {
      contributions: 861,
      endDate: "10/14/22",
      raised: 83881,
      goal: 8000,
      percentage: 49,
    },
  },
  {
    image: "/projet3.jpg.jpg",
    title: "Blast",
    creator: "blast",
    stats: {
      contributions: 9944,
      endDate: "03/22/21",
      raised: 903031,
      goal: 100000,
      percentage: 3,
    },
  },
]

export function Project() {
  return (
    <section className="bg-zinc-950">
      <div className="container max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Défendons la culture indépendante</h2>
            <p className="text-zinc-400 text-sm">Pour un monde juste où chacun et chacune peut libérer sa créativité.</p>
          </div>

          <Link href="/projects" className="flex items-center gap-2 text-white hover:text-zinc-200 transition-colors text-sm">
            Voir plus de projets engagés
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

