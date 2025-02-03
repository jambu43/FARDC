import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Foire Aux Questions</h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Qu&apos;est-ce que le crowdfunding ?
            </AccordionTrigger>
            <AccordionContent>
              Le crowdfunding, ou financement participatif, est une méthode de
              collecte de fonds où de nombreuses personnes contribuent de
              petites sommes d&apos;argent pour soutenir un projet ou une cause
              spécifique.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Comment puis-je lancer un projet sur votre plateforme ?
            </AccordionTrigger>
            <AccordionContent>
              Pour lancer un projet, créez un compte, cliquez sur Lancer un
              projet, remplissez le formulaire détaillé avec les informations
              sur votre projet, définissez votre objectif de financement et la
              durée de la campagne, puis soumettez-le pour approbation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Quels types de projets sont acceptés ?
            </AccordionTrigger>
            <AccordionContent>
              Nous acceptons une grande variété de projets créatifs, innovants
              ou caritatifs. Cela inclut, mais n&apos;est pas limité à, des
              projets artistiques, technologiques, environnementaux, sociaux et
              entrepreneuriaux.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Comment puis-je soutenir un projet ?
            </AccordionTrigger>
            <AccordionContent>
              Pour soutenir un projet, naviguez sur la page du projet qui vous
              intéresse, choisissez le montant que vous souhaitez contribuer,
              sélectionnez une récompense si disponible, puis suivez les
              instructions pour effectuer votre paiement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Que se passe-t-il si un projet n&apos;atteint pas son objectif de
              financement ?
            </AccordionTrigger>
            <AccordionContent>
              Si un projet n&apos;atteint pas son objectif de financement dans
              le délai imparti, les fonds sont généralement remboursés aux
              contributeurs. C&apos;est ce qu&apos;on appelle le modèle tout ou
              rien.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Quels sont les frais associés à l&apos;utilisation de la
              plateforme ?
            </AccordionTrigger>
            <AccordionContent>
              Nous prélevons un petit pourcentage sur les projets qui atteignent
              leur objectif de financement. Ce pourcentage couvre les frais de
              fonctionnement de la plateforme et les frais de transaction. Les
              détails exacts sont disponibles dans nos conditions
              d&apos;utilisation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 text-center">
          <p className="mb-4">
            Vous n&apos;avez pas trouvé la réponse à votre question ?
          </p>
          <Button asChild>
            <Link href="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} CrowdFund. Tous droits réservés.
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/terms" className="hover:underline">
              Conditions d&apos;utilisation
            </Link>
            <Link href="/privacy" className="hover:underline">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FaqPage;
