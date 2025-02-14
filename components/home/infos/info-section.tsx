import Link from "next/link";

export default function InfoSection() {
  return (
    <section className="bg-[#012d19] py-12 md:py-16 px-4 min-h-[600px]">
      <div className="container mt-16 ">
        <h2 className="text-2xl md:text-2xl lg:text-2xl font-semibold mb-6 md:mb-8 text-white">
          La collecte de fonds sur 100% <b>FARDC</b> est conviviale, efficace et
          sécurisée.
        </h2>

        <div className="space-y-6 text-white">
          <p className="text-base md:text-lg leading-relaxed">
            100% FARDC est une plateforme dédiée à la collecte de fonds pour
            soutenir nos militaires, leurs familles et les déplacés affectés par
            les conflits. Facile à utiliser, sécurisée et transparente, elle
            permet à chacun de contribuer directement au bien-être de ceux qui
            se battent pour la souveraineté et la sécurité de notre nation.
            Chaque don fait la différence et renforce la solidarité nationale
            envers nos héros.
          </p>

          <p className="text-base md:text-lg">
            Vous avez d&apos;autres <Link href="#" className="text-white underline hover:text-gray-600 transition-colors">
              questions
            </Link>
            ? En savoir plus sur <Link
              href="#"
              className="text-white underline hover:text-gray-600 transition-colors"
            >
              la façon dont 100% FARDC fonctionne
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
