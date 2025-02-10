"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormulairePaiementCarteProps {
    onSuccess: () => void
    chargement: boolean
}

export function FormulairePaiementCarte({ onSuccess, chargement }: FormulairePaiementCarteProps) {
    const [numeroCarte, setNumeroCarte] = useState("")
    const [dateExpiration, setDateExpiration] = useState("")
    const [cvv, setCvv] = useState("")

    const gererSoumission = (e: React.FormEvent) => {
        e.preventDefault()
        // Simuler le processus de paiement
        setTimeout(() => {
            onSuccess()
        }, 1500)
    }

    return (
        <form onSubmit={gererSoumission} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="numeroCarte">Numéro de carte</Label>
                <Input
                    id="numeroCarte"
                    placeholder="1234 5678 9012 3456"
                    value={numeroCarte}
                    onChange={(e) => setNumeroCarte(e.target.value)}
                    required
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="dateExpiration">Date d'expiration</Label>
                    <Input
                        id="dateExpiration"
                        placeholder="MM/AA"
                        value={dateExpiration}
                        onChange={(e) => setDateExpiration(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                </div>
            </div>
            <Button type="submit" className="w-full bg-primary" disabled={chargement}>
                {chargement ? "Paiement en cours..." : "Payer avec Carte"}
            </Button>
        </form>
    )
}

