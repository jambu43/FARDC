import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { getStats } from '@/actions/strapi/api/users/stats'
import {Briefcase,Users,DollarSign} from "lucide-react";


async function Indicateurs() {
    const stats = await getStats()
    return (
        <>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Campagnes créées</CardTitle>
                        <div>
                            <Briefcase size={'2em'} className={'text-primary'}/>
                        </div>

                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-primary">{stats.totalsCampaigns || 0}</div>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Nombre de donateurs</CardTitle>
                        <div>
                            <Users size={'2em'} className={'text-primary'}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-primary">{stats.totalsDonations || 0}</div>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Fonds reçus</CardTitle>
                        <div>
                            <DollarSign size={'2em'} className={'text-primary'}/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-primary">{stats.amountCollected || 0} $</div>

                    </CardContent>
                </Card>
            </div>
        </>

    )
}

export default Indicateurs