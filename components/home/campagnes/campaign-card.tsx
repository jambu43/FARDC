import { Heart } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import type { Campaign } from "@/types/campaign"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CampaignCardProps {
    campaign: any
    isLoading?: boolean
}

export function CampaignCard({ campaign, isLoading }: CampaignCardProps) {
    if (isLoading) {
        return (
            <div className="group relative bg-white rounded-lg overflow-hidden animate-pulse  shadow-lg">
                <div className="relative aspect-[4/3] bg-gray-200" />
                <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <div className="h-2 w-24 bg-gray-200 rounded-full" />
                            <div className="h-4 w-16 bg-gray-200 rounded" />
                        </div>
                        <div className="h-4 w-12 bg-gray-200 rounded" />
                    </div>
                </div>
            </div>
        )
    }

    if (!campaign) return null

    return (
        <div className="cursor-pointe">
            <Link href={`/campagnes/${campaign.id}`} passHref legacyBehavior className="cursor-pointer">
                <div className="group relative bg-white flex flex-col rounded-lg overflow-hidden  cursor-pointer shadow-lg">
                    <div className="relative aspect-[16/9] h-1/2">
                        <Image src={campaign.featuredImage || "/placeholder.svg"} width={500} height={500} alt={campaign.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    <div className="p-4 ">
                        <h3 className="font-bold mb-6 text-xs text-primary line-clamp-2">{campaign.title}</h3>
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-xs">
                                <span className="font-bold text-xs">{campaign.amountCollected}</span>
                                <span className="text-gray-500"> collectés sur </span>
                            </div>
                            <span className="text-gray-500 font-medium text-xs"><b className="text-primary">{campaign.goal}$</b></span>
                            {/* <span className="text-gray-500 font-medium text-xs">Jour-{campaign.daysLeft}</span> */}
                        </div>

                        <Progress value={campaign.progress} className="h-1 mb-2" />

                        <div className="flex justify-between items-center text-sm mt-4">
                            <div className="flex items-center gap-2">
                                <span className={cn("font-bold", campaign.progress >= 100 ? "text-green-500" : "text-secondary")}>{campaign.progress}%</span>
                            </div>
                            <div>
                                <Link href={`/campagnes/donations/${campaign.id}`}>
                                    <Button size="sm" className="bg-secondary text-white text-sm flex items-center gap-2">
                                        <Heart className="w-4 h-4" />
                                        <span>Faire un don</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

