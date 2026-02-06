import ExploreResults from '@/components/features/explore/ExploreResults'
import Spinner from '@/components/ui/spinner'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ExploreResults />
    </Suspense>
  )
}

export default page