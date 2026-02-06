"use client"
import { Product } from '@/types/Product'
import FrequentProductCard from './FrequentProductCard'
import { useState } from 'react'
import FrequentHeader from './FrequentHeader'

interface AllProductsProps {
    allProducts: Product[]
}

const AllProducts = ({ allProducts }: AllProductsProps) => {
    const [grid, setGrid] = useState<boolean>(true)

    return (
        <div className='flex flex-col gap-y-5'>
            <FrequentHeader grid={grid} setGrid={setGrid} />
            <div className={`${grid ? "grid grid-cols-2 gap-2" : "flex flex-col gap-4"}`}>
                {allProducts.map((product) => (
                    <FrequentProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default AllProducts