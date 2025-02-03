
import AddCampaignForm from "@/components/form/createCampaign"
import { getDonationsCategories } from "@/actions/strapi/api/donation-categories"


async function CreateCampagnePage() {
    const categories = await getDonationsCategories()

    return (
        <div className='container section'>
            <div className="mb-8 space-y-2">
                <h1 className='text-2xl md:text-3xl font-bold text-primary '>
                    Créer une campagne
                </h1>
                <p>
                    Vous pouvez ajouter une campagne de crowdfunding en remplissant le formulaire ci-dessous
                </p>
            </div>

            <div>

                <AddCampaignForm categories={categories} />

            </div>
        </div>
    )
}

export default CreateCampagnePage