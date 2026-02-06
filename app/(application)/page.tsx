import Home from '@/components/features/home/Home'
import Spinner from '@/components/ui/spinner'
import { Suspense } from 'react'


const page = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Home />
    </Suspense>
  )
}

export default page