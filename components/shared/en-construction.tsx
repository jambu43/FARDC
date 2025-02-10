import Link from "next/link"
import { HardHat, Home } from "lucide-react"

export default function EnConstruction() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
                <HardHat className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Page en construction</h1>
                <p className="text-gray-600 mb-6">
                    Nous travaillons dur pour vous offrir une expérience exceptionnelle. Revenez bientôt !
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                    <div className="bg-yellow-500 h-2.5 rounded-full animate-pulse" style={{ width: "70%" }}></div>
                </div>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center w-full bg-yellow-500 text-white rounded-md py-2 px-4 hover:bg-yellow-600 transition-colors"
                >
                    <Home className="w-5 h-5 mr-2" />
                    Retour à la page d&#x27;accueil
                </Link>
            </div>
        </div>
    )
}

