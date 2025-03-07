import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MissionContent() {
  return (
    <div className="min-h-screen w-full bg-white px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Mission Text */}
        <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
          À Propos
        </h2>
        <div className="space-y-8 text-base leading-relaxed text-black sm:text-md">
          <p className="mb-12 text-sm">
            Bienvenue sur le site officiel de la campagne 100% FARDC Tokolonga.
            Cette initiative a été créée pour soutenir les Forces Armées de la
            République Démocratique du Congo (FARDC) et renforcer l'effort de
            guerre face aux menaces qui pèsent sur notre pays. Dans un contexte
            de conflit armé, notre objectif est de mobiliser la population, de
            sensibiliser la communauté internationale et de lever des fonds pour
            les familles de nos héros et les déplacés de guerre. Nous croyons
            fermement que chaque action compte et que, unis, nous pouvons faire
            la différence.
          </p>
        </div>

        {/* Featured Image Section */}
        <div className="relative mt-8 w-full">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/coverfull.jpeg"
              alt="Créateur parlant dans un microphone"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-8 mt-8">
          <p>
            La campagne 100% FARDC Tokolonga est un appel à la solidarité
            nationale et internationale.
          </p>
          <div className="flex gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Elle vise à :</h3>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-sm font-medium">1</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Mobiliser les Congolais autour des FARDC pour créer un sentiment
                d’appartenance et de soutien.
              </h3>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-sm font-medium">2</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Lever des fonds pour assister les familles de nos soldats qui se
                battent au front.
              </h3>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-sm font-medium">3</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Soutenir les déplacés des guerres à l'Est de la RDC, qui ont
                perdu leurs maisons et leurs moyens de subsistance.
              </h3>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-sm font-medium">4</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Promouvoir des actions concrètes et valoriser les succès des
                FARDC pour maintenir le moral des troupes et de la population.
              </h3>
            </div>
          </div>
          <p>
            Nous lançons deux grandes opérations de levée de fonds, chacune ayant un impact direct sur la vie de ceux qui souffrent du conflit.
          </p>
        </div>
      </div>

    </div>
  );
}
