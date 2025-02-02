import { FeaturedCampaignCard } from "../home/campagnes/featured-campaign-card"


type Props = {
    data: any
}

function GricCampaign({ data }: Props) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                data.map((item: any) => (
                    <FeaturedCampaignCard key={item.id} campaign={item} />
                ))
            }
        </div>
    )
}

export default GricCampaign