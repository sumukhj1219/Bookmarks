import Settings from '@/components/features/settings/Settings'
import Spinner from '@/components/ui/spinner'
import { Suspense } from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex items-center justify-between'>
                <span className='flex flex-col '>
                    <h1 className='text-2xl text-neutral-100'>Settings</h1>
                    <h3 className='text-md text-neutral-500'>Manage your app preferences</h3>
                </span>
            </div>
            <Suspense fallback={<Spinner />}>
                <Settings />
            </Suspense>
        </div>
    )
}

export default page