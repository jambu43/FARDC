import { ReactNode } from 'react'
import { Footer } from '@/components/footer'
import Header from '@/components/header'
import SideBar from '@/components/sideBar'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'


type DashboardLayoutProps = {
    children: ReactNode
}

async function DashboardLayout({ children }: DashboardLayoutProps) {
    const session = await auth()
    if (!session) redirect("/login")
    return (
        <>
            <Header />
            <main className='min-h-screen'>
                <div className='grid grid-cols-[20%_80%] gap-4'>
                    <SideBar />
                    <div >
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )

}

export default DashboardLayout