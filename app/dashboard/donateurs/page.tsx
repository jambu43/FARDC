import { DonorsOverview } from "@/components/dasboard/donors/donors-overview";
import { DonorsTable } from "@/components/dasboard/donors/donors-table";
import { getDonations, getStatsDonations } from "@/actions/strapi/api/donations/find";


export default async function DonorsPage() {
  const donations = await getDonations()
  const stats = await getStatsDonations()
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Donateurs</h2>

      </div>
      <DonorsOverview data={stats} />
      <DonorsTable data={donations} />
    </div>
  )
}

