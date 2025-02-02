import { auth } from "@/auth"
import { redirect } from "next/navigation"

async function CreateCampagnePage() {
    // @ts-nocheck
    const session = await auth()
    if (!session?.user) redirect("/login")
    return (
        <div className='container section'>
            <h1 className='text-2xl md:text-3xl font-bold text-primary mb-8'>
                Créer une campagne
            </h1>
        </div>
    )
}

export default CreateCampagnePage