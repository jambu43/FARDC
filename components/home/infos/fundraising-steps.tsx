export default function FundraisingSteps() {
  return (
    <div className="container px-4 py-12 md:px-6 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
        La collecte de fonds sur 100% FARDC est facile, 
          <br className="hidden sm:inline" /> puissante et fiable
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Video Container */}
        <div className="relative  w-full ">
          <div className="rounded-2xl bg-emerald-600 p-4 shadow-lg aspect-[4/3]">
            <video className="w-full h-full rounded-lg object-cover" controls controlsList="nodownload" playsInline>
              <source src="/genocost-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-sm font-medium">1</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Cette platefoeme est Utilisée pour collecter de fonds </h3>
              <p className="text-gray-600">
              Vous serez guidé pour les détails de la collecte de fonds et être notiffier des mises à jour à tout moment.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-sm font-medium">2</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Atteindre les donateurs en partageant</h3>
              <p className="text-gray-600">
              Partagez le lien de vos collectes de fonds ...
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-sm font-medium">3</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Recevoir des fonds en toute sécurité</h3>
              <p className="text-gray-600">
              L&apos;argent de collete est directement versé sur le compte du concené ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

