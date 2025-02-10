// @ts-nocheck
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  data: any
}

export function DonorsOverview({ data }: Props) {
  const { total, totalDonationsforThisMonth, averageAmountDonations, totalAmountCollected } = data
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total des donateurs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-primary">{total}</div>

        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Nouveaux donateurs ce mois</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-primary">{totalDonationsforThisMonth}</div>

        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Don moyen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-primary">{averageAmountDonations}$</div>

        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Montant total collecté</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-primary">{totalAmountCollected}$</div>

        </CardContent>
      </Card>
    </div>
  )
}

