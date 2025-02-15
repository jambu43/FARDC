import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MissionContent() {
  return (
    <div className="min-h-screen w-full bg-white px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Mission Text */}
        <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl md:text-4xl">Notre mission</h2>
        <div className="space-y-8 text-base leading-relaxed text-black sm:text-md">
          <p className="text-sm">
            Créateurs, citoyens, associations, entreprises, nous sommes de plus en plus nombreux à vouloir agir pour un
            monde meilleur : un monde plus divers, plus durable, plus ouvert.
          </p>
          <p className="mb-12 text-sm">
            Mais comment passer de l'idée à l'action ? Ulule aide les créateurs et créatrices à faire ce grand saut et
            surtout à le... réussir ! Au-delà du financement, Ulule accompagne les créateurs en les aidant à concrétiser
            leurs idées, à co-créer avec leurs communautés, à faire parler de leurs projets et à les faire grandir.
            Pionnier du crowdfunding depuis 2010, Ulule est devenu le premier incubateur participatif de projets à
            impact positif. Notre communauté de près de 3 millions de membres a permis à près de 30 000 projets de voir
            le jour.
          </p>
        </div>

        {/* Featured Image Section */}
        <div className="relative mt-8 w-full">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/fardc.png"
              alt="Créateur parlant dans un microphone"
              fill
              className="object-cover"
            />

          </div>
        </div>
      </div>

      {/* Help Button */}
      <Button
        variant="default"
        className="fixed bottom-4 right-4 flex items-center gap-2 rounded-full bg-black px-6 py-2 text-white hover:bg-black/90"
      >
        <HelpCircle className="h-5 w-5" />
        <span>Aide</span>
      </Button>
    </div>
  )
}

