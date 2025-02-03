import React from "react";

import Image from "next/image";
import { Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CampagneTabs } from "@/components/campagnes/tab";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function CampagneDetails({ params }: Props) {
  const { id } = await params;
  return (
    <div>
      <div className="bg-secondary pb-8 h-[30rem] "></div>
      <section className="container -mt-[25rem] py-8 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 md:p-8 space-y-4">
            <h1 className="text-2xl md:text-xl font-bold text-center">
              Aide d&apos;urgence pour les victimes du séisme {id}
            </h1>
            <p className="text-center text-zinc-600 font-md">
              Soutenez notre action humanitaire pour venir en aide aux
              populations touchées par cette crise.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col md:flex-row">
            {/* Main Image Column - 60% */}
            <div className="md:w-[60%]  p-6 md:p-8">
              <div className="relative aspect-[16/9] md:aspect-[4/3] h-full">
                <Image
                  src="/guerre.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Stats and Action Column - 40% */}
            <div className="md:w-[40%] p-6 md:p-8">
              {/* Project Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full" />
                  <div>
                    <h2 className="font-semibold">Tibert Editions</h2>
                    <div className="flex gap-2 text-sm text-zinc-600">
                      <span>Billezois</span>
                      <span>•</span>
                      <span>Édition & Média</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-6 mt-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">297</span>
                      <span className="text-sm text-zinc-600">
                        préventes sur un objectif de 300
                      </span>
                    </div>
                    <Progress value={99} className="h-2" />
                    <span className="text-sm font-medium text-emerald-600">
                      99%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-2xl font-bold">296</span>
                      <span className="text-sm text-zinc-600 block">
                        contributions
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-2xl font-bold">33</span>
                      <span className="text-sm text-zinc-600 block">
                        jours restants
                      </span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-[#1994E6] text-white py-8">
                  <span className="flex flex-col">
                    <span className="text-lg font-bold">CONTRIBUER</span>
                    <span className="text-sm font-normal">À partir de 1 $</span>
                  </span>
                </Button>

                <p className="text-center text-sm text-zinc-600">
                  <Button variant="link" className="h-auto p-0">
                    Paiement sécurisé et sans engagement
                  </Button>
                </p>

                {/* Social Actions */}
                <div className="flex justify-end gap-4 mt-6">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    PARTAGER
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Heart className="w-4 h-4" />
                    SUIVRE
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Heart className="w-4 h-4" />
                    Commenter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <CampagneTabs />
      </section>
    </div>
  );
}

export default CampagneDetails;
