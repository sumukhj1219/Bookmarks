"use client"

import { Category } from '@/types/Category'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface ExploreCategoryCardProps {
    category: Category;
}

const ExploreCategoryCard = ({ category }: ExploreCategoryCardProps) => {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const currentQueries = searchParams.getAll('query');
    const isActive = currentQueries.includes(category.slug);

    function handleSearch(slug: string) {
        const params = new URLSearchParams(searchParams);
        
        if (isActive) {
            const otherQueries = currentQueries.filter(q => q !== slug);
            params.delete('query');
            otherQueries.forEach(q => params.append('query', q));
        } else {
            params.append('query', slug);
        }
        
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <span
            onClick={() => handleSearch(category.slug)}
            className={cn(
                'p-3 rounded-sm border border-neutral-800 text-xl cursor-pointer transition-all active:scale-95',
                'hover:bg-neutral-900 select-none',
                isActive 
                    ? 'bg-neutral-900 border-neutral-800 text-white ' 
                    : 'text-neutral-400'
            )}
        >
            {category.name}
        </span>
    )
}

export default ExploreCategoryCard