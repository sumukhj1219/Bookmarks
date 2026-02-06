"use client"
import { Category } from '@/types/Category'
import React, { useState } from 'react'
import CategoryCard from './CategoryCard'
import { Product } from '@/types/Product'
import CategoryHeader from './CategoryHeader'

interface AllCategoriesProps {
    allCategories: Category[]
}

const AllCategories = ({ allCategories }: AllCategoriesProps) => {
    const [filteredCategories, setFilteredCategories] = useState<Category[]>(allCategories)
    const [grid, setGrid] = useState<boolean>(true)

    return (
        <div className='flex flex-col gap-y-5'>
        <CategoryHeader grid={grid} setGrid={setGrid} />
        <div className={`${grid ? "grid grid-cols-4 gap-4" : "flex flex-col gap-4"}`}>
            {
                filteredCategories.map((category) => (
                    <CategoryCard
                        category={category}
                    />
                ))
            }
        </div>
        </div>
    )
}

export default AllCategories