import { getCampaigns } from "@/actions/strapi/api/campaigns/find"
import { Suspense } from "react"
import CampagnesSection from "."

async function Campaign() {
    const campaigns = await getCampaigns()
    return (
        <div >
            <Suspense fallback={<div className="flex flex-col w-full sm:flex-row sm:gap-4 md:gap-6">
                <div className="w-full sm:w-1/2 md:w-1/3 aspect-[3/4] bg-gray-200 animate-pulse rounded-lg mb-4 sm:mb-0" />
                
            </div>}>
                <CampagnesSection campaigns={campaigns} />
            </Suspense>

        </div>
    )
}

export default Campaign