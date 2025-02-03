import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export function MessageSucces() {
    return (
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <h2 className="text-2xl font-semibold">Paiement réussi !</h2>
            <p className="text-gray-600">Merci pour votre paiement.</p>
            <Link href="/" className="text-primary hover:underline">
                <Button className="mt-4 bg-primary">Retourner sur la page d'accueil</Button>
            </Link>
        </div>
    )
}

