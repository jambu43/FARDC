import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Simulons des données de donateur pour cet exemple
const getDonorInfo = (id: string) => ({
  id,
  name: "Alice Dubois",
  email: "alice.dubois@example.com",
  totalDonated: 1250,
  firstDonation: "2022-03-15",
  lastDonation: "2023-06-10",
  campaignsSupported: 5,
  avatar: "/placeholder-avatar.jpg", // Remplacez par le chemin réel de l'avatar
})

export function DonorInfo({ donorId }: { donorId: string }) {
  const donor = getDonorInfo(donorId)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations du donateur</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={donor.avatar} alt={donor.name} />
            <AvatarFallback>{donor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-2xl font-semibold">{donor.name}</h3>
            <p className="text-sm text-muted-foreground">{donor.email}</p>
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-medium text-muted-foreground">Total donné</span>
            <span className="text-xl font-bold">
              {new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(donor.totalDonated)}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-medium text-muted-foreground">Première donation</span>
            <span className="text-xl font-bold">{new Date(donor.firstDonation).toLocaleDateString("fr-FR")}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-medium text-muted-foreground">Dernière donation</span>
            <span className="text-xl font-bold">{new Date(donor.lastDonation).toLocaleDateString("fr-FR")}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-medium text-muted-foreground">Campagnes soutenues</span>
            <span className="text-xl font-bold">{donor.campaignsSupported}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

