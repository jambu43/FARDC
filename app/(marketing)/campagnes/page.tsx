import GricCampaign from "@/components/campagnes/details"
import { getCampaigns } from "@/actions/strapi/api/campaigns/find"
import { Input } from "@/components/ui/input"
import { Search,  } from "lucide-react"

async function CampagnePage() {
    const data = await getCampaigns()
    return (
        <div className='container section'>
            
            <h1 className="text-center text-2xl md:text-3xl text-primary mb-8 font-bold">
                Trouvez des campagnes et des associations à but non lucratif
            </h1>
            <p className="mb-8 text-center">
                Inspirez-vous des histoires qui font la différence — Explorez nos campagnes et rejoignez le mouvement !
            </p>
            <div className="mb-20">
                <div className="relative max-w-[600px] mx-auto">
                    <Input type="text" placeholder="Recherche" className="pl-10 py-6 rounded-3xl border-spacing-1 w-full" />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>
            <div>
                <GricCampaign data={data} />
            </div>


        </div>
    )
}

export default CampagnePage