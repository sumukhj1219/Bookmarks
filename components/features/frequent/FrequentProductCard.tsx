import Rating from '@/components/commons/rating';
import Button from '@/components/ui/button';
import { Product } from '@/types/Product';
import { ExternalLink, Pencil, Share2, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
    product: Product;
}

const FrequentProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="group relative flex w-full flex-col gap-y-4 rounded-md border border-neutral-800 bg-[#121212] p-4 transition-all hover:border-neutral-700 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-1 gap-x-4 min-w-0">
                <div className="h-12 w-12  overflow-hidden rounded-lg bg-neutral-900">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="h-full w-full object-contain p-1"
                    />
                </div>
                <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-x-3">
                        <h3 className="text-xl font-semibold text-white truncate">
                            {product.title}
                        </h3>
                        <Rating rate={product.rating} />
                    </div>
                    <p className="mt-1 text-sm text-neutral-400 line-clamp-1">
                        {product.description}
                    </p>

                    <div className="mt-4">
                        <span className="rounded bg-[#1a1a1a] px-3 py-1 text-xs font-medium text-white border border-neutral-800">
                            {product.category}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-x-2 self-end">
                <Link href={`/`}>
                    <Button className="flex items-center gap-x-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
                        Visit website <ExternalLink size={14} />
                    </Button>
                </Link>
                <Button className="p-2  w-10  rounded-md bg-white text-black hover:bg-neutral-200 transition-colors">
                    <Trash2 size={18} />
                </Button>
            </div>
        </div>
    );
};

export default FrequentProductCard;