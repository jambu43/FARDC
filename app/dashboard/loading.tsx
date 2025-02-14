"use client"

import { Loader2 } from "lucide-react"
import { useState, useEffect } from "react"

export default function Loading() {
    const [loadingMessage, setLoadingMessage] = useState("Chargement en cours..")

    useEffect(() => {
        const messages = [
            "Chargement campagnes",
            "Chargement statistiques",
            "Analyse des données",
            "Prepparer les données",
            "Chargement des dons",
        ]
        let currentIndex = 0

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % messages.length
            setLoadingMessage(messages[currentIndex])
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-8">
                <div className="flex justify-center">
                    <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
                </div>
                <div className="space-y-4">
                    <div className="h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-blue-500 rounded animate-pulse" style={{ width: "75%" }}></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-green-500 rounded animate-pulse" style={{ width: "60%" }}></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-yellow-500 rounded animate-pulse" style={{ width: "45%" }}></div>
                    </div>
                </div>
                <p className="text-center text-gray-600 font-medium">{loadingMessage}</p>
            </div>
        </div>
    )
}

