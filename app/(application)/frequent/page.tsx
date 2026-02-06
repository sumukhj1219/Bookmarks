import Frequent from '@/components/features/frequent/Frequent'
import Spinner from '@/components/ui/spinner'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Frequent />
        </Suspense>
    )
}

export default page