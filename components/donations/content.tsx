"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BoutonPaiement } from "../paiements/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { AtSymbolIcon } from "@heroicons/react/20/solid";

type DonationItem = {
  name: string;
  amount: number;
};

type Props = {
  campagne: any;
};

export default function DonationsDetails({ campagne }: Props) {
  const [tipPercentage, setTipPercentage] = useState(11);

  const presetAmounts = [10, 30, 50, 100, 200, 300, 500, 1000];

  const [isAnonymous, setAnonymous] = useState(false);
  const [amount, setAmount] = useState(10);
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

  console.log(campagne);

  return (
    <div className="min-h-screen">
      <Card className="mx-auto max-w-3xl rounded-3xl shadow-lg">
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <Image
              src={campagne?.featuredImage}
              alt="Profile"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <div>
              <h1 className="font-bold text-xl">{campagne?.title} </h1>
              <p className="text-sm text-zinc-600">par 100%FARDC</p>
            </div>
          </div>

          {/* Donation Amount */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-medium">Saisissez votre don</h2>
            <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {presetAmounts.map((preset) => (
                <Button
                  key={preset}
                  variant={amount === preset ? "default" : "outline"}
                  onClick={() => setAmount(preset)}
                  className="w-full"
                >
                  ${preset}
                </Button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-lg">
                $
              </span>
              <Input
                className="peer block w-full border border-gray-200 py-8 px-4 h-12 rounded-xl pl-10 outline-2 placeholder:text-gray-500 md:text-3xl text-xl font-extrabold"
                id="custom-amount"
                type="number"
                name="amount"
                placeholder="Autre montant"
                value={amount || ""}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>

            <div className="flex items-center space-x-2 rounded-lg border p-4 my-10">
              <div className="flex items-center space-x-2 rounded-lg border p-4">
                <input
                  type="checkbox"
                  name="check"
                  id="anonymous"
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
            </div>

            {!isAnonymous && (
              <div className="space-x-2 rounded-lg border p-4">
                <div className="space-y-4">
                  <div>
                    <label
                      className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <Input
                        className="peer block w-full border border-gray-200 px-4 h-12 rounded-md pl-10 text-lg outline-2 placeholder:text-gray-500"
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
                      <Input
                        className="peer block w-full border border-gray-200 py-4 px-4 h-12 rounded-md pl-10 text-lg outline-2 placeholder:text-gray-500"
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
                      <Input
                        className="peer block w-full border border-gray-200 py-4 px-4 h-12 rounded-md pl-10 text-lg outline-2 placeholder:text-gray-500"
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

                  <div className="grid grid-cols-2 gap-4">
                    <Select defaultValue="dr-congo">
                      <SelectTrigger>
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dr-congo">DR Congo</SelectItem>
                        {/* Add other countries as needed */}
                      </SelectContent>
                    </Select>
                    <Input
                      type="text"
                      placeholder="Ville"
                      value={form.ville}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Donation Summary */}
          <div className="mb-8 space-y-2">
            <h3 className="font-bold">Votre don</h3>
            <div className="flex justify-between text-sm">
              <span>Sous total</span>
              <span>{amount}$</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Frais de service</span>
              <span>{amount * 2 / 100}$</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total à payer</span>
              <span className="font-bold">{amount + (amount * 2 / 100)}$</span>
            </div>
          </div>

          {/* Donate Button and Terms */}
          <div className="space-y-4">
          <BoutonPaiement amount={amount + (amount * 2 / 100)} isAnonimous={isAnonymous} form={form} />
            <p className="text-center text-xs text-muted-foreground">
                Contribuer, c'est investir dans un avenir meilleur. Vous soutenez des actions de bienfaisance qui ont un impact positif. 
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
