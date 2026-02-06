"use client"

import { Category } from '@/types/Category'
import ExploreCategoryCard from './ExploreCategoryCard'
import Button from '@/components/ui/button'
import { useSearchParams, useRouter } from 'next/navigation'

interface AllCategoriesProps {
    allCategories: Category[]
}

const ExploreAllCategories = ({ allCategories }: AllCategoriesProps) => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleContinue = () => {
        router.push(`/explore/results?${searchParams.toString()}`)
    }

    return (
        <div className='flex flex-col items-center justify-center gap-y-10 w-full'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                {allCategories.map((category) => (
                    <ExploreCategoryCard key={category.slug} category={category} />
                ))}
            </div>
            
         
                <Button 
                    onClick={handleContinue}
                    className="w-full max-w-md  text-neutral-900 py-6 text-lg"
                >
                    Continue 
                </Button>
        </div>
    )
}

export default ExploreAllCategories