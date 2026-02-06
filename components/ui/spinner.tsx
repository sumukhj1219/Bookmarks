import { Loader2 } from 'lucide-react'
import React from 'react'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center mx-auto min-h-screen'>
        <Loader2 className='w-10 h-10 animate-spin' />
    </div>
  )
}

export default Spinner