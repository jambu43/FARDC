import { Heart } from "lucide-react"
import { Progress } from "@/components/ui/progress"
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
        <div className="cursor-pointer">
            <Link href={`/campagnes/${campaign?.id}`} passHref legacyBehavior className="cursor-pointer">
                <div className="relative bg-white flex flex-col justify-between rounded-lg overflow-hidden h-full shadow-lg">

                    <div className="relative aspect-[16/9] h-[200px] md:h-[200px] ">
                        <Image src={campaign?.featuredImage || "/placeholder.svg"} width={300} height={300} alt={campaign.title} className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    <div className="p-6">
                        <h3 className="mb-2 font-bold text-[12px] text-black line-clamp-2">{campaign.title}</h3>
                        <p className="text-gray-600  mb-6 text-sm line-clamp-1">{campaign.description}</p>

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
                                        <span>Faire un bon</span>
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

