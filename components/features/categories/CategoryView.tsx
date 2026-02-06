import { Product } from '@/types/Product'
import CategoryViewCard from './CategoryViewCard'

interface CategoryViewProps {
    slug: string
}

const CategoryView = async ({ slug }: CategoryViewProps) => {
    const response = await fetch(`https://dummyjson.com/products/category/${slug}`)
    const { products } = await response.json()
    return (
        <div className='flex flex-col items-center justify-center w-full gap-y-3'>
            {
                products.map((product: Product) => (
                    <CategoryViewCard product={product} />
                ))
            }
        </div>
    )
}

export default CategoryView