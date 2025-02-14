"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormulairePaiementMobileProps {
    onSuccess: () => void
    chargement: boolean
}

export function FormulairePaiementMobile({ onSuccess, chargement }: FormulairePaiementMobileProps) {
    const [numeroTelephone, setNumeroTelephone] = useState("")

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
                <Label htmlFor="telephone">Numéro de téléphone</Label>
                <Input
                    id="telephone"
                    placeholder="Entrez votre numéro de téléphone"
                    value={numeroTelephone}
                    onChange={(e) => setNumeroTelephone(e.target.value)}
                    required
                />
            </div>
            <Button type="submit" className="w-full bg-primary" disabled={chargement}>
                {chargement ? "Paiement en cours..." : "Payer avec Mobile"}
            </Button>
        </form>
    )
}

