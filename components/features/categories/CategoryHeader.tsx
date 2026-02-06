"use client"
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import { Grid, List, Plus, X } from 'lucide-react'
import React, { useState } from 'react'
import AddNewCategory from './AddNewCategory'

interface CategoryHeaderProps {
    grid: boolean;
    setGrid: (grid: boolean) => void;
}

const CategoryHeader = ({ grid, setGrid }: CategoryHeaderProps) => {
    const [isAdding, setIsAdding] = useState(false)
    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex items-center justify-between'>
                <span className='flex flex-col'>
                    <h1 className='text-2xl text-neutral-100'>Categories</h1>
                    <h3 className='text-md text-neutral-500'>Organize your bookmarks by category</h3>
                </span>

                <div className='flex items-center justify-center gap-x-2'>
                    <Button
                        onClick={() => setIsAdding(!isAdding)}
                        className='flex items-center justify-center rounded-md w-32'
                    >
                        <Plus className='w-4 h-4 ml-1' />
                        Add New
                    </Button>

                    <Input className='w-72' placeholder='Search Categories...' />

                    <Button 
                    onClick={()=>setGrid((prev:boolean)=>!prev)}
                    className='w-22 rounded-md h-10 bg-transparent text-neutral-100 border border-neutral-800 hover:bg-neutral-900'>
                        {
                            !grid ?
                                <>
                                    <Grid className='w-4 h-4' />
                                    Grid
                                </>
                                :
                                <>
                                    <List className='w-4 h-4' />
                                    List
                                </>
                        }
                    </Button>
                </div>
            </div>

            {isAdding && (
                <div className="flex z-10 justify-center duration-300">
                    <AddNewCategory mount={isAdding} />
                </div>
            )}
        </div>
    )
}

export default CategoryHeader