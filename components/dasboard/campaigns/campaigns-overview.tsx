import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CampaignsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total des campagnes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">34</div>
          <p className="text-xs text-muted-foreground">+2 depuis le mois dernier</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Campagnes actives</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">27</div>
          <p className="text-xs text-muted-foreground">+1 depuis la semaine dernière</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total collecté</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">45 789 €</div>
          <p className="text-xs text-muted-foreground">+20.1% depuis le mois dernier</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Taux de réussite</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">79%</div>
          <p className="text-xs text-muted-foreground">+5% depuis le mois dernier</p>
        </CardContent>
      </Card>
    </div>
  )
}

