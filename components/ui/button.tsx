import { Plus } from 'lucide-react'
import React from 'react'

interface ButtonProps {
    className?: string
    children: React.ReactNode
}

const Button = ({className, children}: ButtonProps) => {
  return (
    <button className={`flex cursor-pointer rounded-sm text-md justify-center bg-neutral-50 text-neutral-950 items-center gap-x-3 w-44 h-10 ${className}`}>
        <Plus className='w-5 h-5' />
        {children}
    </button>
  )
}

export default Button