import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
                <h1 className="text-9xl font-bold text-blue-500 animate-pulse">404</h1>
                <p className="mt-4 text-2xl font-semibold text-gray-700">Oups ! Page non trouvée</p>
                <p className="mt-2 text-gray-500">Désolé, la page que vous recherchez n&#x27;existe pas.</p>
                <div className="mt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Retour à l&#x27;accueil
                    </Link>
                </div>
            </div>
        </div>
    )
}

