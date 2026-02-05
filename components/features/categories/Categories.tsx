import React from 'react'
import AllCategories from './AllCategories'

const Categories = async () => {
    const response = await fetch("https://dummyjson.com/products/categories")
    const  allCategories  = await response.json()
    return (
        <AllCategories allCategories={allCategories} />
    )
}

export default Categories