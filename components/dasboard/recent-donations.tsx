import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {
    recentDonations: any
}

export function RecentDonations({ recentDonations }: Props) {
  return (
    <div className="space-y-8">
      {recentDonations.map((donation:any) => (
        <div key={donation.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={donation?.avatar} alt="Avatar" />
            <AvatarFallback>{donation.name.charAt(0)}</AvatarFallback>
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


