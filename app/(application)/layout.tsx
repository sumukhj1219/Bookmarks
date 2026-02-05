import Sidebar from '@/components/ui/sidebar'
import React from 'react'

const ApplicationLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}

export default ApplicationLayout