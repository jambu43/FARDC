import Hero from '@/components/about/hero'
import Manifesto from '@/components/about/manifesto'
import MissionContent from '@/components/about/mission'
import StatsSection from '@/components/about/stats-section'
import React from 'react'

function AproposPage() {
    return (
        <div className=''>
            <Hero />
            <MissionContent />
            <StatsSection />
            <Manifesto />
            
        </div>
    )
}

export default AproposPage