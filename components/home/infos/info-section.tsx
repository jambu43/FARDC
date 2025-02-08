export default function InfoSection() {
  return (
    <section className="bg-[#f3f9f3] py-12 md:py-16 px-4 min-h-[600px]">
      <div className="container mt-16 ">
        <h2 className="text-2xl md:text-2xl lg:text-2xl font-semibold mb-6 md:mb-8">
          La collecte de fonds sur 100% <b>FARDC</b> est conviviale, efficace et sécurisée.
        </h2>

        <div className="space-y-6 text-gray-700">
          <p className="text-base md:text-lg leading-relaxed">
           100% FARDC vous donne les moyens de réussir votre cagnotte afin de réunir les fonds dont vous avez besoin pour
            vous, vos amis, votre famille ou une association. Avec ses cagnottes sans frais de démarrage pour les
            organisateurs,100% FARDC est la référence en matière de{" "}
            <a href="#" className="text-gray-900 underline hover:text-gray-600 transition-colors">
              financement participatif
            </a>
            à travers le monde pour les{" "}
            <a href="#" className="text-gray-900 underline hover:text-gray-600 transition-colors">
              commémorations
            </a>
            (hommages/obsèques), la{" "}
            <a href="#" className="text-gray-900 underline hover:text-gray-600 transition-colors">
              santé
            </a>
            (urgences) et les
            <a href="#" className="text-gray-900 underline hover:text-gray-600 transition-colors">
              associations à but non lucratif
            </a>
            . Vous pouvez poser vos questions ici à tout moment si vous avez besoin d&apos;aide.
          </p>

          <p className="text-base md:text-lg">
            Vous avez d&apos;autres
            <a href="#" className="text-gray-900 underline hover:text-gray-600 transition-colors">
              questions
            </a>
            ? En savoir plus sur
            <a href="#" className="text-gray-900 underline hover:text-gray-600 transition-colors">
              la façon dont100% FARDC fonctionne
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

