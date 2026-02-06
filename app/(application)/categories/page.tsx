import Categories from '@/components/features/categories/Categories'
import CategoryHeader from '@/components/features/categories/CategoryHeader'
import Spinner from '@/components/ui/spinner'
import { Suspense } from 'react'

const page = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Categories />
        </Suspense>
    )
}

export default page