import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {largestValueInArray,averageValueInArray,sumValueInArray} from "@/lib/utils";



export function CampaignStats({ campaign}: { campaign: any }) {

    const totalDonors = campaign.donations.length || 0
    const amountDonationsArray = campaign.donations?.map((donation: any) => donation?.amount) || []
    const averageDonation = averageValueInArray(amountDonationsArray)
    const largestDonation = largestValueInArray(amountDonationsArray)
    const totalAmountColected = sumValueInArray(amountDonationsArray)

  return (
    <div className="col-span-4 grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total des donateurs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalDonors}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Don moyen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageDonation.toLocaleString("fr-FR")} $</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Don le plus important</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{largestDonation.toLocaleString("fr-FR")} $</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total de la somme collectée</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalAmountColected}$</div>
        </CardContent>
      </Card>
    </div>
  )
}

