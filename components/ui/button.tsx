import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import React from 'react'

interface ButtonProps {
    className?: string
    children: React.ReactNode
    type?: "submit" | "reset" | "button" | undefined
    onClick?:()=>void;
}

const Button = ({className, children, type, onClick}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={cn("flex cursor-pointer rounded-sm text-md justify-center bg-neutral-50 text-neutral-950 items-center gap-x-3 w-44 h-10", className)}>
        {children}
    </button>
  )
}

export default Button