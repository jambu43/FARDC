import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Simulons des données de statistiques pour cet exemple
const getCampaignStats = (id: string) => ({
  totalDonors: 523,
  averageDonation: 143.4,
  largestDonation: 5000,
  conversionRate: 2.7,
})

export function CampaignStats({ campaignId }: { campaignId: string }) {
  const stats = getCampaignStats(campaignId)

  return (
    <div className="col-span-4 grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total des donateurs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalDonors}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Don moyen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.averageDonation.toLocaleString("fr-FR")} €</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Don le plus important</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.largestDonation.toLocaleString("fr-FR")} €</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Taux de conversion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.conversionRate}%</div>
        </CardContent>
      </Card>
    </div>
  )
}

