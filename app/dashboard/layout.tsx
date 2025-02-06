import { ReactNode } from 'react'
import { Footer } from '@/components/footer'
import Header from '@/components/header'
import SideBar from '@/components/sideBar'


type DashboardLayoutProps = {
    children: ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <>
            <Header />
            
            <main className='min-h-screen'>
                <div className='flex'>
                    <div className='w-[20%]'>
                        <SideBar />
                    </div>
                    <div className='w-[80%]'>
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )

}

export default DashboardLayout