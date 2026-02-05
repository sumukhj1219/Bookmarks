import { Category } from '@/types/Category'
import React from 'react'
import CategoryCard from './CategoryCard'

interface AllCategoriesProps {
    allCategories: Category[]
}

const AllCategories = ({allCategories}:AllCategoriesProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
        {
            allCategories.map((category)=>(
                <CategoryCard category={category} />
            ))
        }
    </div>
  )
}

export default AllCategories