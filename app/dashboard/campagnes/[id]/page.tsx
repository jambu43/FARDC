import { CampaignDonors } from "@/components/dasboard/campaigns/campaign-donors"
import { CampaignInfo } from "@/components/dasboard/campaigns/campaign-info"
import { CampaignStats } from "@/components/dasboard/campaigns/campaign-stats"
import {notFound} from "next/navigation"
import {getCampaign} from "@/actions/strapi/api/campaigns/find";



export default async function  CampaignDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Dans un cas réel, vous utiliseriez l'ID pour récupérer les données de la campagne depuis votre API ou base de données
  const {id:campaignId} = await params
    const campaign = await getCampaign(campaignId);

    if (!campaign) {
      return notFound();
    }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight text-primary">Détails de la campagne</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <CampaignInfo campaign={campaign} />
        <CampaignStats campaign={campaign} />
      </div>
      <CampaignDonors campaign={campaign} />
    </div>
  )
}

