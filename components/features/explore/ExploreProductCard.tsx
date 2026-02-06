import Rating from '@/components/commons/rating';
import { Product } from '@/types/Product'

interface ExploreProductCardProps {
    product: Product;
}

const ExploreProductCard = ({ product }: ExploreProductCardProps) => {
    return (
        <div className="flex h-[220px] flex-col justify-between rounded-md border border-neutral-800 p-4 hover:bg-neutral-900/50">
            <div className="flex flex-col gap-y-2">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-medium truncate">{product.title}</h3>
                    {product.images?.[0] && (
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="h-12 w-12 rounded object-cover"
                        />
                    )}
                </div>
                <p className="text-xs text-neutral-400 line-clamp-3">
                    {product.description}
                </p>
            </div>
            <div className="flex items-center justify-between">
                <Rating rate={product.rating} />
                <span className="rounded-md bg-neutral-900 px-2 py-1 text-xs text-neutral-300 border border-neutral-800">
                    {product.category}
                </span>
            </div>
        </div>
    )
}

export default ExploreProductCard;