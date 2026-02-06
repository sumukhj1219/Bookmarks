import Navbar from '@/components/commons/navbar'
import Sidebar from '@/components/commons/sidebar'
import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const ApplicationLayout = async({ children }: { children: React.ReactNode }) => {
    // const cookieStore = await cookies()
    // const token = cookieStore.get("authjs.session-token")
    // if(!token) {
    //     redirect("/login")
    // }
    return (
        <div className='flex h-screen w-full overflow-hidden'>
            <Sidebar />
            <div className='w-full flex-1 flex flex-col h-full min-w-0'>
                <Navbar />
                <main className='p-5 flex-1 overflow-y-auto'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default ApplicationLayout