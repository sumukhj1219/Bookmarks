import Categories from '@/components/features/categories/Categories'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import { List, Plus } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex items-center justify-between'>
                <span className='flex flex-col '>
                    <h1 className='text-2xl text-neutral-100'>Categories</h1>
                    <h3 className='text-md text-neutral-500'>Organize your bookmarks by category</h3>
                </span>

                <div className='flex items-center justify-center gap-x-2'>
                    <Button className='flex items-center justify-center  rounded-md w-32'>
                        Add New
                        <Plus className='w-4 h-4' />
                    </Button>
                    <Input className='w-72' placeholder='Search Categories...' />
                    <Button className='w-22 rounded-md h-10 bg-transparent text-neutral-100 border border-neutral-800 hover:bg-neutral-900'>
                        <List className='w-4 h-4' />
                        List
                    </Button>
                </div>
            </div>

            <Categories />
        </div>
    )
}

export default page