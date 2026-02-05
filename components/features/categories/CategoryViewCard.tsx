import Rating from '@/components/commons/rating'
import { Product } from '@/types/Product'
import React from 'react'

interface CategoryViewCardProps {
    product: Product
}

const CategoryViewCard = ({product}:CategoryViewCardProps) => {
    return (
        <div key={product.id} className='group flex w-full items-center justify-between p-2 h-14 border border-neutral-800 rounded-md gap-x-4 cursor-pointer hover:bg-neutral-900 transition-colors'>
            
            <div className='flex items-center gap-x-3 min-w-0 flex-1'>
                <img 
                    src={product.images[0]} 
                    className='w-10 h-10 bg-neutral-900 rounded object-cover flex-shrink-0' 
                    alt=""
                />
            
                <div className='flex flex-col  gap-x-3 min-w-0 flex-1'>
                    <h2 className='font-bold text-sm whitespace-nowrap'>{product.title}</h2>
                    <p className='text-xs w-1/2 text-neutral-500 truncate'>
                        {product.description}
                    </p>
                </div>
            </div>

            <div className='flex items-center gap-x-2 flex-shrink-0'>
                <span className="block rounded-md bg-neutral-900 px-2 py-1 text-[10px] text-neutral-300 border border-neutral-800 ">
                    {product.category}
                </span>
                <div className="flex-shrink-0">
                    <Rating rate={product.rating} />
                </div>
            </div>
        </div>
    )
}

export default CategoryViewCard