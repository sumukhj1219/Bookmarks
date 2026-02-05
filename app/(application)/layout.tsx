import Navbar from '@/components/commons/navbar'
import Sidebar from '@/components/commons/sidebar'
import React from 'react'

const ApplicationLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full'>
            <div className='flex'>
                <Sidebar />
                <div className='w-full flex flex-col h-full'>
                    <Navbar />
                    <div className='p-5'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationLayout