import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentDonations() {
  return (
    <div className="space-y-8">
      {recentDonations.map((donation) => (
        <div key={donation.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={donation.avatar} alt="Avatar" />
            <AvatarFallback>{donation.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{donation.name}</p>
            <p className="text-sm text-muted-foreground">{donation.email}</p>
          </div>
          <div className="ml-auto font-medium">{donation.amount}$</div>
        </div>
      ))}
    </div>
  )
}

const recentDonations = [
  {
    id: "1",
    name: "Olivier Dupont",
    email: "olivier@example.com",
    amount: 50,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "2",
    name: "Sophie Martin",
    email: "sophie@example.com",
    amount: 100,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "3",
    name: "Lucas Bernard",
    email: "lucas@example.com",
    amount: 25,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "4",
    name: "Emma Petit",
    email: "emma@example.com",
    amount: 75,
    avatar: "/placeholder-user.jpg",
  },
]

