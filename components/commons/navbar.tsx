import React from 'react'
import Input from '../ui/input'
import Button from '../ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='w-full flex items-center justify-between h-16 p-3 border-b border-neutral-800 bg-neutral-900'>
            <Input placeholder='Search anything...' />
            <Link href={"/add-bookmark"}>
                <Button >
                    <Plus className='w-5 h-5' />
                    New Bookmark
                </Button>
            </Link>
        </nav>
    )
}

export default Navbar