import { generateMockCampaigns } from "@/lib/mock-data"
import GricCampaign from "@/components/campagnes/details"


async function CampagnePage() {
    const data = await generateMockCampaigns(30)
    return (
        <div className='container section'>
            <h1 className='text-2xl md:text-3xl font-bold text-primary mb-8'>
                Découvrir nos campagnes
            </h1>
            <p className="mb-8">
                Inspirez-vous des histoires qui font la différence — Explorez nos campagnes et rejoignez le mouvement !
            </p>
            <div>
                <GricCampaign data={data} />
            </div>


        </div>
    )
}

export default CampagnePage