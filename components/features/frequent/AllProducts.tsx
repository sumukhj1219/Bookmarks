import { Product } from '@/types/Product'
import FrequentProductCard from './FrequentProductCard' 

interface AllProductsProps {
    allProducts: Product[]
}

const AllProducts = ({ allProducts }: AllProductsProps) => {
    return (
        <div className="flex flex-col gap-y-5">
            {allProducts.map((product) => (
                <FrequentProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default AllProducts