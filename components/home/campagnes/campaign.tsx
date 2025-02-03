import { getCampaigns } from "@/actions/strapi/api/campaigns/find"
import { Suspense } from "react"
import CampagnesSection from "."

async function Campaign() {
    const campaigns = await getCampaigns()
    return (
        <div >
            <Suspense fallback={<div className="flex flex-col w-full sm:flex-row sm:gap-4 md:gap-6">
                <div className="w-full sm:w-1/2 md:w-1/3 aspect-[3/4] bg-gray-200 animate-pulse rounded-lg mb-4 sm:mb-0" />
                <div className="w-full sm:w-1/2 md:w-2/3 flex flex-col gap-4 md:gap-6">
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={`skeleton-top-${index}`}
                                className="w-full sm:w-1/3 aspect-[4/3] bg-gray-200 animate-pulse rounded-lg mb-4 sm:mb-0"
                            />
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={`skeleton-bottom-${index}`}
                                className="w-full sm:w-1/3 aspect-[4/3] bg-gray-200 animate-pulse rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </div>}>
                <CampagnesSection campaigns={campaigns} />
            </Suspense>

        </div>
    )
}

export default Campaign