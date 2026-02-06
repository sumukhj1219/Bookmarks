"use client"

import { Product } from '@/types/Product'
import ProductCard from './ProductCard'
import HomeHeader from './HomeHeader'
import { useEffect, useState } from 'react'

interface AllProductsProps {
    allProducts: Product[]
}

const AllProducts = ({ allProducts }: AllProductsProps) => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts)
    const [grid, setGrid] = useState<boolean>(true)
    return (
        <div className='flex flex-col gap-y-5'>
            <HomeHeader
                setFilteredProducts={setFilteredProducts}
                setGrid={setGrid}
                grid={grid}
            />
            <div className={`${grid ? "grid grid-cols-4" : "flex flex-col"} gap-3`}>
                {filteredProducts.map((product) => (
                    <ProductCard
                        filteredProducts={filteredProducts}
                        setFilteredProducts={setFilteredProducts}
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default AllProducts