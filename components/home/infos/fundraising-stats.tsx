import { Zap, Clock, Users } from "lucide-react"

export default function FundraisingStats() {
  return (
    <div className="w-full bg-black">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
          Plus de 50 millions de dollars sont collectés chaque semaine.*
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground text-white">
          Commencez en quelques minutes - grâce à de nouveaux outils utiles, il est plus facile que jamais de choisir le titre parfait,
          d&apos;écrire une histoire captivante et de la partager avec le monde entier.
          </p>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="w-full bg-[#FFF8D6]">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-center gap-3">
              <Zap className="h-6 w-6" />
              <span className="text-sm font-medium sm:text-base">Pas de frais supplementaire</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-6 w-6" />
              <span className="text-sm font-medium sm:text-base">1 don effectué chaque minute</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="h-6 w-6" />
              <span className="text-sm font-medium sm:text-base">Plus de 5k collectes de fonds collecté chaque jour</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

