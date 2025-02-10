import { DonorInfo } from "@/components/dasboard/donors/donor-info"
import DonationHistory from "@/components/dasboard/donors/donation-history"
import EnConstruction from "@/components/shared/en-construction"



export default async function DonorDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: donorId } = await params

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Détails du donateur</h2>
      {/* <DonorInfo donorId={donorId} />
      <DonationHistory donorId={donorId} /> */}
      <EnConstruction />
    </div>
  )
}

