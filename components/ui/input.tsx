import React from 'react'

interface InputProps {
    className?: string;
    placeholder?: string;
    onChange?: () => void;
    value?: string | number
}

const Input = ({ className, placeholder, onChange, value }: InputProps) => {
    return (
        <input
            className={`max-w-xl w-full bg-neutral-950 border border-neutral-800 h-10 rounded-md text-sm px-5 ${className}`}
            placeholder={placeholder || "Text"}
            onChange={onChange}
            value={value}
        />
    )
}

export default Input