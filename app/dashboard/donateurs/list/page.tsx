import { DonorsOverview } from "@/components/dasboard/donors/donors-overview";
import { DonorsTable } from "@/components/dasboard/donors/donors-table";


export default function DonorsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Donateurs</h2>
      </div>
      <DonorsOverview />
      <DonorsTable />
    </div>
  )
}

