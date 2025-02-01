import { Heart } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import type { Campaign } from "@/types/campaign"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface FeaturedCampaignCardProps {
    campaign: Campaign | null
}

export function FeaturedCampaignCard({ campaign }: FeaturedCampaignCardProps) {
    if (!campaign) return null

    return (
        <div className="relative bg-white flex flex-col rounded-lg overflow-hidden border h-full">

            <div className="relative aspect-[16/9] h-1/2">
                <Image src={campaign.image || "/placeholder.svg"} width={500} height={500} alt={campaign.title} className="w-full h-full object-cover" />
                <button
                    className="absolute top-4 right-4 p-3 rounded-full bg-white/80 hover:bg-white transition-colors"
                    aria-label="Add to favorites"
                >
                    <Heart className="w-5 h-5" />
                </button>
            </div>

            <div className="p-6 h-1/2">
                <h3 className="font-bold mb-6 text-md text-primary">{campaign.title}</h3>
                <p className="text-gray-600 text-normal mb-6 text-sm line-clamp-2">{campaign.description}</p>

                <div className="flex justify-between items-center mb-4">
                    <div>
                        <span className="font-bold text-sm">{campaign.current}</span>
                        <span className="text-gray-500 text-sm"> collectés sur <b className="text-primary">{campaign.goal}</b></span>
                    </div>
                    <span className="text-gray-500 font-medium text-sm">{campaign.daysLeft}</span>
                </div>

                <Progress value={campaign.progress} className={"h-1 mb-3"} />

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                        <span className={cn("font-bold", campaign.progress >= 100 ? "text-green-500" : "text-secondary")}>{campaign.progress}%</span>
                        <span className="text-gray-500 text-sm">financé</span>
                    </div>
                    {campaign.location && <span className="text-gray-500">{campaign.location}</span>}
                </div>
            </div>
        </div>
    )
}

