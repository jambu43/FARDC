import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Manifesto() {
  return (
    <div className="w-full bg-white px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Main Heading */}
        <h1 className="mb-16 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
          Opérations de Levée de Fonds
        </h1>

        {/* Section 1 */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="text-8xl font-bold text-primary md:text-9xl">1</div>
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
              Opération "1$ pour 1 Million
            </h2>
            <div className="space-y-4">
              <p className="text-md">
                Cette opération vise à collecter 1 million de dollars pour
                apporter un soutien direct aux familles de nos héros, les
                soldats des FARDC. Chaque dollar compte et contribue à alléger
                les souffrances des familles qui ont perdu leurs proches ou qui
                vivent dans l'incertitude. Grâce à votre générosité, nous
                pouvons offrir :
              </p>
              <p className="text-md">
                Assistance financière pour les dépenses quotidiennes. Accès à
                des soins médicaux pour les familles touchées par le conflit.
                Soutien psychosocial pour aider les familles à surmonter leur
                douleur.
              </p>
              <p className="text-md">
                <b>Comment contribuer</b> : <br />
                <ul className="list-disc mt-2 ml-5">
                  <li>
                    Faites un don en ligne via notre plateforme sécurisée.
                  </li>
                  <li>
                    Partagez notre campagne sur vos réseaux sociaux pour
                    sensibiliser davantage de personnes.
                  </li>
                  <li>
                    Organisez des événements de collecte de fonds dans votre
                    communauté.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row-reverse md:gap-12">
          <div className="text-8xl font-bold text-primary md:text-9xl">2</div>
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
              Opération de Soutien aux Déplacés de Guerre
            </h2>
            <div className="space-y-4">
              <p className="text-md">
                Face à la crise humanitaire que connaissent les déplacés de
                guerre à l'Est de la RDC, cette opération vise à collecter des
                fonds pour leur apporter une aide essentielle. Les fonds
                récoltés seront utilisés pour :
              </p>
              <ul className="list-disc ml-5">
                <li>
                  Fournir des abris temporaires pour les familles déplacées.
                </li>
                <li>
                  Offrir des aliments de première nécessité et des fournitures
                  médicales.
                </li>
                <li>
                  Mettre en place des programmes d’éducation pour les enfants
                  déplacés.
                </li>
              </ul>
              <p className="text-md">
                <b>Comment contribuer :</b>
              </p>
              <ul className="list-disc ml-5">
                <li>Faites un don en ligne pour soutenir les déplacés.</li>
                <li>
                  Organisez des collectes de vêtements, de fournitures scolaires
                  et de matériel médical.{" "}
                </li>
                <li>
                  Devenez ambassadeur de notre campagne et mobilisez votre
                  réseau pour apporter une aide concrète.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="relative mt-12 mb-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image
              src="/cover-100.jpeg"
              alt="Personne parlant dans un microphone avec un logo jaune"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 1 */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
              <i>Agissez Maintenant !</i>
            </h2>
            <div className="space-y-4">
              <p className="text-sm italic">
                Chaque contribution, quelle qu'en soit la taille, a le pouvoir
                de changer des vies. Rejoignez-nous dans cet effort collectif
                pour soutenir nos FARDC et les victimes du conflit. Ensemble,
                nous pouvons faire une différence significative et apporter
                espoir et solidarité à ceux qui en ont le plus besoin.
              </p>
              <p className="text-md italic">
                Faites un don aujourd'hui et devenez acteur du changement !
              </p>
              <p className="text-sm italic">
                Pour toute question ou information complémentaire, n'hésitez pas
                à nous contacter via notre formulaire en ligne ou par les
                réseaux sociaux. Merci de votre soutien !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
