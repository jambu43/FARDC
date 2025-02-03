import { Heart, Eye } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import type { Campaign } from "@/types/campaign"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FeaturedCampaignCardProps {
    campaign: any
}

export function FeaturedCampaignCard({ campaign }: FeaturedCampaignCardProps) {
    if (!campaign) return null

    return (
        <div>
            <Link href={`/campagnes/${campaign?.id}`} passHref legacyBehavior>
                <div className="relative bg-white flex flex-col justify-between rounded-lg overflow-hidden border h-full ">

                    <div className="relative aspect-[16/9] min-h-[200px] md:min-h-[400px] ">
                        <Image src={campaign?.featuredImage || "/placeholder.svg"} width={500} height={500} alt={campaign.title} className="w-full h-full object-cover" />
                        <button
                            className="absolute top-4 right-4 p-3 rounded-full bg-white/80 hover:bg-white transition-colors"
                            aria-label="Add to favorites"
                        >
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-6 ">
                        <h3 className="font-bold mb-6 text-md text-primary line-clamp-2">{campaign.title}</h3>
                        <p className="text-gray-600 text-normal mb-6 text-sm line-clamp-2">{campaign.description}</p>

                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <span className="font-bold text-sm">{campaign.amountCollected}</span>
                                <span className="text-gray-500 text-sm"> collectés sur <b className="text-primary">{campaign.goal}$</b></span>
                            </div>
                            <span className="text-gray-500 font-medium text-sm">Jour-{campaign.daysLeft}</span>
                        </div>

                        <Progress value={campaign.progress} className={"h-1 mb-3"} />

                        <div className="flex justify-between items-center mt-4 gap-2">
                            <div className="flex items-center gap-2">
                                <span className={cn("font-bold", campaign.progress >= 100 ? "text-green-500" : "text-secondary")}>{campaign.progress}%</span>

                            </div>
                            <div>

                                <Link href={`/campagnes/donations/${campaign.id}`}>
                                    <Button size="sm" className="bg-secondary text-white text-sm flex items-center gap-2">
                                        <Heart className="w-4 h-4" />
                                        <span>Contribuer</span>
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

