import { DonationChart } from "@/components/dasboard/donation-chart"
import { RecentDonations } from "@/components/dasboard/recent-donations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Onboarding from "@/components/organisations/onboarding"
import { getStrapiUser } from "@/actions/strapi/services/server"
import { getOrganisationUser } from "@/actions/strapi/api/organisations/find-one"
import Indicateurs from "@/components/organisations/stats/indicateurs"


export default async function DashboardPage() {

  const user = await getStrapiUser()
  const organisation = await getOrganisationUser()
  return (
    <div className="flex-1 space-y-4  section">

      <Onboarding organisation={organisation} userId={user?.id} />
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Tableau de bord</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d&apos;ensemble</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Indicateurs />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Aperçu des donations</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <DonationChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Donations récentes</CardTitle>
              </CardHeader>
              <CardContent>
                <RecentDonations />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

