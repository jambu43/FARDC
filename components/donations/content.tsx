"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AtSymbolIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { BoutonPaiement } from "../paiements/button";

type DonationItem = {
    name: string;
    amount: number;
};

type Props = {
    campagne: any;
};

function DonationsDetails({ campagne }: Props) {
    const [isAnonymous, setAnonymous] = useState(false);
    const [amount, setAmount] = useState(1);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        ville: "",
        pays: "",
        campagnId: campagne?.id,
        organizationId: campagne?.organizationId,
    });

    const handleFormChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-zinc-50">
            <section className="bg-white border-b border-zinc-200">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <Link href={`/campagnes/${campagne?.id}`} className="text-2xl font-bold text-primary">
                            Nom de la campagne :  {campagne?.title}
                        </Link>
                        <div className="text-right">
                            <h1 className="font-medium">
                                {campagne?.title}
                            </h1>
                            <p className="text-sm text-zinc-600">par {campagne?.organization}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-6 text-primary">Votre sélection</h2>

                        <div className="space-y-4">
                            {donations.map((donation: DonationItem, index: number) => (
                                <Card
                                    key={index}
                                    className="p-4 flex justify-between items-center"
                                >
                                    <span>{donation.name}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="font-medium">{amount}$</span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            //   onClick={() => removeDonation(index)}
                                            className="text-zinc-400 hover:text-zinc-600"
                                        >
                                            ×
                                        </Button>
                                    </div>
                                </Card>
                            ))}

                            <form>
                                <div>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                    >
                                        Montant
                                    </label>

                                    {/* Options de montants prédéfinis */}
                                    <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mb-4">
                                        {[2, 10, 20, 50, 100, 200].map((value) => (
                                            <div
                                                key={value}
                                                onClick={() => setAmount(value)}
                                                className={`flex group items-center rounded-md px-8 py-2 border shadow border-gray-200 cursor-pointer transition-colors ${amount === value ? 'bg-primary text-white' : 'bg-white text-gray-900'
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    id={`amount-${value}`}
                                                    name="predefined-amount"
                                                    value={value}
                                                    checked={amount === value}
                                                    onChange={() => setAmount(value)}
                                                    className="h-4 w-4 text-primary hidden"
                                                />
                                                <label
                                                    htmlFor={`amount-${value}`}
                                                    className="text-center text-sm font-medium"
                                                >
                                                    {value}$
                                                </label>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Input pour montant personnalisé */}
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="custom-amount"
                                            type="number"
                                            name="amount"
                                            placeholder="Autre montant"
                                            value={amount || ''}
                                            onChange={(e) => setAmount(Number(e.target.value))}
                                        />
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2">€</span>
                                    </div>
                                </div>
                                {!isAnonymous && (
                                    <div className="space-y-4">
                                        <div>
                                            <label
                                                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <div className="relative">
                                                <input
                                                    className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    placeholder="votre email"
                                                    required
                                                    value={form.email}
                                                    onChange={handleFormChange}
                                                />
                                                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                className="mb-3 block text-xs font-medium text-gray-900"
                                                htmlFor="name"
                                            >
                                                Nom complet
                                            </label>
                                            <div className="relative">
                                                <input
                                                    className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    placeholder="Votre nom complet"
                                                    required
                                                    value={form.name}
                                                    onChange={handleFormChange}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                className="mb-3 block text-xs font-medium text-gray-900"
                                                htmlFor="phone"
                                            >
                                                Numéro de téléphone
                                            </label>
                                            <div className="relative">
                                                <input
                                                    className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                    id="phone"
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Votre numéro de téléphone"
                                                    required
                                                    value={form.phone}
                                                    onChange={handleFormChange}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                className="mb-3 block text-xs font-medium text-gray-900"
                                                htmlFor="ville"
                                            >
                                                Ville
                                            </label>
                                            <div className="relative">
                                                <input
                                                    className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                    id="ville"
                                                    type="text"
                                                    name="ville"
                                                    placeholder="Votre ville"
                                                    required
                                                    value={form.ville}
                                                    onChange={handleFormChange}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                className="mb-3 block text-xs font-medium text-gray-900"
                                                htmlFor="pays"
                                            >
                                                Pays
                                            </label>
                                            <div className="relative">
                                                <input
                                                    className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                    id="pays"
                                                    type="text"
                                                    name="pays"
                                                    placeholder="Votre pays"
                                                    required
                                                    value={form.pays}
                                                    onChange={handleFormChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </form>

                        </div>

                    </div>

                    {/* Right Column - Summary */}
                    <div className="lg:col-span-1">
                        <Card className="p-6">
                            <div className="space-y-4">
                                {/* Summary */}
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Don libre</span>
                                        <span>{amount}$</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Sous-total</span>
                                        <span>{amount}$</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-2">
                                            <span>Frais de service</span>
                                            {/* <Info className="w-4 h-4 text-zinc-400" /> */}
                                        </div>
                                        <span>{amount * 2 / 100}$</span>
                                    </div>
                                </div>

                                <div className="border-t border-zinc-200 pt-4">
                                    <div className="flex justify-between font-medium">
                                        <span>Total à payer</span>
                                        <span>{amount + (amount * 2 / 100)}$</span>
                                    </div>
                                </div>

                                {/* Options */}
                                <div className="space-y-4 pt-4">
                                    <div className="flex items-start gap-2">

                                        <input
                                            type="checkbox"
                                            name="check"
                                            id="anonyme"
                                            checked={isAnonymous}
                                            onChange={(e) => setAnonymous(e.target.checked)}
                                        />
                                        <label
                                            htmlFor="anonymous"
                                            className="text-sm leading-none pt-0.5"
                                        >
                                            Contribuer de manière anonyme
                                        </label>
                                    </div>

                                    <div className="flex items-start gap-2">

                                        <label
                                            htmlFor="gift"
                                            className="text-sm leading-none pt-0.5"
                                        >
                                            Ajoutez votre carte cadeau lors du paiement
                                        </label>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <BoutonPaiement amount={amount + (amount * 2 / 100)} isAnonimous={isAnonymous} form={form} />

                                {/* Footer Info */}
                                <div className="space-y-3 text-sm text-zinc-600">
                                    <div className="flex items-center gap-2">
                                        {/* <Lock className="w-4 h-4" /> */}
                                        <span>Paiement sécurisé via Mobile Money</span>
                                    </div>
                                    <div className="flex items-center gap-2">

                                        <span>
                                            {`Remboursement automatique si la collecte n'atteint pas son objectif d'ici le 22 mars 2025`}
                                        </span>
                                    </div>

                                </div>

                                <p className="text-xs text-zinc-500">
                                    {`Contribuer, c'est investir dans un avenir meilleur. Vous soutenez des actions de bienfaisance qui ont un impact positif. `}
                                </p>
                            </div>
                        </Card>

                    </div>
                </div>
            </section >
        </div >
    );
}

export default DonationsDetails;

const donations: DonationItem[] = [
    {
        name: "Recolte",
        amount: 200,
    },
];
