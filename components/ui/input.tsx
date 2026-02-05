import { cn } from '@/lib/utils';

interface InputProps {
    className?: string;
    placeholder?: string;
    onChange?: () => void;
    value?: string | number
    id?: string
    type?:string
}

const Input = ({ className, placeholder, onChange, value, id , type}: InputProps) => {
    return (
        <input
            id={id}
            className={cn("max-w-xl w-full bg-neutral-950 border border-neutral-800 h-10 rounded-md text-sm px-5", className)}
            placeholder={placeholder || "Text"}
            onChange={onChange}
            value={value}
            type={type || "text"}
        />
    )
}

export default Input