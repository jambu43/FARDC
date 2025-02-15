import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Manifesto() {
  return (
    <div className="w-full bg-white px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Main Heading */}
        <h1 className="mb-16 text-center text-3xl font-bold sm:text-4xl md:text-5xl">Manifesto 100%FARDC</h1>

        {/* Section 1 */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="text-8xl font-bold text-primary md:text-9xl">1</div>
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Nous sommes une organisation engagée</h2>
            <div className="space-y-4">
              <p className="text-sm">
                100%FARDC est une organisation. Ce label est accordé par un organisme international indépendant, sur la
                base de critères exigeants, un impact positif sur la société et l'environnement.
              </p>
              <p className="text-sm">
                100%FARDC a fait partie des toutes premières organisation de recolte de fond pour l'armée Congolaise. Au
                quotidien, nous nous engageons auprès de la population qui se lancent au soutient de notre armée.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row-reverse md:gap-12">
          <div className="text-8xl font-bold text-primary md:text-9xl">2</div>
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Nous sommes au service de recolte de fond</h2>
            <div className="space-y-4">
              <p className="text-sm">
                Nous croyons avant tout en l'action. Le sens de notre mission est précisément de faciliter le passage à
                l'action de celles et ceux qui portent et soutient l'armée comme de celles et ceux qui veulent la
                soutenir.
              </p >
              <p className="text-sm">
                Pour cela, nous cultivons le test & learn permanent, toujours à la recherche de solutions concrètes,
                innovantes, efficaces et...
              </p>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="relative mt-12 mb-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image
              src="/fardc.png"
              alt="Personne parlant dans un microphone avec un logo jaune"
              fill
              className="object-cover"
            />
          </div>
        </div>

         {/* Section 1 */}
         <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="text-8xl font-bold text-primary md:text-9xl">3</div>
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Nous croyons en la force du collectif</h2>
            <div className="space-y-4">
              <p className="text-sm">
              Changer le monde ? Lutter contre le pessimisme ambiant ? On peut le faire. Ensemble. À tous les niveaux de la société, chacun a un rôle à jouer et c’est ensemble que nous ferons émerger notre armée.
              </p>
              <p className="text-sm">
              La force de la communauté 100%FARDC, c’est de démultiplier. En s’appuyant sur un moteur qui nous tient à cœur : la bienveillance.
              </p>
            </div>
          </div>
        </div>

      </div>

     
    </div>
  )
}

