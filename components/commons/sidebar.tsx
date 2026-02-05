import { sidebarConfig } from '@/config/sidebar-config'
import Link from 'next/link'


const Sidebar = () => {
    return (
        <aside className='flex flex-col gap-y-5 px-5 h-screen bg-neutral-900 max-w-3xs w-full p-2 border-r border-neutral-800'>
            <img
                src={"/logo.png"}
                className='w-32 h-24 p-3 mx-auto'
            />
            <div className='flex flex-col gap-y-3'>
                {
                    sidebarConfig.map((item) => (
                        <Link
                            href={`/${item.url}`}
                            key={item.id}
                            className='flex items-center gap-x-2 hover:bg-neutral-950/50 p-2 rounded-lg'>
                            <item.icon className='w-4 h-4' />
                            {item.label}
                        </Link>
                    ))
                }
            </div>
        </aside>
    )
}

export default Sidebar