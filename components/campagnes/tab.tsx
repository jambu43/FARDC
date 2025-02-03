"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TabItem {
  id: string;
  label: string;
  count?: number;
}

interface ProjectTabsProps {
  defaultTab?: string;
}

export function CampagneTabs({ defaultTab = "collecte" }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabs: TabItem[] = [
    { id: "collecte", label: "Collecte" },
    { id: "contreparties", label: "Contreparties" },
    { id: "faq", label: "FAQ" },
    { id: "publications", label: "Publications", count: 2 },
    { id: "contributions", label: "Contributions", count: 295 },
    { id: "commentaires", label: "Commentaires", count: 63 },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Tabs Navigation */}
      <Tabs
        defaultValue={defaultTab}
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="w-full h-auto flex flex-nowrap overflow-x-auto bg-transparent border-b border-zinc-200 gap-8 p-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`
                flex items-center gap-2 px-1 py-4 border-b-2 border-transparent
                data-[state=active]:border-primary data-[state=active]:text-primary
                rounded-none hover:text-primary transition-colors
              `}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="text-sm text-zinc-500">{tab.count}</span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tabs Content */}
        <div className="mt-8">
          <TabsContent value="collecte">
            <div className="bg-zinc-50 rounded-lg p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-zinc-500" />
              </div>
              <p className="flex-1 text-zinc-600">
                Cette publication est réservée aux personnes qui suivent la
                collecte
              </p>
              <Button className="bg-primary hover:bg-[#1994E6] text-white">
                CONTRIBUER
              </Button>
            </div>
            
          </TabsContent>

          <TabsContent value="contreparties">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Contreparties</h2>
              <p className="text-zinc-600">
                Soutenez la collecte et recevez des contreparties en échange.
              </p>
            </div>
            <div className="space-y-6"></div>
          </TabsContent>

          <TabsContent value="faq">
            <div className="text-zinc-600">Contenu FAQ</div>
          </TabsContent>

          <TabsContent value="publications">
            <div className="text-zinc-600">Publications</div>
          </TabsContent>

          <TabsContent value="contributions">
            <div className="text-zinc-600">Liste des contributions</div>
          </TabsContent>

          <TabsContent value="commentaires">
            <div className="text-zinc-600">Espace commentaires</div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
