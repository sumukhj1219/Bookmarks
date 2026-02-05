import Home from '@/components/features/home/Home'
import Button from '@/components/ui/button'
import { ArrowDown01Icon, List } from 'lucide-react'

const page = () => {
  return (
    <div className='flex flex-col gap-y-5'>
      <div className='flex items-center justify-between'>
        <span className='flex flex-col '>
          <h1 className='text-2xl text-neutral-100'>Home</h1>
          <h3 className='text-md text-neutral-500'>Effortless Bookmark Management</h3>
        </span>

        <div className='flex gap-x-2'>
          <Button className='w-22 rounded-md h-10 bg-transparent text-neutral-100 border border-neutral-800 hover:bg-neutral-900'>
            <ArrowDown01Icon className='w-4 h-4' />
            Sort
          </Button>

          <Button className='w-22 rounded-md h-10 bg-transparent text-neutral-100 border border-neutral-800 hover:bg-neutral-900'>
            <List className='w-4 h-4' />
            List
          </Button>
        </div>
      </div>
      <Home />
    </div>
  )
}

export default page