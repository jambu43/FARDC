import { CampaignsOverview } from "@/components/dasboard/campaigns/campaigns-overview";
import { CampaignsTable } from "@/components/dasboard/campaigns/campaigns-table";
import {getCampaignsByUser,getStatsCampaigns} from "@/actions/strapi/api/campaigns/find";


export default async function CampaignsPage() {
    const campaigns = await getCampaignsByUser()
    const stats = await getStatsCampaigns()
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Campagnes</h2>
      </div>
      <CampaignsOverview data={stats} />
      <CampaignsTable data={campaigns} />
    </div>
  )
}

