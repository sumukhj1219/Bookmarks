import { Star } from 'lucide-react'
import React from 'react'

interface RatingProps {
    rate: number
}

const Rating = ({rate}:RatingProps) => {
  return (
    <span className='flex items-center justify-center gap-x-2'>
        {
            Array.from({length:5}).map((_,i)=>(
                <Star key={i} className={`${i <= rate ? "fill-amber-500" : "fill-transparent"} stroke-amber-500 w-4 h-4`} />
            ))
        }
    </span>
  )
}

export default Rating