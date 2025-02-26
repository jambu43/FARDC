import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="pb-24 w-full bg-white">
      {/* Green Banner */}
      <div className="h-[300px] w-full bg-primary sm:h-[400px] md:h-[500px]" />

      {/* Content Section - Negative margin to overlap with banner */}
      <div className="mx-auto max-w-4xl px-4 min-h-96 bg-[#faf7f4]">
        <div className="relative -mt-[150px] sm:-mt-[200px] md:-mt-[250px]">
          {/* Main Content Card */}
          <div className="mb-12  p-6 text-center md:p-12">
            <h1 className="mb-6 text-3xl font-bold text-primary sm:text-4xl md:text-5xl lg:text-6xl leading-10">
              Donner à chaque personne le pouvoir d'agir
            </h1>
            <p className="text-md text-gray-700 sm:text-xl md:text-sm">
              1$ pour 1 million 
            </p>
          </div>

        </div>
      </div>

      {/* Help Button - Fixed Position */}
      {/* <Button
        variant="default"
        className="fixed bottom-4 right-4 flex items-center gap-2 rounded-full bg-black px-6 py-2 text-white hover:bg-black/90"
      >
        <HelpCircle className="h-5 w-5" />
        <span>Aide</span>
      </Button> */}
    </div>
  )
}

