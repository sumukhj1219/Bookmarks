"use client"

import Button from '@/components/ui/button'
import { Product } from '@/types/Product';
import { ArrowDownAZ, ArrowUpAZ, Grid, List, Loader2 } from 'lucide-react'
import { useState } from 'react';

interface HomeHeaderProps {
    setFilteredProducts: (products: Product[]) => void;
    setGrid: (grid: boolean) => void;
    grid: boolean
}

const HomeHeader = ({ setFilteredProducts, grid, setGrid }: HomeHeaderProps) => {
    const [loading, setLoading] = useState(false);
    const [isAsc, setIsAsc] = useState(true);

    async function handleSort() {
        setLoading(true);
        const order = isAsc ? 'asc' : 'desc';

        try {
            const res = await fetch(`https://dummyjson.com/products?sortBy=title&order=${order}`);
            const json = await res.json();
            setFilteredProducts(json.products);
            setIsAsc(!isAsc);
        } catch (error) {
            console.error("Sort failed", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex items-center justify-between'>
            <span className='flex flex-col'>
                <h1 className='text-2xl text-neutral-100'>Home</h1>
                <h3 className='text-md text-neutral-500'>Effortless Bookmark Management</h3>
            </span>
            <div className='flex gap-x-2'>
                <Button
                    onClick={handleSort}
                    className='w-28 rounded-md h-10 bg-transparent text-neutral-100 border border-neutral-800 hover:bg-neutral-900 gap-2'
                >
                    {loading ? (
                        <Loader2 className='w-4 h-4 animate-spin' />
                    ) : isAsc ? (
                        <ArrowDownAZ className='w-4 h-4' />
                    ) : (
                        <ArrowUpAZ className='w-4 h-4' />
                    )}
                    {loading ? 'Sorting...' : 'Sort'}
                </Button>
                <Button 
                onClick={()=>setGrid(grid=>!grid)}
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
    )
}

export default HomeHeader