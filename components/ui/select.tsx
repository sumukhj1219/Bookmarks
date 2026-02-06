
interface SelectProps {
    items: any[];
    className?: string;
    id?: string;
    name?: string;
}

const Select = ({ items, className, id, name }: SelectProps) => {
    return (
        <div className="relative w-48" id={id}>
            <select
                name={name}
                className={`w-full appearance-none rounded-md border border-neutral-800 bg-[#1a1a1a] px-3 py-1.5 text-sm text-white outline-none ring-offset-black transition-all focus:ring-1 focus:ring-blue-500 h-10 w-xl ${className}`}
            >
                {items.map((item, index) => (
                    <option key={index} value={item.value} defaultValue={"Category"} className='uppercase'>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select