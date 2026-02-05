import CategoryView from "@/components/features/categories/CategoryView"

const page = async ({ params }: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params
    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex items-center justify-between'>
                <span className='flex flex-col '>
                    <h1 className='text-2xl text-neutral-100'>{slug[0].toUpperCase()+slug.slice(1)}</h1>
                </span>
            </div>
            <CategoryView slug={slug} />
        </div>
    )
}

export default page