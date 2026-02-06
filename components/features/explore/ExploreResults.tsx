"use client"
import { Product } from '@/types/Product'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ExploreProductCard from './ExploreProductCard'

const ExploreResults = () => {
    const searchParams = useSearchParams()
    const categories = searchParams.getAll("query")

    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAllProducts = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://dummyjson.com/products?limit:0`)
                const json = await res.json()

                setProducts(json.products)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchAllProducts()
    }, [])

    return (
        <div className='flex flex-col w-full gap-y-6'>
            {categories.length > 0 && (
                <div className='flex gap-x-2 items-center justify-center flex-wrap'>
                    {categories.map((category) => (
                        <span key={category} className='px-4 py-1 bg-neutral-100 text-neutral-800 rounded-full border border-neutral-300 text-sm'>
                            {category}
                        </span>
                    ))}
                </div>
            )}

            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <p className="animate-pulse">Loading...</p>
                </div>
            ) : (
                <div className="grid grid-cols-4 gap-6">
                    {products.
                        // filter((product) => categories.includes(product.category))
                        map((product) => (
                            <ExploreProductCard key={product.id} product={product} />
                        ))}
                </div>
            )}
        </div>
    )
}

export default ExploreResults