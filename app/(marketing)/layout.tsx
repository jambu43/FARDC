import { ReactNode } from 'react'
import { Footer } from '@/components/footer'
import Header from '@/components/header'


type MarketingLayoutProps = {
    children: ReactNode
}

function MarketingLayout({ children }: MarketingLayoutProps) {
    return (
        <>
            <Header />
            <main className='min-h-screen'>
                {children}

            </main>
            Footer/
        </>
    )

}

export default MarketingLayout