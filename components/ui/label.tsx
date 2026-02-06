import { cn } from '@/lib/utils'
import React from 'react'

interface LabelProps {
    htmlFor?: string
    children: React.ReactNode
    className?: string
}

const Label = ({ htmlFor, children, className }: LabelProps) => {
    return (
        <label htmlFor={htmlFor} className={cn("text-lg", className)}>
            {children}
        </label>
    )
}

export default Label