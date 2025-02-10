"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FormulairePaiementMobile } from "./mobile-payment-form"
import { FormulairePaiementCarte } from "./card-payment-form"
import { MessageSucces } from "./success-message"
import { Chargement } from "./loader"
import { createDonation } from "@/actions/strapi/api/donations/create"


interface BoutonPaiementProps {
    amount: number
    form: any
    isAnonimous: boolean

}

export function BoutonPaiement({ amount, isAnonimous, form }: BoutonPaiementProps) {
    const [ouvert, setOuvert] = useState(false)
    const [paiementReussi, setPaiementReussi] = useState(false)
    const [chargement, setChargement] = useState(false)

    const requestData = isAnonimous
        ? {
            amount: amount,
            date: new Date().toISOString(),
            campaign: form.campagnId,
            noms: 'Anonyme',
            telephone: 'Anonyme',
            ville: 'Anonyme',
            pays: 'Anonyme',
            email: "no@email.com",
            organization: form.organizationId,
        }
        : {
            amount: amount,
            date: new Date().toISOString(),
            campaign: form.campagnId,
            noms: form.name,
            telephone: form.phone,
            ville: form.ville,
            pays: form.pays,
            email: form?.email || "no@email.com",
            organization: form.organizationId,
        }

    const gererPaiementReussi = async () => {
        setChargement(true)
        await createDonation(requestData)
        new Promise((resolve) => {
            setChargement(true)
            setTimeout(() => {
                resolve(true)
            }, 300)
        })
            .then(() => {
                setChargement(false)
                setPaiementReussi(true)
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(true)
                    }, 3000)
                })
            })
            .then(() => {
                setPaiementReussi(false)
                setOuvert(false)
            })
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

