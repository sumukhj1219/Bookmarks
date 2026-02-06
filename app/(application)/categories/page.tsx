import Categories from '@/components/features/categories/Categories'
import CategoryHeader from '@/components/features/categories/CategoryHeader'

const page = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <Categories />
        </div>
    )
}

export default page