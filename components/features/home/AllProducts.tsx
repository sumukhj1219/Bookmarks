import { Product } from '@/types/Product'
import ProductCard from './ProductCard' 

interface AllProductsProps {
    allProducts: Product[]
}

const AllProducts = ({ allProducts }: AllProductsProps) => {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default AllProducts