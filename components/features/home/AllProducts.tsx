import { Product } from '@/types/Product'
import ProductCard from './ProductCard' 

interface AllProductsProps {
    allProducts: Product[]
}

const AllProducts = ({ allProducts }: AllProductsProps) => {
    return (
        <div className="grid grid-cols-4 gap-3">
            {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default AllProducts