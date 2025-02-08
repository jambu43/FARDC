"use client"

import { useState, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CampaignCard } from "./campaign-card"
import { FeaturedCampaignCard } from "./featured-campaign-card"
import type { Campaign } from "@/types/campaign"
import useEmblaCarousel from "embla-carousel-react"
import Link from "next/link"

const categories = [
    { id: "a-la-une", label: "À la Une" },
    { id: "urgence", label: "Aide d'Urgence" },
    { id: "education", label: "Éducation" },
    { id: "sante", label: "Santé" },
    { id: "eau", label: "Eau & Assainissement" },
    { id: "alimentation", label: "Aide Alimentaire" },
    { id: "developpement", label: "Développement Durable" },
    { id: "enfance", label: "Protection de l'Enfance" },
    { id: "droits", label: "Droits Humains" },
]

type Props = {
    campaigns: any
}


export default function CampagnesSection({ campaigns }: Props) {

    const [activeCategory, setActiveCategory] = useState("a-la-une")
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
        dragFree: true,
        slidesToScroll: 3,
    })



    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit()
        }
    }, [emblaApi])

    const filteredCampaigns = useMemo(() => {
        if (activeCategory === "a-la-une") return campaigns
        return campaigns.filter((campaign: any) => campaign.categories.some((category: string) => categories.find((cat) => cat.id === activeCategory)?.id.toLowerCase().includes(category.toLowerCase())))
    }, [campaigns, activeCategory])

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    const renderCampaigns = (campaigns: Campaign[]) => {
        if (campaigns.length === 0) return null

        const featuredCampaign = campaigns[0]
        const remainingCampaigns = campaigns.slice(1)

        return (
            <div className="container ">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <div className="w-full lg:w-1/3">
                        {featuredCampaign && <FeaturedCampaignCard campaign={featuredCampaign} />}
                    </div>
                    <div className="w-full lg:w-2/3 flex flex-col gap-4 lg:gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                            {remainingCampaigns.slice(0, 3).map((campaign) => (
                                <div key={campaign.id}>
                                    <CampaignCard campaign={campaign} />
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                            {remainingCampaigns.slice(3, 6).map((campaign) => (
                                <div key={campaign.id}>
                                    <CampaignCard campaign={campaign} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <section className="section border-t border-gray-200">
            <div className="container flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">
                    Les <span className="text-secondary">collectes</span>
                </h2>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full" onClick={scrollPrev}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full" onClick={scrollNext}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8 hidden md:block">
                <TabsList className="flex overflow-x-auto scrollbar-none snap-x snap-start">
                    {categories.map((category) => (
                        <TabsTrigger
                            key={category.id}
                            value={category.id}
                            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap"
                        >
                            {category.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {filteredCampaigns.length > 0 ? (
                        filteredCampaigns.map((_: any, index: number) => (
                            <div className="flex-[0_0_100%] mr-4 md:mr-6" key={index}>
                                {renderCampaigns(filteredCampaigns.slice(index * 7, (index + 1) * 7))}
                            </div>
                        ))
                    ) : (
                        <div className="w-full text-center py-8">Aucune campagne trouvée dans cette catégorie.</div>
                    )}
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <Link href={"/campagnes"}>
                    <Button className="bg-primary hover:bg-primary/80 text-white">
                        Voir toutes les campagnes
                    </Button>
                </Link>

            </div>
        </section>
    )
}

