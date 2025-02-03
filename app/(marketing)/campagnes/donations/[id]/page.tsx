"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AtSymbolIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

type DonationItem = {
  name: string;
  amount: number;
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

function DonationsDetails({ params }: Props) {
  const [isAnonymous, setAnonymous] = useState(false);
  const [amount, setAmount] = useState(1);

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Aide au militaire à l&apos;Est du pays
            </Link>
            <div className="text-right">
              <h1 className="font-medium">
                Aide au militaire à l&apos;Est du pays
              </h1>
              <p className="text-sm text-zinc-600">par Fondation InossB</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            SÉLECTION
          </Button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Votre sélection</h2>

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

              {/* Render the form only if isAnonymous is true */}
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="email"
                >
                  Montant
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="email"
                    type="number"
                    name="mount"
                    placeholder="Montant"
                    required
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>
              </div>
              {!isAnonymous && (
                <form action="" className={""}>
                  <div className="">
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
                        />
                        <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                      </div>
                    </div>
                    <div>
                      <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="name"
                      >
                        Nom complet
                      </label>
                      <div className="relative">
                        <input
                          className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                          id="name"
                          type="name"
                          name="name"
                          placeholder="votre nom complet"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="tel"
                      >
                        Numéro de téléphone
                      </label>
                      <div className="relative">
                        <input
                          className="peer block w-full rounded-md border border-gray-200 py-[13px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                          id="tel"
                          type="tel"
                          name="tel"
                          placeholder="Numéro de téléphone"
                          required
                        />
                      </div>
                    </div>
                    
                  </div>
                </form>
              )}
              <div>
                      <Button className="w-full bg-primary hover:bg-primary text-white  mt-5">
                        Valider
                      </Button>
                    </div>
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
                    <span>2$</span>
                  </div>
                </div>

                <div className="border-t border-zinc-200 pt-4">
                  <div className="flex justify-between font-medium">
                    <span>Total à payer</span>
                    <span>{amount+2}$</span>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-2">
                    {/* <Checkbox
                      id="anonymous"
                      checked={isAnonymous}
                      onCheckedChange={(checked) =>
                        setIsAnonymous(checked as boolean)
                      }
                    /> */}
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
                    {/* <Checkbox
                      id="gift"
                      checked={includeGift}
                      onCheckedChange={(checked) => setIncludeGift(checked as boolean)}
                    /> */}
                    <label
                      htmlFor="gift"
                      className="text-sm leading-none pt-0.5"
                    >
                      Ajoutez votre carte cadeau lors du paiement
                    </label>
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-primary hover:bg-primary text-white">
                  Valider ma sélection
                </Button>

                {/* Footer Info */}
                <div className="space-y-3 text-sm text-zinc-600">
                  <div className="flex items-center gap-2">
                    {/* <Lock className="w-4 h-4" /> */}
                    <span>Paiement sécurisé via MANGOPAY</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <Clock className="w-4 h-4" /> */}
                    <span>
                      {`Remboursement automatique si la collecte n'atteint pas son objectif d'ici le 22 mars 2025`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <Shield className="w-4 h-4" /> */}
                    <span>Projet vérifié par KissKissBankBank</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-500">
                  {`Contribuer, ce n'est pas acheter. Vous soutenez un projet en cours de création. KissKissBankBank n'a
                  aucun lien avec le projet et n'est pas responsable des engagements de l'auteur du projet.`}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DonationsDetails;

const donations: DonationItem[] = [
  {
    name: "Recolte",
    amount: 200,
  },
];
