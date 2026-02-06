import React from 'react'
import ExploreAllCategories from './ExploreAllCategories'

const Explore = async() => {
    const response = await fetch("https://dummyjson.com/products/categories")
    const allCategories = await response.json()
    return (
       <ExploreAllCategories allCategories={allCategories} />
    )
}

export default Explore