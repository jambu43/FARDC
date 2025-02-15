export default function StatsSection() {
  return (
    <div className="w-full bg-primary py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
          {/* Contributors */}
          <div className="flex flex-col items-center justify-center">
            <span className="mb-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">6,2M</span>
            <span className="text-sm font-medium uppercase tracking-wider text-white sm:text-base">
              Contributions
            </span>
          </div>

          {/* Creators */}
          <div className="flex flex-col items-center justify-center">
            <span className="mb-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">93,9K</span>
            <span className="text-sm font-medium uppercase tracking-wider text-white sm:text-base">
            Contributeur·ices
            </span>
          </div>

          {/* Online Collections */}
          <div className="flex flex-col items-center justify-center sm:col-span-2 lg:col-span-1">
            <span className="mb-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">5</span>
            <span className="text-sm font-medium uppercase tracking-wider text-white sm:text-base">
              Collectes en ligne
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

