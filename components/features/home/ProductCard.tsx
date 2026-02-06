"use client"
import Rating from '@/components/commons/rating';
import Button from '@/components/ui/button';
import { Product } from '@/types/Product'
import { Trash } from 'lucide-react';

interface ProductCardProps {
    product: Product;
    setFilteredProducts: (products: Product[]) => void;
    filteredProducts: Product[]
}

async function deleteProduct(productId: string) {
    await fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(console.log);
}

const ProductCard = ({ product, setFilteredProducts, filteredProducts }: ProductCardProps) => {
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
            <Button
                onClick={() => {
                    // api call
                    const updated = filteredProducts.filter((prod) => product.id !== prod.id)
                    setFilteredProducts(updated)
                }}
                className='w-5 h-5 bg-red-500/5 border border-neutral-800'>
                <Trash className='p-1 stroke-red-500' />
            </Button>
        </div>
    )
}

export default ProductCard;