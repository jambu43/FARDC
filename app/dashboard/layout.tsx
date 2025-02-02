import { ReactNode } from 'react'
import { Footer } from '@/components/footer'
import Header from '@/components/header'


type DashboardLayoutProps = {
    children: ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <>
            <Header />
            <main className='min-h-screen'>
                {children}

            </main>
            <Footer />
        </>
    )

}

export default DashboardLayout