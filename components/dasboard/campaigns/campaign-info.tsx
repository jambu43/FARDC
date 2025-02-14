import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Simulons des données de campagne pour cet exemple
const getCampaignInfo = (id: string) => ({
  id,
  title: "Aide aux sinistrés des inondations",
  description:
    "Cette campagne vise à collecter des fonds pour aider les familles touchées par les récentes inondations dans la région. Les fonds seront utilisés pour fournir de la nourriture, des vêtements et un abri temporaire aux personnes déplacées.",
  goal: 100000,
  raised: 75000,
  startDate: "2023-05-01",
  endDate: "2023-07-31",
  status: "active",
})

export function CampaignInfo({ campaign}: { campaign: any }) {
  const progress = (campaign.amountCollected / campaign.goal) * 100
  const today = new Date();
  const statut =  today > new Date(campaign.endDate) ? "completed" : "active";


  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className={'text-primary'}>{campaign.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <h3 className="text-lg font-semibold  text-primary">Description</h3>
          <p className="text-sm text-muted-foreground">{campaign.description}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Progression</h3>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>{campaign.amountCollected.toLocaleString("fr-FR")} $ collectés</span>
            {/* <span>{campaign.goal.toLocaleString("fr-FR")} $ objectif</span> */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground text-primary" >Date de début</h3>
            <p className="text-lg font-semibold">{new Date(campaign.startDate).toLocaleDateString("fr-FR")}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground text-primary">Date de fin</h3>
            <p className="text-lg font-semibold">{new Date(campaign.endDate).toLocaleDateString("fr-FR")}</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-muted-foreground text-primary">Statut</h3>
          <p className="text-lg font-semibold capitalize">{statut}</p>
        </div>
      </CardContent>
    </Card>
  )
}

