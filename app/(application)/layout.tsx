import Navbar from '@/components/commons/navbar'
import Sidebar from '@/components/commons/sidebar'
import React from 'react'

const ApplicationLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className='flex'>
                <Sidebar />
                <Navbar />
            </div>
            {children}
        </div>
    )
}

export default ApplicationLayout