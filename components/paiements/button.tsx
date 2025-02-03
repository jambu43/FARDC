"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FormulairePaiementMobile } from "./mobile-payment-form"
import { FormulairePaiementCarte } from "./card-payment-form"
import { MessageSucces } from "./success-message"
import { Chargement } from "./loader"

interface BoutonPaiementProps {
    amount: number
}

export function BoutonPaiement({ amount }: BoutonPaiementProps) {
    const [ouvert, setOuvert] = useState(false)
    const [paiementReussi, setPaiementReussi] = useState(false)
    const [chargement, setChargement] = useState(false)

    const gererPaiementReussi = () => {
        setChargement(true)
        setTimeout(() => {
            setChargement(false)
            setPaiementReussi(true)
            setTimeout(() => {
                setPaiementReussi(false)
                setOuvert(false)
            }, 3000)
        }, 2000) // Simuler un délai de paiement de 2 secondes
    }

    return (
        <Dialog open={ouvert} onOpenChange={setOuvert}>
            <DialogTrigger asChild>
                <Button className="w-full bg-primary">Payer maintenant</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Paiement de {amount} $</DialogTitle>
                </DialogHeader>
                {chargement ? (
                    <Chargement />
                ) : paiementReussi ? (
                    <MessageSucces />
                ) : (
                    <Tabs defaultValue="mobile" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="mobile">Paiement Mobile</TabsTrigger>
                            <TabsTrigger value="carte">Paiement par Carte</TabsTrigger>
                        </TabsList>
                        <TabsContent value="mobile">
                            <FormulairePaiementMobile onSuccess={gererPaiementReussi} chargement={chargement} />
                        </TabsContent>
                        <TabsContent value="carte">
                            <FormulairePaiementCarte onSuccess={gererPaiementReussi} chargement={chargement} />
                        </TabsContent>
                    </Tabs>
                )}
            </DialogContent>
        </Dialog>
    )
}

