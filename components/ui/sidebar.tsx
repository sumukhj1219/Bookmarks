import { sidebarConfig } from '@/config/sidebar-config'
import React from 'react'

interface SidebarProps {

}

const Sidebar = () => {
  return (
    <aside className='flex-1 h-full max-w-xl p-2'>
        {
            sidebarConfig.map((item)=>(
                <span key={item.id} className='flex gap-x-3'>

                </span>
            ))
        }
    </aside>
  )
}

export default Sidebar