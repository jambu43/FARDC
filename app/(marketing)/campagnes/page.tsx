import { generateMockCampaigns } from "@/lib/mock-data"
import GricCampaign from "@/components/campagnes/details"


async function CampagnePage() {
    const data = await generateMockCampaigns(30)
    return (
        <div className='container section'>
            <h1 className='text-2xl md:text-3xl font-bold text-primary mb-8'>
                Nos campagnes de crowdfunding
            </h1>
            <div>
                <GricCampaign data={data} />
            </div>


        </div>
    )
}

export default CampagnePage