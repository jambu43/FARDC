import Image from "next/image";

export default function FundraisingSteps() {
  return (
    <div className="container px-4 py-12 md:px-6 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="text-md font-bold tracking-tight md:text-3xl lg:text-4xl">
        La campagne 100% FARDC Tokolonga 
          <br className="hidden sm:inline" /> est un appel à la solidarité nationale et internationale. 
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Video Container */}
        <div className="relative  w-full ">
          <div className="rounded-2xl bg-emerald-600 p-4 shadow-lg aspect-[4/3]">
            <Image src={'/fardc.png'} alt="Image cover" fill/> 
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div>
              <h3 className="text-md md:text-lg lg:text-lg font-semibold mb-2">Elle vise à :
              </h3>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-sm font-medium">1</span>
              </div>
            </div>
            <div>
              <h3 className="text-md md:text-lg lg:text-lg font-semibold mb-2">Mobiliser les Congolais autour des FARDC pour créer un sentiment d’appartenance et de soutien.
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
              <h3 className="text-md md:text-lg lg:text-lg font-semibold mb-2">Lever des fonds pour assister les familles de nos soldats qui se battent au front.</h3>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-sm font-medium">3</span>
              </div>
            </div>
            <div>
              <h3 className="text-md md:text-lg lg:text-lg font-semibold mb-2">Soutenir les déplacés des guerres à l'Est de la RDC, qui ont perdu leurs maisons et leurs moyens de subsistance.</h3>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-sm font-medium">4</span>
              </div>
            </div>
            <div>
              <h3 className="text-md md:text-lg lg:text-lg font-semibold mb-2">Promouvoir des actions concrètes et valoriser les succès des FARDC pour maintenir le moral des troupes et de la population.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

