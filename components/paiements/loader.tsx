import { Loader2 } from "lucide-react"

export function Chargement() {
    return (
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
            <h2 className="text-2xl font-semibold">Paiement en cours</h2>
            <p className="text-gray-600">Veuillez patienter...</p>
        </div>
    )
}

