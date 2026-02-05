import CategoryView from "@/components/features/categories/CategoryView"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { List } from "lucide-react"

const page = async ({ params }: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params
    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex items-center justify-between'>
                <span className='flex flex-col '>
                    <h1 className='text-2xl text-neutral-100'>{slug[0].toUpperCase() + slug.slice(1)}</h1>
                </span>
                <div className="flex items-center gap-x-3">
                    <Input className='w-72' placeholder='Search Categories...' />
                    <Button className='w-22 rounded-md h-10 bg-transparent text-neutral-100 border border-neutral-800 hover:bg-neutral-900'>
                        <List className='w-4 h-4' />
                        List
                    </Button>
                </div>
            </div>
            <CategoryView slug={slug} />
        </div>
    )
}

export default page