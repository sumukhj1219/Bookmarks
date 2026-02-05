import { Category } from '@/types/Category'
import Link from 'next/link'

interface CategoryCardProps {
    category: Category
}

const CategoryCard = ({category}:CategoryCardProps) => {
  return (
    <Link key={category.slug} href={`/categories/${category.slug}`} className='p-3 rounded-sm  border border-neutral-800 text-xl hover:bg-neutral-900'>
        {category.name}
    </Link>
  )
}

export default CategoryCard