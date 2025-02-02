import React from 'react'

type Props = {
    params: Promise<{
        id: string
    }>
}

async function DonationsDetails({ params }: Props) {
    const { id } = await params
    return (
        <div className='container section'>
            <h1 className='text-2xl md:text-3xl font-bold text-primary mb-8'>
                Donations de la campagne  {id}
            </h1>
        </div>
    )
}

export default DonationsDetails